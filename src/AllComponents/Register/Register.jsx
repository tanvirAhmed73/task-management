import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthProvider } from "../../Providers/AuthProviders";

const Register = () => {
  const {createUser} = useContext(AuthProvider);
  const [error, setError] = useState('');
  const navigate = useNavigate()
  const handleSignUP = e =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form .password.value;

    setError('');
    if(password.length < 6){
      setError('Password should be at least 6 characters');
      return;
    }
    else if(!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{6,}$/.test(password)){
      setError('YOur password should have at least six Characters,One Upper Case, & Special character');
      return;
    }

    createUser(email, password)
    .then(() => {
      // alert
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Create Account Successfully",
        showConfirmButton: false,
        timer: 1500
      });
      navigate('/')
      
    })
    .catch(() => {
      setError('Please Provide The Correct Information')
    });
  }


  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Create An Account!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignUP} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                <button className="btn btn-primary">Sign Up</button>
              </div>

              <Link className="hover:underline hover:text-orange-600" to={'/login'}>Already Have An Account?</Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
