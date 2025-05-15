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
    Toastify({

text: "Signup Successfully",

duration: 3000

}).showToast();
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
Toastify({

text:`${errorMessage}`,

duration: 3000

}).showToast();
    
  });


}  

console.log(auth);
signUpBtn.addEventListener('click', signUp)