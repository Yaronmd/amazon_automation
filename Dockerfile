FROM cypress/browsers:node16.16.0-chrome107-ff107

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npx", "cypress", "run"]
