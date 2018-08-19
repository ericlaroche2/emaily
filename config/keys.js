// OAuth client

//
console.log('process env',process.env);
if (process.env.NODE_ENV === 'production') { //automatically set on heroku
  module.exports = require('./prod');
  console.log('process env','prod');

} else {
  module.exports = require('./dev');
  console.log('process env dev');

}