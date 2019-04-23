const input = process.argv.slice(2);
const dbKNEX = require ('./knex_test_script')

console.log(input);

dbKNEX.insertFamous(input);
