const express = require('express');
const app = express();
const userRouter = require("./routes/users.route")
const productsRouter = require("./routes/products.route")
const PORT = 5000;
app.use(express.urlencoded({ extended: true }));

//import from tge routes
app.use(userRouter)
app.use(productsRouter)

app.get("/", (req, res) => {
    res.send("Hello from api")
})

// invalid router wildcard
app.use("*", (req, res) => {
    res.send("Invalid Route")
})

app.listen(PORT, () => {
    console.log('server is running port', PORT);
})
