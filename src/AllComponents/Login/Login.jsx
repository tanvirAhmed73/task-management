import { useContext, useState } from "react";
import { Link, useNavigate, } from "react-router-dom";
import { AuthProvider } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import auth from "../../../firebase.init";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const Login = () => {

  const {userLogin} = useContext(AuthProvider)
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const handleGoogle = ()=>{
      signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        navigate('/dashboard')
        Swal.fire({
        
          position: "top-end",
          icon: "success",
          title: "Login Successfully",
          showConfirmButton: false,
          timer: 1500
        });
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  const handleGithub = ()=>{
    signInWithPopup(auth, githubProvider)
    .then((result) => {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
      navigate('/dashboard')
        Swal.fire({
        
          position: "top-end",
          icon: "success",
          title: "Login Successfully",
          showConfirmButton: false,
          timer: 1500
        });
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GithubAuthProvider.credentialFromError(error);
      // ...
    });
  }


  
  const handleLogin = e =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    
    setError('')
    
    userLogin(email, password)
    .then(() => {
      navigate('/dashboard')
      // alert
      Swal.fire({
        
        position: "top-end",
        icon: "success",
        title: "Login Successfully",
        showConfirmButton: false,
        timer: 1500
      });
      
      
    })
    .catch(() => {
      setError('Email Or Password Is Wrong')
    });
  }
  

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login Now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              {
                error? 
                <p className="text-red-700">{error}</p>
                :
                <div></div>
              }
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>

              <div className="flex gap-2">
                Sign in with
                <button onClick={handleGoogle}><FcGoogle /></button>
                <button onClick={handleGithub}><FaGithub /></button>
              </div>

              <Link
                className="hover:underline hover:text-orange-600"
                to={"/signUp"}
              >
                New Here? Create An Account!
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
