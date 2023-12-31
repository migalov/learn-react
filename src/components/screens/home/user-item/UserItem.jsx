import { Link } from 'react-router-dom'
import styles from '../Home.module.scss'


const UserItem = ({ user }) => {
  return (
    <div key={user.id} className={styles.item}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${user.avatar})`
        }}
      >
        
      </div>
      {/* <img src="./1.jpg" alt="" /> */}
      <div className={styles.info}>
        <h2>{user.name}</h2>
        <p>Role: {user.role}</p>
        <p>Balance: {new Intl.NumberFormat('ru-RU', {
          style: 'currency',
          currency: 'USD',
          currencyDisplay: 'narrowSymbol'
        }).format(user.balance)}</p>
        <Link to={`/user/${user.id}`} className="btn">Read more</Link>
      </div>
    </div>
  )
}

export default UserItem