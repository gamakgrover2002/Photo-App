#Base package
FROM ubuntu:latest

# install nodejs
RUN apt-get update && \
    apt-get install -y curl && \
    curl -sL https://deb.nodesource.com/setup_22.x | bash - && \
    apt-get install -y nodejs && \
    apt-get upgrade -y

    # Set working directory
WORKDIR /markdown-converter
#Copy File
COPY package*.json ./
COPY src/index.js ./
RUN rm -rf /root/.npm /docker-file/node_modules && \
    npm install
#Enty Point setup
ENTRYPOINT ["node", "index.js"]


