
import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';
const Login = () => {

  

  const [disabled, setDisabled] = useState(true);

  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/' ;

  useEffect(() => {
    loadCaptchaEnginge(4);
  }, [])

    const handelLogin = e =>
    {
        e.preventDefault();
        const from = e.target;
        const email = from.email.value;
        const password = from.password.value;

        console.log(email, password);
        signIn(email, password)
        .then(result => {
         
          Swal.fire({
            title: "LogIn Sussfully",
            text: "You clicked the button!",
            icon: "success"
            
          });
          console.log(result.user);
          navigate(location.state?.from?.pathname || '/', {replace:true})
          
        })
        .catch(error => {
          console.log(error);
        })


    }


    const handelValidateCaptcha = (e) => {
      const user_captcha_value = e.target.value;
      console.log(user_captcha_value);

      if(validateCaptcha(user_captcha_value)==true)
      {
        setDisabled(false)
      }
      else{
        setDisabled(true);
      }
    }

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center md:w-1/2 lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card  md:w-1/2 max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handelLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate />
          </label>
          <input onBlur={handelValidateCaptcha} type="text"  placeholder="type the text above" name="captcha" className="input input-bordered" required />
         
          
        </div>
        <div className="form-control mt-6">
          <button disabled={disabled} type="submit" className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className='text-center mb-4' > <small>New Hare ? <Link className='text-blue-600' to='/signUp' > Create An Account </Link> </small> </p>
      <SocialLogin></SocialLogin>
    </div>
  </div>
</div>
    );
};

export default Login;