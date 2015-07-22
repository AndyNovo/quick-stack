This will work out of the box on a fresh cloud9 workspace using the following commands:

`mongod --smallfiles --syslog --fork`

`npm install`

`npm start`

If your server was shut down then before starting mongod do:

`rm /data/db/mongod.lock`

----
For quick Backbone Intro start with:

hero.js then 
view.js then 
multipage.js then 
create your own ToDo list App