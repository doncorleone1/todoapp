# to-do app

##### Prerequisites
* You need to have node.js installed in your machine.
* You need to have Express.js installed in your machine.
* You need to have MongoDB installed in your machine.

##### Installing node.js:
* Go to https://nodejs.org/en/
* Download the version you prefer. I suggest the version "Recommended For Most Users".
* Install it in the folder you prefer. I will use **C:\Program Files\Node** as example.

##### Installing Express.js:
* Open the command prompt and go to the node installation folder. Example: `CD C:\Program Files\Node`
* With administrator permission, type `npm install -g express-generator`.

##### Installing MongoDB:
* Go to https://www.mongodb.com/download-center?jmp=nav#community
* Download the community version.
* Install it in the folder you prefer. I will use **C:\ProgramFiles\MongoDB** as example.

##### Configuring MongoDB:
* Open your command prompt and go to the root folder of this application (I will use **C:\todoapp** as an example) typing `CD C:\todoapp`.
* Type `mkdir data`. You can create this folder somewhere else if you want to, but I am going to use this path as an example.
* Go to the bin folder of mongoDB. Example: type `CD C:\Program Files\MongoDB\Server\4.0\bin`.
* Type `mongod --dbpath c:\node\todoapp\data`. This will initialize your **server**. You should see a message saying ***[initandlisten] waiting for connections on port 27017***.
* Open a new command prompt window. Do not close the previous one.
* Again, go to the bin folder of mongoDB. Example: type `CD C:\Program Files\MongoDB\Server\4.0\bin`.
* Type `mongo`. This will initialize your **client**.
* In the client window, type `use todoapp`. This will change the database to the one created.
* **Do not close any of these command prompts while using the application**.

##### Installing Node Modules:
* Open a new command prompt and go to the root folder of this application. Example: type `CD C:\todoapp`.
* Type `npm install` to install the standard node modules.
* Type `npm install -S mongodb` to install the MongoDB module.
* **Do not close the command prompt. Use it to initialize the application**.

##### Initializing Application:
* Type `npm start` in the last command prompt to initialize your application.
* In your browser, type **localhost:3000**.

##### Built With:
* Ajax
* Bootstrap
* CSS
* Express.JS
* HTML
* JavaScript
* JQuery
* MongoDB
* Node.JS

##### Version History:
* First commit
* Database module added to .gitignore
* Database path fixed
* Layout finished
* Ajax added
* Function "Update" changed
* Asynchronous functions implemented using Ajax
* Readme file updated
* Removed unused files from GitHub based on Andras' suggestion
* Removed inline CSS modification to external style sheet based on Andras' suggestion
* Space character consistency applied on the project based on Andras' suggestion
* JQuery added through CDN instead of locally based on Andras' suggestion
* Alterations made on Readme file based on Andras' suggestion

##### Author:
* Matheus Lazarin