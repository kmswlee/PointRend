FROM python:3

CMD ["bash"]

RUN apt-get update
#install python package
RUN pip install numpy
RUN pip install matplotlib
RUN pip install Pillow
# Install Node.js 8 and npm 5
RUN apt-get -y install curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_11.x  | bash -
RUN apt-get -y install nodejs
#RUN mkdir -p /workspace
WORKDIR /workspace

RUN rm -rf node_modules && npm install

COPY package.json ./
RUN npm install
RUN mkdir /workspace/images
RUN mkdir /workspace/output

COPY . .
EXPOSE 8080
ENTRYPOINT npm start
