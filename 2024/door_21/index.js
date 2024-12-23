import { toysRequested } from './data.js'

/*
The run up to Christmas is quite a data-intensive time for Santa. In order to understand market trends, Santa's Data Elves have collated sample children’s wish list data from 4 locations and now need to know which was the most popular toy requested overall. This will help with procurement for next year. 

**Task**
- Your task is to find the most requested toy from the array of objects “toysRequested”. But remember: some toys appear in more than one location!

Expected output: "The most popular toy is 🎲 board games with 9000 requests.""

**Stretch Goal**
- Complete this challenge using the .flatMap() method to work with the various "toys" arrays.

*/

function mostRequestedToys(toysRequested) {
  let toys = toysRequested.flatMap(location => location.toys);
  console.log(toys);

  let toyRequests = {};
  Object.entries(toys).forEach(([key, value]) => {
    let toy = Object.keys(value)[0];
    let requests = Object.values(value)[0];
    if (toyRequests[toy]) {
      toyRequests[toy] += requests;
    } else {
      toyRequests[toy] = requests;
    }
  });
  console.log(`The most popular toy is ${Object.keys(toyRequests).reduce((a, b) => toyRequests[a] > toyRequests[b] ? a : b)} with ${Object.values(toyRequests).reduce((a, b) => a > b ? a : b)} requests.`);
  return toyRequests;

}

mostRequestedToys(toysRequested);

