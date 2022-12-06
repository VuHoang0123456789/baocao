const homeRouter = require('./home');
const customerRouter = require('./customer');
const employeeRouter = require('./employee');
const employeeTypeRouter = require('./employeeType');
const productRouter = require('./product');
const outputRouter = require('./output');
const inputRouter = require('./input');
const outputInfoRouter = require('./ouputInfo');
const inputInfoRouter = require('./inputInfo');
const accountRouter = require('./account');

function route(app)
{
    app.use('/customer', customerRouter);
    app.use('/employee', employeeRouter);
    app.use('/employee-type', employeeTypeRouter);
    app.use('/product', productRouter);
    app.use('/output', outputRouter);
    app.use('/input', inputRouter);
    app.use('/outputInfo', outputInfoRouter);
    app.use('/inputInfo', inputInfoRouter);
    app.use('/account', accountRouter);
    app.use('/', homeRouter);
}

module.exports = route;
