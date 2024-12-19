import { workshopData } from '/data.js'

/*
Santa has grown suspicious that one of his elves isn't playing fair. The elves are paid well to make toys but Santa thinks one of the elves is keeping some of the toys he has made (and probably selling them on the black market in one of Laplands dodgier neighbourhoods.)

Santa has written a script to recursively look over the data and find discrepancies. But Santa is not so great at coding and he has got bugs he can't resolve.

This code should:
 - Traverse through all elves.
 - Traverse toysShipped, summing up toy counts across regions and subregions.
 - Compare the aggregated counts with toysMade to determine discrepancies.
But it doesn't!

Your task: debug this code - there are two bugs to find!

Stretch Goal

- Recursion is hard! Delete everything in index.js and start again from scratch. You don't have to do it the same way. Perhaps you can find a better way.
 
*/

// Function to find the elf who created more presents than they delivered
function findNaughtyElf(data) {
  const naughtyElves = [];

  data.forEach((elf) => {
    const totalShipped = {};

    // Recursive function to sum toy counts
    function sumToys(shipmentData) {
      for (const region in shipmentData) {
        const subRegion = shipmentData[region];
        if (Array.isArray(subRegion)) {
          // If it's an array, sum toy counts
          subRegion.forEach(({ toy, count }) => {
            totalShipped[toy] = (totalShipped[toy] || 0) + count;
          });
        } else if (typeof subRegion === 'object') {
          // If it's an object, recurse further
          sumToys(subRegion);
        }
      }
    }

    // Calculate total toys shipped
    sumToys(elf.toysShipped)

    // Compare toysMade to totalShipped
    let isNaughty = false;
    for (const toy in elf.toysMade) {
      if (elf.toysMade[toy] > (totalShipped[toy] || 0)) {
        isNaughty = true;
        break;
      }
    }
    if (isNaughty) {
      naughtyElves.push(elf.name);
    }
  });

  return naughtyElves.join(', ')
}

// Example usage
console.log(findNaughtyElf(workshopData)) //Elf Kalvin Armadillo

