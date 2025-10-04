# Dockerfile para o projeto Next.js (weppy-landingpage)

# --- Estágio 1: Dependências e Build ---
# Usamos a imagem 'builder' para instalar dependências e construir o projeto.
FROM node:18-alpine AS builder
WORKDIR /app

# Copia os ficheiros de manifesto e instala as dependências
COPY package*.json ./
RUN npm install

# Copia o resto do código do projeto
COPY . .

# Cria o ficheiro .env.production a partir dos argumentos (que virão do GitHub Actions)
ARG NEXT_PUBLIC_API_BASE_URL
RUN echo "NEXT_PUBLIC_API_BASE_URL=${NEXT_PUBLIC_API_BASE_URL}" > .env.production

# Constrói a aplicação Next.js para produção
RUN npm run build

# --- Estágio 2: Imagem Final de Produção ---
# Começamos com uma imagem limpa para manter o tamanho final pequeno
FROM node:18-alpine
WORKDIR /app

# Copia apenas os ficheiros necessários da 'builder' para a imagem final
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

# Expõe a porta que o servidor de produção do Next.js usa
EXPOSE 3000

# O comando para iniciar o servidor de produção do Next.js
CMD ["npm", "start"]