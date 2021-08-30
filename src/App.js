import MealCategories from './Components/MealCategories/MealCategories'; 
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer'; 
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './css/mealsStyles.css'; 


function App() {
  return (
   <>
    <NavBar />
   <MealCategories />
   <Footer />
   </>
  );
}

export default App;
