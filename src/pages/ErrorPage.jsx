import { Link } from "react-router-dom";
import ErrorImg from "../assets/error.png";
const ErrorPage = () => {
  return (
    <div className="error-page">
      <img src={ErrorImg} alt="not found" />
      <Link to="/">Back Home</Link>
    </div>
  );
};

export default ErrorPage;
