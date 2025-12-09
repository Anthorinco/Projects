function generatePassword(
  length,
  includeLowercase,
  includeUppercase,
  includeNumber,
  includeSymbols
) {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!?@#$%&";

  let allowedChars = "";
  let password = "";

  allowedChars += includeLowercase ? lowercaseChars : "";
  allowedChars += includeUppercase ? uppercaseChars : "";
  allowedChars += includeNumber ? numberChars : "";
  allowedChars += includeSymbols ? symbolChars : "";

  

if (length <= 0){
    return `password length must be at least 1`;
}
 if (length >= 13){
    return `password length must be less than 13`;
}
if (allowedChars.length === 0){
    return `At least 1 set of character needs to be selected`;
}
for(let i = 0; i < length; i++){
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
}

  return password;
}

const passwordLenght = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumber = true;
const includeSymbols = true;

const password = generatePassword(
  passwordLenght,
  includeLowercase,
  includeUppercase,
  includeNumber,
  includeSymbols
);
console.log(`Generated password: ${password}`);