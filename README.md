# Restaurant Order Management System

This system is a basic yet functional tool designed for handling orders in a restaurant setting. It allows staff to create new customer orders, view existing orders, update order details as needed, delete orders if necessary, and search through orders based on criteria like order number, customer name, or date. The primary focus is on demonstrating proficiency in CRUD operations within a restaurant context.

Technologies:
* NodeJS: https://nodejs.org/docs/latest/api/
* Express: https://expressjs.com/
* MongoDB Atlas: https://www.mongodb.com/docs/
* Mongoose: https://mongoosejs.com/docs/guide.html
* EJS:
* Jest: 


## Project Structure:

<pre>
scaling-garbanzo/
│
├── node_modules/              <span style="color: blue;"># Node.js installed modules</span>
│
├── public/                    <span style="color: blue;"># Static files (CSS, JS, images)</span>
│   ├── css/                   <span style="color: blue;"># CSS Stylesheets</span>
│   ├── js/                    <span style="color: blue;"># JavaScript files</span>
│   └── img/                   <span style="color: blue;"># Images</span>
│
├── views/                     <span style="color: blue;"># EJS Templates</span>
│   ├── partials/              <span style="color: blue;"># Reusable template parts (header, footer)</span>
│   │   ├── header.ejs
│   │   └── footer.ejs
│   ├── pages/                 <span style="color: blue;"># EJS Pages</span>
│   │   ├── home.ejs
│   │   ├── about.ejs
│   │   └── contact.ejs
│   └── index.ejs              <span style="color: blue;"># Home page</span>
│
├── models/                    <span style="color: blue;"># Mongoose Models (MongoDB schemas)</span>
│   ├── user.js
│   └── post.js
│
├── routes/                    <span style="color: blue;"># Express Routes</span>
│   ├── index.js               <span style="color: blue;"># Main routes</span>
│   ├── users.js               <span style="color: blue;"># User routes</span>
│   └── posts.js               <span style="color: blue;"># Post routes</span>
│
├── config/                    <span style="color: blue;"># Project configurations (database, etc.)</span>
│   ├── db.js
│   └── auth.js
│
├── app.js                     <span style="color: blue;"># Application entry point</span>
├── package.json               <span style="color: blue;"># Project metadata and dependencies</span>
├── .env                       <span style="color: blue;"># Environment variables (should not be versioned)</span>
└── README.md                  <span style="color: blue;"># Project documentation</span>
</pre>
