const express = require('express');
const morgan = require('morgan');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controller/errorController');
const estateRouter = require('./routes/estateRoutes');
const userRouter = require('./routes/userRoutes');
const facultyRouter = require('./routes/facultyRoutes');
const inventoryRouter = require('./routes/inventoryRoutes');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/faculties', facultyRouter);
app.use('/api/estates', estateRouter);
app.use('/api/users', userRouter);
app.use('/api/inventory', inventoryRouter);

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});

app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`));
});

app.use(globalErrorHandler);
module.exports = app;
