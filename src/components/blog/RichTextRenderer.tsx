import { RichText } from "@payloadcms/richtext-lexical/react";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

export default function RichTextRenderer({
  content,
}: {
  content: SerializedEditorState;
}) {
  return (
    <div className="blog-content">
      <RichText data={content} />
    </div>
  );
}
