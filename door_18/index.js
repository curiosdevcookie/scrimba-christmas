function candies(children, candy) {
  return candy % children === 0 ? (candy / children) * children : Math.floor(candy / children) * children;
}

console.log(candies(3, 10));



