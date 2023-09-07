import {Modal,Image} from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'
const ModalBebida = () => {

    const {modal,handleModalclick,receta,cargando} = useBebidas()

    console.log(receta)
    const mostrarIngredientes = () =>{
      let ingredientes = []

      for(let i = 1; i < 16; i++){
        if(receta[`strIngredient${i}`]){
            ingredientes.push(
              <li>{receta[`strIngredient${i}`]} {receta[`strMeasure${i}`]}</li>

            )
        }
      }

      return ingredientes
    }

  return (
    <>
        {!cargando && (<Modal show={modal} onHide={handleModalclick}>
          <Image 
            src={receta.strDrinkThumb}
            alt={`Imagen receta ${receta.strDrink}`}
          
          />

            <Modal.Body>
                <div className='p-3'>
                    <h2>Instrucciones</h2>
                    {receta.strInstructions}
                    <h2>Ingredientes y Cantidad</h2>
                    {mostrarIngredientes()}

                </div>
            </Modal.Body>
    
        </Modal>
        )}


    </>
  )
}

export default ModalBebida