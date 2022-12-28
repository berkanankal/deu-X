# uni-X

This is my graduation project. Thanks to this application, students can buy and sell second-hand items, notes, books, and find a roommate or a place to stay.

## Demo

https://uni-x.onrender.com/

## Tech Stack
### Frontend
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Redux Toolkit](https://redux-toolkit.js.org/) - Tools that helps simplify Redux development. Redux is simply a store to store the state of the variables in your app.
- [Material UI](https://mui.com/) - An open-source React component library that implements Google's Material Design.
- [React Router](https://reactrouter.com/en/main) - A standard library for routing in React.
- [Formik](https://formik.org/) - Third party React form library.
- [Yup](https://www.npmjs.com/package/yup) - JavaScript object schema validator.
- [Moment](https://momentjs.com/) - JavaScript library which helps is parsing, validating, manipulating and displaying date/time in JavaScript in a very easy way.
- [Axios](https://axios-http.com/docs/intro) - Javascript library used to make HTTP requests from node.
- [React Toastify](https://www.npmjs.com/package/react-toastify) - Allows you to add notifications to your app with ease.
- [Recharts](https://www.npmjs.com/package/react-toastify) - A composable charting library built on React components.

### Backend
- [MongoDB](https://www.mongodb.com/home) - Document-oriented NoSQL database used for high volume data storage.
- [Express.js](https://expressjs.com/) - Node.js web application framework.
- [Node.js](https://nodejs.org/en/) - Open-source, cross-platform JavaScript runtime environment.
- [Bcrypt.js](https://www.npmjs.com/package/bcryptjs) - Optimized bcrypt in JavaScript with zero dependencies.
- [Mongoose](https://www.npmjs.com/package/mongoose) - MongoDB object modeling tool designed to work in an asynchronous environment.
- [Multer](https://www.npmjs.com/package/multer) - Middleware designed to handle multipart/form-data in forms.
- [Express Async Handler](https://www.npmjs.com/package/express-async-handler) - Simple middleware for handling exceptions inside of async express routes and passing them to your express error handlers.
- [Dotenv](https://www.npmjs.com/package/dotenv) - Zero-dependency module that loads environment variables from a .env file into process.env.
- [Nodemon](https://www.npmjs.com/package/nodemon) - Tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
- [Json Web Token](https://jwt.io/) - Open standard used to share security information between two parties — a client and a server.
- [Cors](https://www.npmjs.com/package/cors) - Node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.


## Environment Variables

To run this project, you will need to add the following environment variables to your `/server/config/env/config.env` file.

`MONGO_URI`: Your MongoDB URI. <br>
`JWT_SECRET_KEY`: Anything you can think of.

## Run Locally

First clone this repository.

```bash
git clone https://github.com/berkanankal/uni-X.git
```

Go to the project directory.

```bash
cd uni-X
```

Go to the server directory. Install dependencies and run server. Make sure you already have [`nodejs`](https://nodejs.org/en/) & [`npm`](https://www.npmjs.com/) installed in your system.

```bash
cd server
npm install
npm start
```


Go to the client directory. Install dependencies and run the client.

```bash
cd client
npm install
npm start
```

## Screenshots

![anasayfa](https://user-images.githubusercontent.com/67144252/209861707-8fca64d7-0bd2-4beb-90f0-2a99298eae24.png)
<br>
<br>
![evark](https://user-images.githubusercontent.com/67144252/209861759-de6faa62-7848-4fd0-9a84-0a9fd261f0e4.png)
<br>
<br>
![esya](https://user-images.githubusercontent.com/67144252/209861773-466d5e76-8a63-4831-9c3c-ec8e7c0ab893.png)
<br>
<br>
![kitap](https://user-images.githubusercontent.com/67144252/209861785-fb764ac4-067e-40e4-9eaa-102a82f98756.png)
<br>
<br>
![not](https://user-images.githubusercontent.com/67144252/209861791-23374e5b-4277-4a68-aacc-1de1f2f2fa86.png)
<br>
<br>
![profil](https://user-images.githubusercontent.com/67144252/209861798-e21bac63-4227-414e-8d56-a787eeaf735e.png)
<br>
<br>
![kitapilan](https://user-images.githubusercontent.com/67144252/209861812-01fa2d0f-29e1-4389-b95d-dc665715938a.png)
<br>
<br>
![kitapilan2](https://user-images.githubusercontent.com/67144252/209861822-610e0b5b-5b38-4c3a-8165-ae252a2b1967.png)




