# A Notes App with React-TypeScript-Bootstrap
<!-- ### It's a Full Mobile Responsive App -->

<!-- ### Go to Live Project: https://food-shop-app-react-tailwined.netlify.app/ -->
<!-- [![image](screenshot.JPG)](https://food-shop-app-react-tailwined.netlify.app/) -->

![Screenshot](/public/ScreenShot.JPG)

<!-- ### It's a Full Mobile Responsive Web Page -->

<!-- #### Add image with link in Readme Directory:
[![name](image link)](link to your URL) -->

### What I use here:
* React
* Bootstrap

#### To start a new Create React App, you can run:

    npx create-react-app my-app
    yarn create react-app my-app

#### To install React-Bootstrap:

    npm install react-bootstrap bootstrap
    
#### Then following line can be included in your src/index.js or App.js file

    import 'bootstrap/dist/css/bootstrap.min.css';
 
#####  Or, If you want to use CDN to avoied installation...
#### Placing CDN in 'public > index.html' folder for include the latest styles Bootstrap CDN:

    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossorigin="anonymous"
    />

### In case of TypeScript if you feel problem bootstrap runtime pls add below code in "react-app-env.d.ts" folder:

#### In <react-app-env.d.ts> folder type:
        declare module "react/jsx-runtime" {
            export default any;
        }


<!-- ### For install Tailwind you have to follow 4 steps, such as...

#### Install Tailwind CSS by command line:

    npm install -D tailwindcss

#### Generate your tailwind.config.js file:

     npx tailwindcss init

#### Configure your template paths
#### Add the paths to all of your template files in your tailwind.config.js file:

    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
  
 #### Add the Tailwind directives to your CSS:
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
 
 ### Install & import React-Icon:
    npm i react-icons --save
    import { FaBars, FaTimes, } from 'react-icons/fa'

 ### Install & import React-Icon:
    npm i react-icons --save
    import { FaBars, FaTimes, } from 'react-icons/fa'
 
 
 ### It's a Full Mobile Responsive Web Page
![Screenshot](app-image-mobile.JPG)
  -->
