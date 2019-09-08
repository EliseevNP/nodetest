FROM node:10-alpine
WORKDIR /usr/balances_backend
COPY ./ ./
RUN ls -la
RUN npm install --only=production
CMD npm run start