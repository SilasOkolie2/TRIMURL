import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Layout component that includes the Header and Footer
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

// Define the routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Home /></Layout>,
  },
  {
    path: "/login",
    element: <Layout><Login /></Layout>,
  },
  {
    path: "/signup",
    element: <Layout><SignUp /></Layout>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
