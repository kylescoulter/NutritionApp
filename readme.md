#About Nutri Nav
Nutrition Navigator will aim to include a recipe builder or analyzer which will let you input various ingredients to create your own recipes. It will let you upload items to the list of ingredients which will be only for that user, as well as use an API from usda.gov to look up common ingredients. In addition to that, the app will let you use recipes or raw ingredients to calculate the number of calories you’ve had in a day and track your history.

###Setup
    
    Install Java SE Development Kit 12
    
    In Project Structure, set Project Language Level to 11
    
    Install Node.
    
    Refresh Gradle (From gradle tab)
    
    Run Gradle build
    
    Run NutrinavApplication
    
    To Run From Command Line:
    
    cd client
    
    npm install
    
    npm run build
    
    npm start
    
###Database
    
   <http://localhost:8081/h2-console>
    

###Release Notes


6.25.20
    
    v0.1
    
    A Framework has been researched and selected for the user interface.

	A simple UI for entering daily nutrition has been built.
	
	User entries are printed in each section of the daily nutrition.
	
7.16.20
    
    v0.2
    
    A login page has been created
    
    A register account page has been created
    
    The backend can store a user account in a database
    
    User info validation is in progress.
    
    An ingredient search has been added to the diary page.
    
    A user now has the ability to remove items from the diary page.
    
7.30.20
    
    v0.3
    
    The backend now stores a user account in a database
    
    The backend can now validate user information for login.
    
    A user has the ability to create a new account.
    
    The user’s custom ingredient database has been set up.
    
    A user can now add custom ingredients.
    
    The backend now stores the custom items in the custom ingredient database.
    
    A user can now search the custom ingredient database for an ingredient.
    
8.17.20

    v0.4 
    
    A user can now send a search query to the Edamam Food Database.
    
    A user can now see results displayed from the Edamam DB search.
    
    A user can now search the custom ingredient database.
    
    A user can now see a display of all items added to the custom ingredient database.
    
    A user search now displays results from both Edamam db and Custom Ingredient db.
    
    A user can now add items to each respective meal (breakfast, lunch, dinner).
    
    A user can now correctly delete items without deleting every item.
    
    A user can now enter in a caloric goal in the account container.
    
    The diary page now displays the entered caloric goal in the meals container.
    
    The diary page now keeps track of the logged in user.
    
    The account container now displays the logged in user's username.
    
    React Bootstrap was added in the diary page to enhance the aesthetic of the app.
    
    Spock has been integrated into the project.
    
    Added Modals for displaying results from searches.
    
    Account Container is now a Bootstrap Card for better readability and aesthetics. 
    
    
    
    
    
