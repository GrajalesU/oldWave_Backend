FROM node:14

ENV PORT=8080
ENV HOST=mysql
ENV DB_USER=root
ENV DB_PORT=3306
ENV PASSWORD=root
ENV DATABASE=oldwave

WORKDIR /node-app
COPY package.json .
RUN npm install
COPY . .
CMD npm start