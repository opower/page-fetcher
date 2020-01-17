const fs = require('fs');
let args = process.argv.slice(2);

const request = require('request');
request(args[0], function (error, response, body) {

  if(error){
    console.error('error:', error); 
    return error;
  }
  // console.log('statusCode:', response && response.statusCode);
  fs.writeFile(args[1], body, 'utf8', (error) =>{
    if(error){
      throw error;
    }
    var stats = fs.statSync(args[1])
    console.log(`Downloaded and saved ${stats.size} bytes to ${args[1]}`);
  })
});


