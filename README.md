This will work out of the box on a fresh cloud9 workspace using the following commands:

`apt-get install -y mongodb-org`

`mongod --smallfiles --syslog --fork`

`npm install`

`npm start`

Your files and such are hosted at https://projectname-username.c9users.io

If your server was shut down then before starting mongod do:

`rm /data/db/mongod.lock`

----
For quick Backbone Intro start with:

hero.js then 
view.js then 
multipage.js then 
create your own ToDo list App
