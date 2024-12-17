const santasPurse = new Map([
  [5, 0],
  [10, 0],
  [20, 0]
]);

function correctChangeFromSanta(bills) {
  for (const bill of bills) {
    if (bill === 5) {
      santasPurse.set(5, santasPurse.get(5) + 1);
    } else {
      const change = bill - 5;
      if (!canGiveChange(change)) {
        return false;
      }
      santasPurse.set(bill, santasPurse.get(bill) + 1);
    }
  }
  return true;
}

function canGiveChange(change) {
  if (change === 5) {
    if (santasPurse.get(5) > 0) {
      santasPurse.set(5, santasPurse.get(5) - 1);
      return true;
    }
  } else if (change === 15) {
    if (santasPurse.get(10) > 0 && santasPurse.get(5) > 0) {
      santasPurse.set(10, santasPurse.get(10) - 1);
      santasPurse.set(5, santasPurse.get(5) - 1);
      return true;
    }
    if (santasPurse.get(5) >= 3) {
      santasPurse.set(5, santasPurse.get(5) - 3);
      return true;
    }
  }
  return false;
}

function updatePurseStatus() {
  const status = `$5: ${santasPurse.get(5)} | $10: ${santasPurse.get(10)} | $20: ${santasPurse.get(20)}`;
  document.getElementById('purseStatus').textContent = status;
}

document.getElementById('billForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const billInput = document.getElementById('billInput');
  const billValue = parseInt(billInput.value);

  const successMessage = "Nice job Santa, everyone got their correct change!";
  const failureMessage = "Looks like you have some work to do Santa, and bring some money next time!";

  const messageBox = correctChangeFromSanta(billValue);
  const messageBoxText = messageBox ? successMessage : failureMessage;
  document.getElementById('message-box').textContent = messageBoxText;
  updatePurseStatus();

  billInput.value = '';
});

document.getElementById('billForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const successMessage = "Nice job Santa, everyone got their correct change!";
  const failureMessage = "Looks like you have some work to do Santa, and bring some money next time!";

  const billInput = document.getElementById('billInput');
  const bills = billInput.value.split(',').map(Number).filter(bill => [5, 10, 20].includes(bill));

  const messageBox = correctChangeFromSanta(bills);
  const messageBoxText = messageBox
    ? successMessage : failureMessage;
  document.getElementById('message-box').textContent = messageBoxText;
  updatePurseStatus();
  billInput.value = '';
});

updatePurseStatus();
