var app = require('./config/server.config')();
require('./db/index')();
var prodRoute = require('./routes/products');
app.use('/api/v1/products', prodRoute);