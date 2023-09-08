FROM node:10

WORKDIR /APP 

COPY package.json . 

RUN npm install

COPY . . 

EXPOSE 8080

CMD ["npm", "start"]