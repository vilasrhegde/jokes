
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup  } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAcPMuFfgrnt0ZPoGVqKr963pdp0jXsm-I",
  authDomain: "login-7e6ef.firebaseapp.com",
  projectId: "login-7e6ef",
  storageBucket: "login-7e6ef.appspot.com",
  messagingSenderId: "919367443303",
  appId: "1:919367443303:web:b0f1597c006c517fe285c2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () =>{
    signInWithPopup(auth, provider)
    .then((result) =>{
      console.log(result);//optional
      const name=result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;
      const verify =result.user.emailVerified;

      localStorage.setItem("name",name)
      localStorage.setItem("email",email)
      localStorage.setItem("profilePic",profilePic)
      localStorage.setItem("verify",verify)
    })
    .catch((error)=>{
        console.log(error);
    });
};