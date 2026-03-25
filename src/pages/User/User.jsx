import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Header from '../../User/Header.jsx';
import AccountBalance from '../../User/AccountBalance.jsx';
import './User.css'

function User() {
  const navigate = useNavigate()
  const userName = useSelector(state => state.user.profile?.userName)
  const token = useSelector(state => state.user.token)
  useEffect(() => {
    if (!token) {
      navigate('/', {replace: true})}
  } ,[!token])


const bankSeats = [
  {
    "id": "0",
    "concept": "Checking",
    "movements": "8349",
    "dollars": "2,082.79",
    "balance": "Available"
  },
  {
    "id": "1",
    "concept": "Savings",
    "movements": "6712",
    "dollars": "10,928.42",
    "balance": "Available"
  },
  {
    "id": "2",
    "concept": "Credit Card",
    "movements": "8349",
    "dollars": "184.30",
    "balance": "Current"
  },
];


  return (
    <section className="user-area">
      <Header name={userName}/>
      {bankSeats.map((bankSeats) => 
        <div key={bankSeats.id} className="bankOperations">
          <AccountBalance 
            concept={bankSeats.concept}
            movement={bankSeats.movements}
            amount={bankSeats.dollars}
            balance={bankSeats.balance}
          />
        </div>  
      )}      
    </section>
  )
}

export default User