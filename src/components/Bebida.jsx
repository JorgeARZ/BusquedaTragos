import {Col,Card,Button} from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'

const Bebida = ({bebida}) => {

  const {handleModalclick,handleBebidaIdClick}  = useBebidas()
  return (
    <Col md={6} lg={3}>
      <Card className='mb-4'>
        <Card.Img
          variant='top'
          src={bebida.strDrinkThumb}
          alt={`Imagen de ${bebida.strDrink}`}
        ></Card.Img>


        <Card.Body>
            <Card.Title>{bebida.strDrink}</Card.Title>
            <Card.Text>Algo mas </Card.Text>

            <Button
              variant={'warning'}
              className='w-full text-uppercase mt-2'
              onClick={()=>{
                handleModalclick()
                handleBebidaIdClick(bebida.idDrink)
              }}
            >
               Ver Receta
            </Button>

        </Card.Body>

      </Card>
    </Col>
  )
}

export default Bebida