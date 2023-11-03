import { Link } from "react-router-dom";

const Headers = () => {
  return (
    <div className="flex gap-5">
      <Link to="/">Home</Link>
      <Link to="/users">Users</Link>
      <Link to="/signUp">Sign Up</Link>
      <Link to="/signIn">Sign In</Link>
      <Link to="/addCoffee">Add Coffee</Link>
    </div>
  );
};

export default Headers;
