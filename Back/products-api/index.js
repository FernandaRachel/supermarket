var app = require('./config/server')();
require('./db/index')();
require('./routes/products')(app);