import { useState } from "react";
import styles from "./CreateUserForm.module.scss";

const CreateUserForm = ({ setUsers }) => {

  const clearData = {
    name: "",
    balance: "",
    avatar: ""
  };

  const [data, setData] = useState(clearData);

  const createUser = e => {
    e.preventDefault();

    setUsers(prev => [
      {
        id: prev.length + 1,
        ...data
      },
      ...prev
    ]);

    setData(clearData);

  }

  return (
    <form className={styles.form}>
      <input
        type="text"
        placeholder="Name"
        onChange={e => setData(prev => ({
          ...prev, name: e.target.value})
        )}
        value={data.name}
      />
      <input
        type="text"
        placeholder="Balance"
        onChange={e => setData(prev => ({
          ...prev, balance: e.target.value})
        )}
        value={data.balance}
      />
      <input
        type="text"
        placeholder="Avatar"
        onChange={e => setData(prev => ({
          ...prev, avatar: e.target.value})
        )}
        value={data.avatar}
      />
      <button className="btn" onClick={e => createUser(e)}>Create user</button>
    </form>
  )
}

export default CreateUserForm