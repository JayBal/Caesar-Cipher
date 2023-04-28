function cipher() {
  const plainText = document.getElementById('message').value;
  const shifter = parseInt(document.getElementById('shifter').value, 10);
  const characterCode = [];
  let cipherText = '';

  for (let x = 0; x < plainText.length; x += 1) {
    characterCode.push(plainText[x].charCodeAt() + shifter);
    cipherText += String.fromCharCode(characterCode[x]);
  }

  document.getElementById('encrypted-message').value = cipherText;
}
