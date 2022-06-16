import ItemCount from "./ItemCount"

const ItemDetail = ({ item }) => {

  //State Uplifting
  //1)Componente padre crea una funcion
  const onAdd = (cantidadSeleccionada) => {
    console.log("Desde Item Detail : " + cantidadSeleccionada)
    //Lo almaceno en un estado interno de ItemDetail
  }

  return (
    <div>
      <h2>{item.title}</h2>
      <img className="detail-image" src={item.image} alt="thumbnail" />
      <p>{item.description}</p>
      <p>Precio : ${item.price}</p>
      {/* 2) Componente padre le pasa la funcion al Hijo por prop */}
      <ItemCount initial={1} onAdd={onAdd} stock={5}/>
      <button>terminar mi compra</button>
    </div>
  )
}
export default ItemDetail