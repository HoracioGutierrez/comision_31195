import ItemCount from "./ItemCount"

const ItemDetail = ({ item }) => {
  return (
    <div>
      <h2>{item.title}</h2>
      <img src={item.image} alt="thumbnail" />
      <p>{item.description}</p>
      <p>Precio : ${item.price}</p>
      <ItemCount/>
    </div>
  )
}
export default ItemDetail