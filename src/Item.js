import {Link} from "react-router-dom"

const Item = ({item}) => {
  return (
    <article className="item">
      <h2>{item.title}</h2>
      <img src={item.image} alt="thumbnail" />
      <p>Precio : ${item.price}</p>
      <Link to={`/item/${item.id}`}>ver detalle</Link>
    </article>
  )
}
export default Item