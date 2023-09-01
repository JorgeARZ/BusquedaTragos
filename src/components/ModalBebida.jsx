import {Modal,Image} from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'
const ModalBebida = () => {

    const {modal,handleModalclick} = useBebidas()


  return (
    <>
        <Modal show={modal} onHide={handleModalclick}>
            <Modal.Body>
                Cuerpo Modal
            </Modal.Body>
    
        </Modal>


    </>
  )
}

export default ModalBebida