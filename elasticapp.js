const pkg = require('./package.json');
const path = require('path');

// nconf configuration.
const nconf = require('nconf');
nconf
  .argv()
  .env('__')
  .defaults({'NODE_ENV': 'production'});

const NODE_ENV = nconf.get('NODE_ENV');

nconf
  .defaults({'conf': path.join(__dirname, `${NODE_ENV}.config.json`)})
  .file(nconf.get('conf'));


// Express and middleware.
const express = require('express');
const app = express.Router();

//要调整的目标
app.get('/api/version', (req, res) => res.status(200).json(pkg.version));


// Add local API routes.
app.use('/api', require('./lib/book.js')(nconf.get('es')));
app.use('/api', require('./lib/bundle.js')(nconf.get('es')));

const distPath = path.join(__dirname, "dist");
app.use(express.static(distPath));

app.use((req,res)=>{
  res.sendFile(path.join(__dirname, "dist/assets/elasticapp.html"))
});

module.exports = app;
