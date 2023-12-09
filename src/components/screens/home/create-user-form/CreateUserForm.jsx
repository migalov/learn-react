import { useState } from "react";
import styles from "./CreateUserForm.module.scss";

const CreateUserForm = ({ setUsers }) => {

  const [name, setName] = useState("");
  const [balance, setBalance] = useState("");
  const [avatar, setAvatar] = useState("");

  const createUser = e => {
    e.preventDefault();
    setUsers(prev => [{id: prev.length + 1, name, balance, avatar}, ...prev]);
    
  }

  return (
    <form className={styles.form}>
      <input type="text" placeholder="Name" onChange={e => setName(e.target.value)} value={name} />
      <input type="text" placeholder="Balance" onChange={e => setBalance(e.target.value)} value={balance} />
      <input type="text" placeholder="Avatar" onChange={e => setAvatar(e.target.value)} value={avatar} />
      <button className="btn" onClick={e => createUser(e)}>Create user</button>
    </form>
  )
}

export default CreateUserForm