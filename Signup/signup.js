import { auth, createUserWithEmailAndPassword } from "../firebase.js";
let formFeild = document.querySelectorAll("form input");

const [userEmail, userPassword] = formFeild;
let signUpBtn = document.getElementById("signUpBtn")


 
const signUp=()=>{
    event.preventDefault();
createUserWithEmailAndPassword(auth, userEmail.value, userPassword.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    
  });


}  

console.log(auth);
signUpBtn.addEventListener('click', signUp)