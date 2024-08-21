import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

    setLoading(true); // Set loading to true when the form is submitted

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      // Handle successful login
      navigate("/dashboard"); // Redirect after successful login
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false); // Reset loading to false after login process
    }
  };

  return (
    <section className="max-w-md mx-auto p-16 flex flex-col items-center justify-center bg-[#ffffff]">
      <div className=" bg-white rounded-lg shadow-md md:w-max lg:w-max">
        <h2 className="text-[30px] uppercase font-medium mb-4 text-center">
          Login
        </h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-[16px] font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="font-medium font-weight-300 border-b border-[#9daf89] appearance-none bg-white rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline transition-transform duration-300 hover:border-b-2 hover:border-transparent hover:border-solid hover:border-gray-500 focus:border-b-2 focus:border-transparent focus:border-solid focus:border-gray-500 placeholder-gray-800 placeholder-opacity-30"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-[16px] font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="placeholder-gray-800 placeholder-opacity-30 font-medium font-weight-300 border-b border-[#9daf89] appearance-none bg-white rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline transition-transform duration-300 hover:border-b-2 hover:border-transparent hover:border-solid hover:border-gray-500 focus:border-b-2 focus:border-transparent focus:border-solid focus:border-gray-500"
              required
            />
          </div>

          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="remember-me"
              name="remember-me"
              className="mr-2"
            />
            <label htmlFor="remember-me" className="text-gray-700">
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="btn-cta rounded-full w-[350px]"
            disabled={loading} // Disable button when loading
          > 
            {loading ? <span className="loader" /> : "Sign In"}{" "}
            {/* Show loader when loading */}
          </button>
        </form>
        <div className="text-center p-6">
          <p>
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-secondary text-sm hover:underline"
            >
              Create one account
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
