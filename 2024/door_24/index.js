import { codedMessage } from './codedMessage.js'

/*
codedMessage.js holds a coded message (well, the name makes it obvious, huh?).

**Task**
- Decode the message!

key.md will help!

**Stretch Goal**
No stretch goal for the final day. Just stretch your legs!
*/


// Convert binary to base10:
function binaryToBase10(binary) {
  return parseInt(binary, 2);
}

// Convert base10 to ASCII:
function base10ToASCII(base10) {
  return String.fromCharCode(base10);
}

function decodeAndDecryptMessage(codedMessage) {
  let message = codedMessage.map(binaryToBase10).map(base10ToASCII).join('');
  console.log("Decoded Message:", message);

  const substitutions = {
    'k': 'a', 'l': 'b', 'm': 'c', 'n': 'd', 'o': 'e', 'p': 'f', 'q': 'g', 'r': 'h', 's': 'i', 't': 'j',
    'u': 'k', 'v': 'l', 'w': 'm', 'x': 'n', 'y': 'o', 'z': 'p', 'a': 'q', 'b': 'r', 'c': 's', 'd': 't',
    'e': 'u', 'f': 'v', 'g': 'w', 'h': 'x', 'i': 'y', 'j': 'z',
    'K': 'A', 'L': 'B', 'M': 'C', 'N': 'D', 'O': 'E', 'P': 'F', 'Q': 'G', 'R': 'H', 'S': 'I', 'T': 'J',
    'U': 'K', 'V': 'L', 'W': 'M', 'X': 'N', 'Y': 'O', 'Z': 'P',
    '~': 't', '+': '!', '<': '2', ':': '0', ']': 'S', '|': 'r',
    '}': 's', '?': '4', '#': 'y', '*': ' ', ' ': 'v'
  };

  message = message.split('').map(char => substitutions[char] || char).join('');

  console.log('Decrypted Message:', message);

  return message;
}

decodeAndDecryptMessage(codedMessage);