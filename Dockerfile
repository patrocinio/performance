FROM node:12.12.0

COPY package.json .
RUN npm install
COPY . .
EXPOSE 9080
CMD ["npm", "start"]
