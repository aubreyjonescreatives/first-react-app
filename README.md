
# Here is a list of project deliverables: 



1. Use create-react-app to bootstrap your project

* I used create-react-app to bootstrap this project

2. Use a data source of your own choosing in JSON format that has lists of JavaScript objects within it (feel free to use the JSON sample files I've posted in Canvas)

* I connected my Postman app to themealdb.com API to retrieve a data source in JSON format with lists of JavaScript objects 

![JSON format data source example](source/images/jsondata.PNG)


3. At least 2 React custom components and display them on your main page

* I created a custom component called MealCategories to render a list of meal category cards

4. At least one custom component should be a "parent" of another functional React component


5. At least one other custom component should be a "child" React component


6. Use the import keyword to bring your JSON data into your component files

`import theCategories from '../../data/meals.json'`


7. Use the import keyword to add your components to your App.js file (and be sure to export the component properly!)


` import MealCategories from './Components/MealCategories/MealCategories'; 
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

export default App;   `


8. Make sure each component can properly render some list of JSON object properties (style the output as you see fit)



9. Demonstrate next generation JavaScript usage in your components including new operators and array methods


10. Commit and push your source files into a Git repository named something like "initial-react-app"


11. Be sure your repo includes a ReadMe.md file.  Inside that ReadMe file use Markdown notation to list the features of your app (not the default ReadMe create-react-app provides)

* This is the ReadMe file to demonstrate a list of features in my app


12. Push your repository to GitHub, deploy your repo using Netlify, and submit both your GitHub URL AND your Netlify URL via this Canvas assignment.

# This is the Github repository for the app. 

# Here is the deployed Netlify link for this live app 
