
//validation of name/string as a one word 
export const validateStringOneWord = (string, inputName, emptyInputMessage, mustBeOneWordName) => {
 // let validString = false;
 if (!string ) {
  return emptyInputMessage ? emptyInputMessage : "This field is required" ;
 }
  else if (!/^(\p{L}\p{M}*)+$/gu.test(string.trim())) {
  return mustBeOneWordName;
 }
 else return false;
}

//email validation
export const validateEmail = (email) => {
 const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
 if (!regex.test(email.trim()) || !email.trim()) {
return 'Please provide valid email';
 } else {
  return false;
 }
};

//validation of min charcters in a string 
export const validateStringMinLength = (string,characters,inputName, emptyInputMessage ) => {

 if (!string) {
  return emptyInputMessage ? emptyInputMessage : "This field is required.";
 }
 // let characterCount = 0;
 // characterCount = message.split("").length;
 if (string.split("").length <= 120 || string.trim()=== 0) {
  return `${inputName} must have minimum ${characters} characters`
 } else {
  return false;
 }
}