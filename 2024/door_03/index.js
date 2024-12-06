/*  Santas Emoji Hack!

During Christmas, Santa wants to ban negative emojis, so when people
use negative emoji shortcodes, he wants positive emojis to appear instead.

In other words, :angry: should result in 🎁 instead of 😠.


*/

const hackedEmojis = {
  "angry": "🎁",   // 😠
  "thumbsdown": "👏",   // 👎  
  "man_facepalming": "🎅",   // 🤦‍♂️
  "cry": "‍😄",   // 😭
  "puke": "🤩"    // 🤮
}

const emojiToShortCodes = {
  "😠": ":angry:",
  "👎": ":thumbsdown:",
  "🤦‍♂️": ":man_facepalming:",
  "😭": ":cry:",
  "🤮": ":puke:"
}



/* 1. Write a function that checks if a lowercase word starts and 
ends with a colon. If it does, check if it exists in the hackedEmojis object, 
and replace it with the corresponding emoji. If not, return the original word.
 
 
Example input: ":cry:"
Example output: ‍😄
 
*/
function nicefy(word) {
  if (word.startsWith(":") && word.endsWith(":")) {
    const shortcode = word.slice(1, -1);
    if (shortcode in hackedEmojis) {
      return hackedEmojis[shortcode];
    }
  }

  if (word in emojiToShortCodes) {
    const shortcode = emojiToShortCodes[word].slice(1, -1);
    if (shortcode in hackedEmojis) {
      return hackedEmojis[shortcode];
    }
  }

  // If it's neither a shortcode nor a negative emoji, return the original word
  return word;
}




/* 2. Write a function to find any emoji shortcodes in a phrase.
Use your emojify function from the previous exercise!
 
Example input: "Just read your article :thumbsdown:"
Example output: "Just read your article 👏"
*/

function emojifyPhrase(phrase) {
  const words = phrase.split(" ");
  const emojifiedWords = words.map(nicefy);
  return emojifiedWords.join(" ");
}

console.log(emojifyPhrase("Those shoes :puke:"));


// Stretch goal: don't just replace the shortcodes, but also 
// any emojis are added directly to the text.

console.log(nicefy(":angry:")); // Should output 🎁
console.log(nicefy("😠")); // Should output 🎁
console.log(nicefy(":thumbsdown:")); // Should output 👏
console.log(nicefy("👎")); // Should output 👏
console.log(nicefy("Hello")); // Should output Hello
console.log(emojifyPhrase("This is a 😭 text")); // Should output This is a 😄 text

