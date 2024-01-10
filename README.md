# Restaurant Order Management System

This system is a basic yet functional tool designed for handling orders in a restaurant setting. It allows staff to create new customer orders, view existing orders, update order details as needed, delete orders if necessary, and search through orders based on criteria like order number, customer name, or date. The primary focus is on demonstrating proficiency in CRUD operations within a restaurant context.

Technologies:
* NodeJS: https://nodejs.org/docs/latest/api/
* Express: https://expressjs.com/
* MongoDB Atlas: https://www.mongodb.com/docs/
* Mongoose: https://mongoosejs.com/docs/guide.html

scaling-garbanzo/
│
├── node_modules/              # Módulos Node.js instalados
│
├── public/                    # Arquivos estáticos (CSS, JS, imagens)
│   ├── css/                   # Folhas de estilo CSS
│   ├── js/                    # Arquivos JavaScript
│   └── img/                   # Imagens
│
├── views/                     # Templates EJS
│   ├── partials/              # Partes reutilizáveis do template (cabeçalho, rodapé)
│   │   ├── header.ejs
│   │   └── footer.ejs
│   ├── pages/                 # Páginas EJS
│   │   ├── home.ejs
│   │   ├── about.ejs
│   │   └── contact.ejs
│   └── index.ejs              # Página inicial
│
├── models/                    # Modelos Mongoose (esquemas do MongoDB)
│   ├── user.js
│   └── post.js
│
├── routes/                    # Rotas Express
│   ├── index.js               # Rotas principais
│   ├── users.js               # Rotas de usuários
│   └── posts.js               # Rotas de posts
│
├── config/                    # Configurações do projeto (banco de dados, etc.)
│   ├── db.js
│   └── auth.js
│
├── app.js                     # Ponto de entrada da aplicação
├── package.json               # Metadados do projeto e dependências
├── .env                       # Variáveis de ambiente (não deve ser versionado)
└── README.md                  # Documentação do projeto