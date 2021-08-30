import React, { useState } from 'react'; 
import theCategories from '../../data/meals.json'
import { Card, Container, Row, Col } from 'react-bootstrap';





const MealCategories = () => {



const mealCats = theCategories.categories




const [mealData] = useState({
    mealList: mealCats
})

 

// Fetch API 
/* 
const fetchCategories = async () => {
    try {
    const mealCategoriesInfo = mealCats
    setMealData(mealCategoriesInfo.data)
    console.log(mealCategoriesInfo.data)
    } catch (err) {
        console.log(err)
    }
}

    useEffect(() => {
        fetchCategories()
    
}, [])
 */

return (
<>
<main>
<Container className="containerAll">
  
{mealData.mealList.map((mCategories) => {
    return (
        <Card className="meal-category-card">
        <figure className="cardImage">
  <Card.Img variant="top" src={`${mCategories.strCategoryThumb}`} />
  </figure>
  <Card.Body className="cardInfo">
    <Card.Title className="cardTitle">{mCategories.strCategory}</Card.Title>
    <Card.Text className="cardText">
      {mCategories.strCategoryDescription}
    </Card.Text>
  </Card.Body>
</Card>

    )
    
})}

</Container>
</main>

</>
)


}



export default MealCategories 