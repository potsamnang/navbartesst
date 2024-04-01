import { Link, useParams } from "react-router-dom";
import data from "../../data/data";
const UserDetail = () => {
  const { id } = useParams();
  const user = data.find((d) => d.id == id);
  return (
    <div className="user-detail">
      <article>
        <h4>user ID #{user.id}</h4>
        <h4>Name : {user.name}</h4>
        <h4>Email : {user.email}</h4>
        <Link to="/user">Back</Link>
      </article>
    </div>
  );
};

export default UserDetail;
