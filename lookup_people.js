const dbPG = require ('./test_script')
const dbKNEX = require ('./knex_test_script')
const input = process.argv[2];

dbPG.findByName(input,function(err, output) {
      if(!err) {
        console.log(`Found by pg ${output.rows.length} person(s) by the name of '${input}': `)
        output.rows.forEach( (element, index) => {
          console.log(`- ${index + 1}: ${element.first_name} ${element.last_name}, born '${element.birthdate.toLocaleDateString('en-CA')}'`);
        });
      } else {
        console.log(err);
      }
    });

dbKNEX.findByNameKnex(input,function(err, output) {
      if(!err) {
        console.log(`Found by knex ${output.length} person(s) by the name of '${input}': `)
        output.forEach( (element, index) => {
          console.log(`- ${index + 1}: ${element.first_name} ${element.last_name}, born '${element.birthdate.toLocaleDateString('en-CA')}'`);
        });
      } else {
        console.log(err);
      }
    });

console.log("Searching...");

