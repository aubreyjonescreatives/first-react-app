import React from 'react'; 
import { Card} from 'react-bootstrap';
import '../../data/meals.json'




const MealCard = (props) => {

const {strCategoryThumb, strCategory, strCategoryDescription, id} = props

return (
<>
        <Card className="meal-category-card" key={id}>
        <figure className="cardImage">
  <Card.Img variant="top" src={`${strCategoryThumb}`} />
  </figure>
  <Card.Body className="cardInfo">
    <Card.Title className="cardTitle">{strCategory}</Card.Title>
    <Card.Text className="cardText">
      {strCategoryDescription}
    </Card.Text>
  </Card.Body>
</Card>


</>
)


}



export default MealCard