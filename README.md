# Docker

Off Link https://nodejs.org/uk/docs/guides/nodejs-docker-webapp/ 

* Build an Image
```
    docker build -t node-app/node-app .
```

* Run Container from image
```
    docker run -p 8080:8080 -d node-app/node-app
```