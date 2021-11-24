const app = require("./server");


const port = process.env.PORT || 5000;
// Initialize DB by runing the imported function
require('./initDB')();

//Routes
app.use('/categories', require('./Routes/Category.route'));
app.use('/orders', require('./Routes/Order.route'));
app.use('/products', require('./Routes/Product.route'));
app.use('/users', require('./Routes/User.route'));

app.listen(port, () => {
    console.log(`Ranger Bikes server  listening at http://localhost:${port}`);
});