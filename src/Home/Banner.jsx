import bankTree from "../assets/images/bank-tree.jpeg"
import Add from './Add';

function Banner() {
  return (
    <div className="landscape">
      <img src={bankTree} alt="Little tree flourishes in a glass of coins"></img>
      <Add />
    </div>
  )
}

export default Banner