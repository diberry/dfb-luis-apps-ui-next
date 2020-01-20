# docker build --no-cache -t diberry/cog-mod-mgmt-ui .
# docker run -d -p 8080:8080 diberry/cog-mod-mgmt-ui:latest
# winpty docker run --rm -it -p 3000:3000 t1 bash

FROM node:10

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

# Install Git
RUN apt-get update && \
     apt-get install -y git

# Git repo
RUN git clone https://github.com/diberry/dfb-luis-apps-ui-next.git && \
           cd dfb-luis-apps-ui-next && \
           npm install && \
           npm run build && \
           cat package.json

WORKDIR /usr/src/app/dfb-luis-apps-ui-next

EXPOSE 8080:8080

# Running the app
CMD [ "npm", "start" ]
