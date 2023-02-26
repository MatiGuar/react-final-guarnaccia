import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Contador from '../../components/Contador/Contador'

const Item = ({producto}) => {
  return (
   
      <Card style={{ width: '18rem' }} className="card-style d-flex col-lg-3 col-md-4 col-sm-6 mb-3">
        <Card.Img variant="top" alt={producto.title} src={`/images/${producto.imageId}`} height="300px" />
        <Card.Body key={producto.id}>
          <Card.Title>{producto.title}</Card.Title>
          <h4>{producto.categoryId}</h4>
        </Card.Body>
      </Card>
  
    )
}

export default Item