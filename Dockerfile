# Usa una imagen base de Node.js
FROM node:22.10.0

# Define variables de construcción
ARG TURSO_CONNECTION_URL
ARG TURSO_AUTH_TOKEN
ARG NODE_ENV

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json (si existe)
COPY package*.json ./

# Instala las dependencias
RUN npm ci

# Copia el resto del código de la aplicación
COPY . .

# Define las variables de entorno para la aplicación
ENV TURSO_CONNECTION_URL=${TURSO_CONNECTION_URL}
ENV TURSO_AUTH_TOKEN=${TURSO_AUTH_TOKEN}
ENV NODE_ENV=${NODE_ENV}

# Expone el puerto en el que corre la aplicación (por ejemplo, 3000)
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]
