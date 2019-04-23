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

  function findByNameKnex(name, callback) {
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

   return {

    findByNameKnex: findByNameKnex,
  }

})()