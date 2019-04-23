const db = require ('./test_script')
const input = process.argv[2];

db.findByName(input,function(err, output) {
      if(!err) {
        console.log(`Found ${output.rows.length} people by the name '${input}': `)
        output.rows.forEach( (element, index) => {
          console.log(`- ${index + 1}: ${element.first_name} ${element.last_name}, born '${element.birthdate.toLocaleDateString('en-CA')}'`);
        });
      } else {
        console.log(err);
      }
    });

console.log("Searching...");
