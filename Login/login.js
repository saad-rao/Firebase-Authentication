import { auth, signInWithEmailAndPassword , onAuthStateChanged , sendPasswordResetEmail } from "../firebase.js";


let formFeild = document.querySelectorAll("form input");

const [loginEmail, loginPassword] = formFeild;

let loginBtn = document.getElementById('loginBtn');





const Login = ()=>{
    event.preventDefault();
    signInWithEmailAndPassword(auth, loginEmail.value ,loginPassword.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
  Toastify({

text: "Login  Successfully",

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


loginBtn.addEventListener("click",Login)


let forgotPass = document.getElementById('forgot-password');


const forgotPassword = ()=>{
    sendPasswordResetEmail(auth, loginEmail.value)
  .then(() => {
     Toastify({

text: "Check your Email",

duration: 3000

}).showToast();
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  Toastify({

text: errorMessage, 

duration: 3000

}).showToast();
  });
}


forgotPass.addEventListener("click" , forgotPassword)

onAuthStateChanged(auth, (user) => {
  if (user) {
    window.location.href = '../Dashboard/Dashboard.html'
  } 
});
