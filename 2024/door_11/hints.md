#HINTS

- You can think of each set of actions (revealing two cards) as a "turn" with one of two outcomes: the cards either match or don't match. Track the selected cards (can be in variables `firstCard` and `secondCard`) during each turn and write logic to handle both cases. After each turn, reset the selected cards to prepare for the next one.
- Use `setTimeout` to delay hiding unmatched cards.
- Use `data-*` attributes to store info about the cards (i.e. its emoji).