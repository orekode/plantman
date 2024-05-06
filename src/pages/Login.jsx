import { ChevronLeft, Eye, EyeOff, Shield, User } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(true);
  return (
      <div className="relative hw-screen">

        <div className="absolute top-0 left-0 p-3 z-20">
          <Link to={-1}>
            <div className="h-[35px] w-[35px] rounded-md flex-center bg-white bg-opacity-30 text-white">
              <ChevronLeft />
            </div>
          </Link>
        </div>

        <div className="absolute top-0 left-0 hw-full z-0">
          <img src="/images/leaves.jpg" alt="" className="img-cover relative z-0" />
          <div className="bg-black bg-opacity-50 hw-full absolute top-0 left-0 z-10"></div>
        </div>

        <div className="bg-white p-6 wave-top absolute bottom-0 left-0 h-[100vh] w-full z-10">
          <div className="absolute top-0 left-0 hw-full z-0 opacity-25">
            <img src="/images/leaves.png" alt="" className="img-contain relative z-0" />
          </div>

          <div className="content-width pt-[30vh] relative z-10">
            <div className="top text-center">
              <h1 className="font-black text-3xl text-green-700">Welcome Back!</h1>
              <p className="text-center text-sm font-bold text-green-400 mt-3">Login to your account</p>
            </div>

            <div className="input-box reduce-font mt-8">
              <div className="input relative h-[45px] w-full overflow-hidden rounded-md border-2 border-green-100 focus-within:border-green-500 mb-3">
                <input type="text" name='username'  className="hw-full bg-green-100 outline none pl-[45px] text-green-700 font-medium" placeholder="Username"/>
                <div className="icon flex-center absolute top-0 left-0 h-[45px] w-[45px]">
                  <User stroke="green"/>
                </div>
              </div>

              <div className="input relative h-[45px] w-full overflow-hidden rounded-md border-2 border-green-100 focus-within:border-green-500 mb-3">
                <input type={showPassword ? "password" : "text"} name='password'  className="hw-full bg-green-100 outline none pl-[45px] text-green-700 font-medium" placeholder="Password"/>
                <div className="icon flex-center absolute top-0 left-0 h-[45px] w-[45px]">
                  <Shield stroke="green"/>
                </div>
                <div onClick={() => setShowPassword(!showPassword)} className="icon flex-center absolute top-0 right-0 h-[45px] w-[45px]">
                  {!showPassword ? 
                  <EyeOff stroke="gray"/>
                  :
                  <Eye stroke="gray"/>
                  }
                </div>
              </div>

              <div className="flex justify-between text-green-700 text-xs">
                <div className="input flex gap-1">
                  <input type="checkbox" name="remember" id="remember-me" />
                  <label htmlFor="remember">Remember Me</label>
                </div>

                <div className="">
                  Forgot Password?
                </div>
              </div>

              <div className="mt-6">
                <button className="btn-dark">Log In</button>
                <p className="text-xs mt-3 text-center text-gray-400">Don't have an account <Link to="/signup" className="text-green-500 font-bold">Sign Up</Link></p>
              </div>
            </div>
            
          </div>

        </div>
      </div>
  )
}

export default Login