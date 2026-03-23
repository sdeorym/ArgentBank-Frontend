import Button from '../general/Button.jsx';

function AccountBalance({concept, movement, amount, balance}) {

  return (
    <>
        <div className="left">
            <span className="leftie">Argent Bank {concept} (x{movement})</span>
            <span className="account-amount leftie">${amount}</span>
            <span className="leftie">{balance} Balance</span>
        </div>    
        <Button content="View transactions" />
    </>
  )
}

export default AccountBalance