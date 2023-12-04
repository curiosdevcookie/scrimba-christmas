function calcTotalCandies(children, candy) {
  candyPerChildRaw = candy / children

  candyPerChild = Math.floor(candyPerChildRaw);

  totalCandiesEaten = candyPerChild * children;

  console.log(totalCandiesEaten)

  document.getElementById("children").innerHTML = `The number of children:  ${children},`;
  document.getElementById("candy").innerHTML = `the number of candies:  ${candy},`;
  document.getElementById("candyPerChild").innerHTML = `the number of candies per child:  ${candyPerChild},`;
  document.getElementById("candyTotal").innerHTML = `so the total number of candies eaten by all children together is: ${totalCandiesEaten}.`;

  return totalCandiesEaten;
}

calcTotalCandies(6, 25) // expected output: 24