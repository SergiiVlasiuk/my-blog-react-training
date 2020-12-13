# Matherials created following training from Shaun Wassell

## [react blog lessons](https://github.com/shaunwa/react-blog)
## [blog backend lessons](https://github.com/shaunwa/react-blog-backend)


#### TODO (note some commands...)

```
ssh -i ~/.ssh/my-blog-key.pem ec2-user@ec2-3-249-55-77.eu-west-1.compute.amazonaws.com
```

##### [install mongo](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-amazon/)
```
sudo nano /etc/yum.repos.d/mongodb-org-4.4.repo
...
sudo yum install -y mongodb-org
...
sudo service mongod start
mongo
> use my-blog
> db.articles.insert([
... { name: 'learn-react', upvotes: 0, comments:[] }, { name: 'learn-scala', upvotes:0, comments:[] }, { name: 'learn-idris', upvotes:0, comments:[] }, { name: 'learn-cloud', upvotes:0, comments:[] },
... { name: 'learn-dart', upvotes: 3, comments:[]}
... ]
... )

> db.articles.find({})
```


