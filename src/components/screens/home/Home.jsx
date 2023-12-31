
import { useEffect, useState } from 'react'
import CreateUserForm from './create-user-form/CreateUserForm'
import UserItem from './user-item/UserItem'
import { users as usersData } from './users.data'
import { UserService } from '../../../services/user.service'

const Home = () => {

  // const filteredUsers = useMemo(
  //   () => users.filter(user => user.balance > 1000), []
  // );
  useEffect(() => {
    const fetchData = async () => {
      const data = await UserService.getAll();
      setUsers(data)
    }
  }, [])
  const [users, setUsers] = useState(usersData);

  return (
    <div>
      <CreateUserForm setUsers={setUsers} />
      <h1>User list</h1>
      { users.length ? users.map(user => (
        <UserItem key={user.id} user={user} />
      )) : <p>THere are not users</p> }
      
    </div>
  )
}

export default Home