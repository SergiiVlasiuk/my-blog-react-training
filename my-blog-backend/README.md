```
npm init -y
npm i --save express
npm i --save-dev @babel/core @babel/node @babel/preset-env
```
add some changes into `server.js` file and start server after that:

```
npx babel-node src/server.js
curl http://localhost:8000/hello


npm i --save body-parser


curl --header "Content-Type: application/json" \
  -X POST \
  --data '{"name":"Sergii"}' \
  http://localhost:8000/hello

curl http://localhost:8000/hello/Sergii

curl -X POST http://localhost:8000/api/articles/learn-idris/upvote


npm install --save-dev nodemon
npx nodemon --exec npx babel-node src/server.js


curl --header "Content-Type: application/json" \
  -X POST \
  --data '{"username":"Sergii","text":"I love this article!"}' \
  http://localhost:8000/api/articles/learn-idris/comment
curl --header "Content-Type: application/json" \
  -X POST \
  --data '{"username":"Someone else","text":"Me too!"}' \
  http://localhost:8000/api/articles/learn-idris/comment
```

```
npm i --save mongodb
or
npm i --save mongoose

curl http://localhost:8000/api/articles/learn-idris

```
