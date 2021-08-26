import React, { useState } from 'react'; 
import theCategories from '../../data/meals.json'
import { Card, Button} from 'react-bootstrap';





const MealCategories = () => {



const mealCats = theCategories.categories




const [mealData , setMealData] = useState({
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

{mealData.mealList.map((mCategories) => {
    return (
        <div className="container">
        <Card className="meal-category-card">
  <Card.Img className="cardImage" variant="top" src={`${mCategories.strCategoryThumb}`} />
  <Card.Body className="cardInfo">
    <Card.Title className="cardTitle">{mCategories.strCategory}</Card.Title>
    <Card.Text>
      {mCategories.strCategoryDescription}
    </Card.Text>
  </Card.Body>
</Card>
</div>
    )
})}

</>
)


}



export default MealCategories 