# Matherials created following training from Shaun Wassell

## [react blog lessons](https://github.com/shaunwa/react-blog)
## [blog backend lessons](https://github.com/shaunwa/react-blog-backend)


#### TODO (note some commands...)

```
ssh -i ~/.ssh/my-blog-key.pem ec2-user@<domain-name>
ssh -i ~/.ssh/my-blog-key.pem ec2-user@ec2-3-249-55-77.eu-west-1.compute.amazonaws.com
```

##### [install mongo](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-amazon/)
```
sudo yum -h
sudo yum install git
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
~/.nvm/nvm.sh
ls -al ~/.nvm/
chmod a+x ~/.nvm/nvm.sh
~/.nvm/nvm.sh
nvm
nvm ls-remote
nvm i v14.15.1
node -v
npm -v
grep ^NAME  /etc/*release
```

```
sudo nano /etc/yum.repos.d/mongodb-org-4.4.repo
```

```
[mongodb-org-4.4]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/amazon/2/mongodb-org/4.4/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-4.4.asc
```

```
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

```
git clone https://github.com/SergiiVlasiuk/my-blog-react-training.git
cd ./my-blog-react-training/my-blog-backend/
npm i
npm i -g forever
forever start -c "npm start" .
forever list
```
##### [Routing](https://gist.github.com/kentbrew/776580)
```
sudo iptables -t nat -L
sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-ports 8000
sudo iptables -t nat -L

curl http://domain-name/
```


