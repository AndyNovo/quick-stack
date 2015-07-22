mongod --smallfiles --syslog --fork
npm start

If your server was shut down then before starting mongod do:

rm /data/db/mongod.lock
