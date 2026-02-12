import bankTree from "../assets/images/bank-tree.avif"
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