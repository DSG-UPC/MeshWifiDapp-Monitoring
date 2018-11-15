FROM node:latest

# Create scraper directory
WORKDIR /usr/src/scraper

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install

# Copy all the elements to the working folder
COPY . .

# App runs on port 9000 so we need to expose this port
EXPOSE 9000

CMD [ "npm", "start" ]