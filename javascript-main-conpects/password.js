function generatePassword() {
  const latter = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const number = "0123456789";
  const symbolChar = "!@#$%^&*()[];,.?/";

  const allChars = latter + number + symbolChar;

  const passLength = 10;

  let password = "";

  for (let i = 0; i < passLength; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);

    password += allChars.charAt(randomIndex);
  }
  console.log(password);
  console.log(allChars.length);
}

generatePassword();
