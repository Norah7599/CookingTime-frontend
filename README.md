# CookingTime-frontend
[Mytrello](https://trello.com/b/996uo2Wb/my-project)
# CookingTime Frontend

This is the frontend for the CookingTime application, built using Angular.

## Components

### 1. Add Recipes Component

- **Description:** Allows users to add new recipes.
- **Path:** `/new-recipes`
- **Features:**
  - Uses Angular Reactive Forms for input validation.
  - Communicates with the backend to add new recipes.

### 2. Home Component

- **Description:** Displays a welcome message to the user.
- **Path:** `/`
- **Features:**
  - The name of the user is hard-coded as 'Nourah' for demonstration purposes.

### 3. Random Recipes Component

- **Description:** Displays a randomly selected recipe.
- **Path:** `/random-recipes`
- **Features:**
  - Retrieves a random recipe from the backend.

### 4. Recipes List Component

- **Description:** Displays a list of recipes with options to delete and update each recipe.
- **Path:** `/recipes`
- **Features:**
  - Retrieves a list of recipes from the backend.
  - Allows users to delete recipes.
  - Allows users to toggle editing mode for recipes.
  - Allows users to save changes to recipes.

## Services

### 1. Recipes Service

- **Description:** Manages communication with the backend for recipe-related operations.
- **Features:**
  - Adds a new recipe.
  - Retrieves a list of recipes.
  - Deletes a recipe.
  - Updates a recipe.

### 2. Auth Service

- **Description:** Manages user authentication and authorization.
- **Features:**
  - Checks if the user is authenticated.
  - Authenticates the user.
  - Registers a new user.
  - Logs out the user.

## Modules

### 1. App Module

- **Description:** The root module that orchestrates the application.
- **Features:**
  - Imports necessary modules for the application.
  - Declares and bootstrap the main AppComponent.

### 2. App Routing Module

- **Description:** Manages the application's routes.
- **Features:**
  - Configures routes for different components.

## How to Run

1. Make sure you have [Node.js](https://nodejs.org/) and [Angular CLI](https://angular.io/cli) installed.
2. Clone this repository.
3. Navigate to the project directory in the terminal.
4. Run `npm install` to install dependencies.
5. Run `ng serve` to start the development server.
6. Open your browser and navigate to `http://localhost:4200/`.

## Technologies Used

- Angular
- Reactive Forms
- HttpClientModule
- Other Angular dependencies...
