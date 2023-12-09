
import UserItem from './user-item/UserItem'
import { users } from './users.data'

const Home = () => {

  // const filteredUsers = useMemo(
  //   () => users.filter(user => user.balance > 1000), []
  // );

  return (
    <div>
      <h1>User listg</h1>
      { users.length ? users.map(user => (
        <UserItem key={user.id} user={user} />
      )) : <p>THere are not users</p> }
      
    </div>
  )
}

export default Home