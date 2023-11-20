import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";



const SignUp = () => {

    const {createUser} = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

      const onSubmit = data =>
      {
        console.log(data.email, data.password)
        createUser(data.email, data.password)
        .then(result => {
            console.log(result.user);
            Swal.fire({
                title: "Registration Sussfully Add",
                text: "You clicked the button!",
                icon: "success"
              });
        })
        .catch(error => {
            console.log(error.message);
        })
      } 

    

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Registration now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" {...register("name", { required : true })} name="name" placeholder="name" className="input input-bordered"  />
          {errors.name && <span className="text-red-600" >Name field is required</span>}
        </div>
        {/* photo Url */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="text" {...register("PhotoUrl", { required : true })} name="PhotoUrl" placeholder="PhotoUrl" className="input input-bordered"  />
          {errors.name && <span className="text-red-600" >PhotoUrl field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" {...register("email", { required : true })} name="email" placeholder="email" className="input input-bordered"  />
          {errors.email && <span className="text-red-600" >Email field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" {...register("password", { required : true, minLength: 6, maxLength: 20 })} name="password" placeholder="password" className="input input-bordered"  />
          {errors.password?.type === 'required' && <span className="text-red-600" >Password field is required</span>}
          {errors.password?.type === 'minLength' && <span className="text-red-600" >Password minMum 6 Character</span>}
         

          
        </div>
        <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Sing Up" />
         
        </div>
      </form>
      <p className="text-center my-6" >Are you Alrady Account <Link className="text-blue-600" to='/login'> Login </Link> </p>
    </div>
  </div>
</div>
    );
};

export default SignUp;