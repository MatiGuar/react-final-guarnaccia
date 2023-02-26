import Swal from "sweetalert2";

const ItemCount = ({
    contador,
    actualizaValor,
    stock,

}) => {
    
    const onAdd= () => {
        if (stock === contador) {
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'No hay mas productos en stock!',
              })
            return
        }
        actualizaValor(contador + 1)
        
    }
    const restar = () => {
        if (contador === 0) {
            return
        }
        actualizaValor(contador - 1)
    }
  return (
    <div className="counter">
        <div className='d-flex rounded bg-light justify-content-center aling-items-center' width="20px">
            <button className='m-2 p-2 rounded fw-bolder' onClick={restar}>-</button>
            <div>
                <span className='m-2 fw-bolder'>{contador}</span>
            </div>
            <button className='m-2 p-2 rounded fw-bolder' onClick={onAdd}>+</button>
        </div>
    </div>
  )
}

export default ItemCount;