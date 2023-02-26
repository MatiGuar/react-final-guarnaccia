import Swal from "sweetalert2";

const Contador = ({ contador, setContador, stock}) => {

    const onAdd = () => {
        if (stock === contador) {
          Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'No hay mas productos en stock!',
          })
          return;
        }
        setContador(contador ++);
      };
      const putOff = () => {
        if (contador === 0) {
          return;
        }
        setContador(contador --);
      };

    return (

        <div className='d-flex rounded bg-light justify-content-center aling-items-center' width="20px">
            <button className='m-2 p-2 rounded fw-bolder' onClick={() => setContador(putOff)}>-</button>
            <span className='m-2 fw-bolder'>{contador}</span>
            <button className='m-2 p-2 rounded fw-bolder' onClick={() => setContador(onAdd)}>+</button>
        </div>
    )
}

export default Contador;