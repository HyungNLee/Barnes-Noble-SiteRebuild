# BarnesNoble

#### By Hyung Lee
##### 10/26/18, updated 11/02/18

# Description
* A replication of the Barnes & Noble homepage. Epicodus Friday Project on 10/26/18, updated 11/02/18.

# Layout of the page
* There will be a header component with the top navbar, logo, search bar, and the login button.
* Under that will be a component with a list of links to common genres of books that users typically visit.
* The carousel component with images and links to featured sales or preorder specials
* Under the carousel are three rows that hold three featured items in each row
* A horizontal scrolling list component that house Barnes and Noble exclusive books.
    * Each of these exclusive books will be a 'exclusive-book' component.
* Footer component with links to various services, help, and 'about us' pages.

## Setup/Installation Requirements

  - Webpage is deployed on Firebase -> https://barnes-noble-slick.firebaseapp.com/

  - Clone this repository from https://github.com/HyungNLee/Barnes-Noble-SiteRebuild.git
  - Navigate to the "Barnes-Noble-SiteRebuild
" folder in your terminal and type "npm install" to install necessary plugins.
  - Go to https://firebase.google.com/ and log in or create an account.
  - Create a firebase project.
  - Click on the circular gear icon next to the 'Project Overview' in the project you just created in Firebase.
    * Under the general tab, click on "Add Firebase to your web app:.
    * Copy everything inside the curly brackets of 'var config = { ... }.
  - Create a file in the app folder called 'api-keys.ts'.
    * Inside the api-keys.ts file, type in 'export const masterFirebaseConfig = {}'
    * Inside the curly braces, paste what you copied earlier from Firebase.
  - Click on 'Database' on the left side of Firebase console under your project and create a database. 
    * Next to the 'Database' header click on the dropdown menu and click on 'Realtime Database'.
    * Click on the icon that looks like three vertical dots under the 'Data' tab and click on 'Import JSON'.
    * Import the 'sample-exclusive-booklist.json' file inside this repo in the root folder."
    * Click on the 'Rules' tab of the database. 
    * Under rules, change the 'false' of '.read' to true.
  - Type in "ng serve -o" to start the app in your Chrome browswer.

## Support and contact details

  - Hyung Lee - github.com/HyungNLee

## Technologies Used

  - VS Code
  - Typescript
  - Node.js
  - Git
  - GitHub
  - CSS
  - HTML
  - Angular 5
  - Firebase
  
This software is licensed under the MIT license.

Copyright (c) 2018 **Hyung Lee**