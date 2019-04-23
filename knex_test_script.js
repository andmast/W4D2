module.exports = (function(){

  const settings = require("./settings");

  const knex = require('knex')({
    client: 'pg',
    connection: {
      host : settings.host,
      user : settings.user,
      password : settings.password,
      database : settings.database
    }
  });

  function findByName(name, callback) {
    knex.select('*').from('famous_people')
    .where('first_name', '=' ,name).orWhere('last_name', '=', name)
    .asCallback(function(err, rows) {
      if (err) {
        callback(err)
      }
      callback(null, rows)
      knex.destroy();
    })
  }

  //INSERT INTO famous_people (first_name, last_name, birthdate)
  // VALUES ('Abraham', 'Lincoln', '1809-02-12');

  function insertFamous (array) {
    const first_name = array[0];
    const last_name = array[1];
    const birthdate = array[2];
    knex('famous_people')
    .insert({first_name,last_name,birthdate})
    .then(() => console.log("data Added"))
    .catch((err) => console.log("error",err))
    .finally(() => knex.destroy());
  }



   return {
    findByName: findByName,
    insertFamous: insertFamous,
  }

})()