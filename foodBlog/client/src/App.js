import React from "react";
import { Router } from '@reach/router';

// Import for index/landing/home/dashboard page
import Dashboard from './views/Dashboard';

// Imports for views

// Imports for components
import RecipeForm from './components/BlogForm';
import AllRecipes from './components/All_Recipes';

function App() {
  return (
    <div >
      <Router>
        <RecipeForm />
        {/* <AllRecipes /> */}
      </Router>
    </div>
  );
}

export default App;