FROM node:10.5.0

COPY package.json .
RUN npm install
COPY . .
EXPOSE 9080
CMD ["npm", "start"]
