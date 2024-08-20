import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); 
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); 
  const [isRegistering, setIsRegistering] = useState(false); 
  const [remember, setRemember] = useState(false); 
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setIsRegistering(true); 

    try {
      const response = await fetch("/api/signup", {
        // Update URL as needed
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Sign-up failed");
      }

      // Handle successful sign-up
      navigate("/login"); // Redirect to login page after successful sign-up
    } catch (error) {
      setError(error.message);
    } finally {
      setIsRegistering(false); 
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleRememberChange = (e) => {
    setRemember(e.target.checked);
  };

  return (
    <section className="max-w-md mx-auto bg-[#ffffff] p-4 rounded-lg shadow-lg">
      <div className="text-center">
        <h1 className="text-[30px] uppercase font-medium mb-4 text-center">
          Sign <span className="text-sky-600">Up</span>
        </h1>
      </div>
      {error && <p className="text-red-500 mt-3">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-black">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="placeholder-gray-800 placeholder-opacity-30 font-medium font-weight-300 border-b border-[#9daf89] appearance-none bg-white rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline transition-transform duration-300 hover:border-b-2 hover:border-transparent hover:border-solid hover:border-gray-500 focus:border-b-2 focus:border-transparent focus:border-solid focus:border-gray-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-black">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className=" placeholder-gray-800 placeholder-opacity-30 font-medium font-weight-300 border-b border-[#9daf89] appearance-none bg-white rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline transition-transform duration-300 hover:border-b-2 hover:border-transparent hover:border-solid hover:border-gray-500 focus:border-b-2 focus:border-transparent focus:border-solid focus:border-gray-500"
            />
            <span
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </span>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-black">
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className=" placeholder-gray-800 placeholder-opacity-30 font-medium font-weight-300 border-b border-[#9daf89] appearance-none bg-white rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline transition-transform duration-300 hover:border-b-2 hover:border-transparent hover:border-solid hover:border-gray-500 focus:border-b-2 focus:border-transparent focus:border-solid focus:border-gray-500"
            />
            <span
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={toggleConfirmPasswordVisibility}
            >
              {showConfirmPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center text-black">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              checked={remember}
              onChange={handleRememberChange}
              className=" text-[12px] p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            />
            <label htmlFor="remember" className="text-[13px] block text-gray-700 ml-2">
              I agree with the{" "}
              <Link
                to="/termsandcondition"
                className="text-[#9DAF89] underline text-[13px]"
              >
                Accept Terms and Conditions
              </Link>
            </label>
          </div>
          <div>
            <Link
              to="/login"
              className="text-[15px] text-[#9DAF89] underline text-xl text-center"
            >
              Login
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center mt-5">
          <button
            type="submit"
            className="btn-cta rounded-full w-[400px]"
            disabled={isRegistering}
          >
            {isRegistering ? <span className="loader" /> : "Sign Up"}
          </button>
        </div>
      </form>
    </section>
  );
}
