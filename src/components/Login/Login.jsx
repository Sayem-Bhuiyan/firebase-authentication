
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const {loginUser, signInWithGoogle} = useContext(AuthContext)
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);

        // sing in usesr
        loginUser(email, password)
        .then(userCredential => {
            const user = userCredential.user;
            console.log(user);
            e.target.reset();
            navigate('/')
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const handleGoogleSignIn = () => {
      signInWithGoogle()
      .then(userCredential => {
        const user = userCredential.user;
        console.log(user);
        navigate('/')
      })
      .catch(error => {
        console.log(error);
      })
    }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Login now!</h1>
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
            <p>New users? <Link to="/register" className="underline" >Create an account</Link></p>
            <p>Sign in with <button onClick={handleGoogleSignIn} className="btn btn-ghost">Google</button></p>

          </form>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
