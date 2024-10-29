# Usa una imagen base de Node.js
FROM node:22.10.0

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json (si existe)
COPY package*.json ./

# Instala las dependencias
RUN npm ci

# Copia el resto del código de la aplicación
COPY . .

# Expone el puerto en el que corre la aplicación (por ejemplo, 3000)
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]
