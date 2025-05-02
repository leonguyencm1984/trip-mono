FROM node:14

WORKDIR /usr/src/app

COPY package.json ./
#COPY ../shared-models/shared-models-1.0.0.tgz ./shared-models-1.0.0.tgz
RUN npm install ./shared-models-1.0.0.tgz
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000
CMD ["node", "dist/app.js"]