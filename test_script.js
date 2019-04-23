module.exports = (function(){

  const pg = require('pg');
  const settings = require("./settings");



  const client = new pg.Client({
    user : settings.user,
    password : settings.password,
    database: settings.database,
    host : settings.host,
    port : settings.port,
    ssl : settings.ssl
  });

  client.connect((err) => {
    if (err) {
      return console.error("Connection Error", err);
    }
  });

  function findByName(name, callback) {
    client.query(`SELECT * FROM famous_people WHERE first_name = $1`, [name])
    .then (results => {
      callback(null, results)
      client.end();
    })
    .catch (e => callback(e.stack))
  }

  return {
    findByName: findByName,
  }

})()