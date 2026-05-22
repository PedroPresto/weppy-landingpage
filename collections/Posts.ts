import type { CollectionAfterChangeHook, CollectionAfterDeleteHook, CollectionConfig, FieldHook } from "payload";
import { revalidatePath } from "next/cache";

const slugify = (value: string): string =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

const ensureSlug: FieldHook = ({ value, data }) => {
  if (typeof value === "string" && value.length > 0) return slugify(value);
  if (data?.title) return slugify(String(data.title));
  return value;
};

const setModifiedAt: FieldHook = ({ value, operation }) => {
  if (operation === "create" || operation === "update") {
    return new Date().toISOString();
  }
  return value;
};

// Invalida o cache ISR sempre que um post é criado, atualizado ou excluído.
// Sem isso, /blog/[slug] continua servindo o HTML antigo até o revalidate expirar (1h)
// ou um redeploy. /blog (listing) é force-dynamic e já reflete na hora.
const revalidateBlog: CollectionAfterChangeHook = ({ doc, previousDoc }) => {
  try {
    revalidatePath("/blog");
    if (doc?.slug) revalidatePath(`/blog/${doc.slug}`);
    // Se o slug mudou, invalida também o antigo
    if (previousDoc?.slug && previousDoc.slug !== doc?.slug) {
      revalidatePath(`/blog/${previousDoc.slug}`);
    }
  } catch {
    // Em contextos sem next/cache (ex: scripts CLI), apenas ignora
  }
  return doc;
};

const revalidateBlogAfterDelete: CollectionAfterDeleteHook = ({ doc }) => {
  try {
    revalidatePath("/blog");
    if (doc?.slug) revalidatePath(`/blog/${doc.slug}`);
  } catch {
    // ignore
  }
  return doc;
};

export const Posts: CollectionConfig = {
  slug: "posts",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "status", "publishedAt"],
  },
  hooks: {
    afterChange: [revalidateBlog],
    afterDelete: [revalidateBlogAfterDelete],
  },
  access: {
    read: ({ req: { user } }) => {
      if (user) return true;
      return {
        status: { equals: "published" },
      };
    },
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    { name: "title", type: "text", required: true, label: "Título (H1, ~55 chars)" },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      index: true,
      admin: { position: "sidebar" },
      hooks: { beforeValidate: [ensureSlug] },
    },
    {
      name: "cover",
      type: "upload",
      relationTo: "media",
      required: true,
      label: "Imagem de capa (OG / 1200x630)",
    },
    {
      name: "excerpt",
      type: "textarea",
      required: true,
      maxLength: 160,
      label: "Meta description / excerpt (até 160 chars — usado em SEO)",
    },
    {
      name: "keywords",
      type: "text",
      required: false,
      label: "Palavras-chave (separadas por vírgula, ajuda GEO)",
    },
    {
      name: "category",
      type: "select",
      required: false,
      options: [
        { label: "WhatsApp Marketing", value: "whatsapp-marketing" },
        { label: "Automação de Vendas", value: "automacao-vendas" },
        { label: "Atendimento ao Cliente", value: "atendimento" },
        { label: "Inteligência Artificial", value: "ia" },
        { label: "Cases de Sucesso", value: "cases" },
        { label: "Guias e Tutoriais", value: "guias" },
      ],
      admin: { position: "sidebar" },
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "users",
      required: false,
      admin: { position: "sidebar", description: "Assinatura do post (E-E-A-T para SEO/GEO)" },
    },
    {
      name: "content",
      type: "richText",
      required: true,
      label: "Conteúdo",
    },
    {
      name: "faq",
      type: "array",
      required: false,
      label: "FAQ (gera FAQPage schema — turbina GEO/AI Overviews)",
      fields: [
        { name: "question", type: "text", required: true, label: "Pergunta" },
        { name: "answer", type: "textarea", required: true, label: "Resposta" },
      ],
    },
    {
      name: "publishedAt",
      type: "date",
      required: true,
      defaultValue: () => new Date().toISOString(),
      admin: { position: "sidebar", date: { pickerAppearance: "dayAndTime" } },
      label: "Publicado em",
    },
    {
      name: "modifiedAt",
      type: "date",
      required: false,
      admin: {
        position: "sidebar",
        readOnly: true,
        date: { pickerAppearance: "dayAndTime" },
        description: "Atualizado automaticamente",
      },
      hooks: { beforeChange: [setModifiedAt] },
    },
    {
      name: "status",
      type: "select",
      required: true,
      defaultValue: "draft",
      options: [
        { label: "Rascunho", value: "draft" },
        { label: "Publicado", value: "published" },
      ],
      admin: { position: "sidebar" },
    },
  ],
};
