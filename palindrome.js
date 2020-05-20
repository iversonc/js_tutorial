// revereses a string
function reverse(string) {
  return Array.from(string).reverse().join("");
}

// returns true for a palindrome, false otherewide
function palindrome(string) {
  let processedContent = string.toLowerCase();
  return processedContent === reverse(processedContent);
}

// returns an array of username and domain from a standard email address
function emailParts(email) {
  let processedEmail = email.toLowerCase();
  return processedEmail.split('@');
}
