# Imagem base ultra leve do Bun
FROM oven/bun:1.1-slim

# Diretório de trabalho dentro do container
WORKDIR /app

# Copia tudo da pasta local para o container
COPY . .

# Comando para rodar o script (apontando para dentro da pasta src)
CMD ["bun", "run", "src/index.ts"]