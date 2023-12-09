import { useParams } from "react-router"
import { UserService } from "../../../services/user.service";
import { useState, useEffect } from "react";
import UserItem from "../home/user-item/UserItem";
import { Link } from "react-router-dom";

const UserDetail = () => {

  const {id} = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {

    if(!id) return;

    const fetchData = async () => {
      const data = await UserService.getById(id);
      setUser(data);
      console.log(data);
    }

    fetchData();

  }, [id])

  return (
    <div>
      <Link to="/">Back</Link>
      <UserItem user={user} />
    </div>
  )
}

export default UserDetail