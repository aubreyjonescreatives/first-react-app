
# Here is a list of project deliverables: 



1. Use create-react-app to bootstrap your project

```"scripts": {  
    "start": "react-scripts start",  
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```




2. Use a data source of your own choosing in JSON format that has lists of JavaScript objects within it (feel free to use the JSON sample files I've posted in Canvas)

* I connected my Postman app to themealdb.com API to retrieve a data source in JSON format with lists of JavaScript objects. I then added these JavaScript objects to a JSON file in my project.  

![JSON format data source example](src/images/jsondata.PNG)


3. At least 2 React custom components and display them on your main page

* I created a custom component called MealCategories to render a list of meal category cards

4. At least one custom component should be a "parent" of another functional React component


5. At least one other custom component should be a "child" React component


6. Use the import keyword to bring your JSON data into your component files

`import theCategories from '../../data/meals.json'`


7. Use the import keyword to add your components to your App.js file (and be sure to export the component properly!)


``` import MealCategories from './Components/MealCategories/MealCategories'; 
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

```


8. Make sure each component can properly render some list of JSON object properties (style the output as you see fit)



9. Demonstrate next generation JavaScript usage in your components including new operators and array methods


10. Commit and push your source files into a Git repository named something like "initial-react-app"

* This is the Git repository for the first-react-app


11. Be sure your repo includes a ReadMe.md file.  Inside that ReadMe file use Markdown notation to list the features of your app (not the default ReadMe create-react-app provides)

* This is the ReadMe file to demonstrate a list of features in my app


12. Here is the link to the deployed app using Netlify: 
