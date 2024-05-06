import { ChevronLeft, Eye, EyeOff, Phone, Shield, ShieldCheck, User } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(true);
  return (
      <div className="relative hw-screen overflow-x-hidden">

        <div className="fixed top-0 left-0 p-3 z-20">
          <Link to={-1}>
            <div className="h-[35px] w-[35px] rounded-md flex-center bg-green-200 bg-opacity-30 text-green-700">
              <ChevronLeft />
            </div>
          </Link>
        </div>


        <div className="bg-white p-6 mt-12">

          <div className="content-width relative z-10">
            <div className="top text-center">
              <h1 className="font-black text-3xl text-green-700">Register!</h1>
              <p className="text-center text-sm font-bold text-green-400 mt-3">Create your new account</p>
            </div>

            <div className="input-box reduce-font mt-8">
              <div className="input relative h-[45px] w-full overflow-hidden rounded-md border-2 border-green-100 focus-within:border-green-500 mb-3">
                <input type="text" name='username'  className="hw-full bg-green-100 outline none pl-[45px] text-green-700 font-medium" placeholder="Username"/>
                <div className="icon flex-center absolute top-0 left-0 h-[45px] w-[45px]">
                  <User stroke="green"/>
                </div>
              </div>

              <div className="input relative h-[45px] w-full overflow-hidden rounded-md border-2 border-green-100 focus-within:border-green-500 mb-3">
                <input type="text" name='number'  className="hw-full bg-green-100 outline none pl-[45px] text-green-700 font-medium" placeholder="Phone Number"/>
                <div className="icon flex-center absolute top-0 left-0 h-[45px] w-[45px]">
                  <Phone stroke="green"/>
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

              <div className="input relative h-[45px] w-full overflow-hidden rounded-md border-2 border-green-100 focus-within:border-green-500 mb-3">
                <input type={showPassword ? "password" : "text"} name='password'  className="hw-full bg-green-100 outline none pl-[45px] text-green-700 font-medium" placeholder="Confirm Password"/>
                <div className="icon flex-center absolute top-0 left-0 h-[45px] w-[45px]">
                  <ShieldCheck stroke="green"/>
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
                <Link to="/home">
                  <button className="btn-dark">Sign Up</button>
                </Link>
                <p className="text-xs mt-3 text-center text-gray-400">Already have an account <Link to="/login" className="text-green-500 font-bold">Log In</Link></p>
              </div>
            </div>
            
          </div>

        </div>
      </div>
  )
}

export default Signup