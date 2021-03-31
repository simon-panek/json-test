// Senator API URL: https://www.govtrack.us/api/v2/role?current=true&role_type=senator

'use strict';
const fs = require('fs');

const file = fs.readFileSync('iss-now.json');

const readableFile = JSON.parse(file);

console.log({readableFile});

readableFile.timestamp = 1;

readableFile.iss_position.longitude = '7';

const fileString = JSON.stringify(readableFile);

console.log({fileString});

fs.writeFileSync('iss-now.json', fileString);


//

const senatorFile = fs.readFileSync('senators.json');

const readableSenator = JSON.parse(senatorFile);

let johnJaneDoe = readableSenator.objects.map(senator => {
  if(senator.person.gender === 'male'){
    return { ...senator, person: { ...senator.person, nickname: 'John Doe' } };
  } else if (senator.person.gender === 'female'){
    return { ...senator, person: { ...senator.person, nickname: 'Jane Doe' } };
  } else {
    return senator;
  }
})

console.log({johnJaneDoe})

const johnJaneString = JSON.stringify(johnJaneDoe);

console.log({johnJaneString});

fs.writeFileSync('senator-jj.json', johnJaneString);


