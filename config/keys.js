// OAuth client

//
console.log('process env',process.env);
if (process.env.NODE === 'production') { //automatically set on heroku
  module.exports = require('./prod');
} else {
  module.exports = require('./dev');
}