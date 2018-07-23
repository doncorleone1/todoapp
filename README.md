# todoapp

Setting up environment:

1 - You need to have node.js installed in your machine;\
2 - You need to have express.js installed in your machine;\
3 - You need to have mongoDB installed in your machine;\
4 - Open your command prompt and go to the root folder of this application (I will use C:\node\todoapp as an example) typing "cd C:\node\todoapp";\
5 - Type "npm install" to install the node modules;\
6 - Type mkdir data. You can create this folder somewhere else if you want to, but I am going to use this path as an example;\
7 - Go to the bin folder of mongoDB. Example: type "cd C:\Program Files\MongoDB\Server\4.0\bin";\
8 - Type "mongod --dbpath c:\node\todoapp\data\". This will initialize your server. You should see a message saying "[initandlisten] waiting for connections on port 27017";\
9 - Open a new command prompt window (do not close the previous one);\
10 - Again, go to the bin folder of mongoDB. Example: type "cd C:\Program Files\MongoDB\Server\4.0\bin";\
11 - Type "mongo". This will initialize your client;\
12 - In the client window, type "use todoapp". This will change the database to the one you created;\
13 - Open a new command prompt window (do not close the previous one);\
14 - Go to the root folder of this application typing "cd C:\node\todoapp";\
15 - Type "npm install -S mongodb". This will install the mongodb module;\
16 - Type "npm start". This will initialize your application;\
17 - In your browser, go to "localhost:3000".

You are all set now.