# Web App From Scratch @cmda-minor-web 1819

In this course you will learn to build a web application without frameworks or unnecessary libraries, but with vanilla HTML, CSS & JavaScript as much as possible. The end result is a modular, single page web app (SPA). Data will be retrieved from an external API of your choice, manipulated and finally shown in the UI of the App. You will learn different ways to structure code and develope your own coding style. With the gained knowledge you will be able to build interactive prototypes, based on real data. Also you will gain a better understanding of the how API's, frameworks and libraries work.

## Description of concept
After a thorough search of API's I decided to lay my hands on the [BreweryDB](brewerydb.com/) API. The API is what the name sugests: a API containing a lot of information of beers. I'm a student after all ;). I regularly use an existing app where you can rate your beers and share it with friends. I wanted to do something similar. With this API, I have alot of options and oppertunities for designing my webapp. 

With my webapp, the user can scroll through a list of all the possible beers. It's also possible to search (filter) for a certain beer, category or brewery. When the user clicks on a beer, details will appear. It is possible to take a look at the beer-style, the ABV, the creation date, an image, a description of the beer, etc. When the user likes the beer and wants to save it for later, it's possible to favorite the beer. The webapp will store those beers in a favorite page. With the help of a Google Maps API, it's also possible to get the route to the nearest corresponding brewery. 

## Install
1. Open the terminal on your computer.
2. Create a directory in a location of your choice with `mkdir` in your console.
3. Clone the repository with the following command:
<br></br>
`https://github.com/Coenmathijssen/web-app-from-scratch-1920.git`
<br></br>
4. Navigate to the repo with the `cd` command in your console. Next, install all the dependencies with 
<br></br>
`npm install`
<br></br>
5. For building, bundling and compiling of the SCSS and JS, use
<br></br>
`npm run build`
<br></br>
6. To develop and see changes live, use:
<br></br>
`npm run dev`
These command are editable in the package.json file
<br></br>
6. Open the localhost to view the webapp.

# Deployment
De website live zetten kan via GitHub Pages. 
1. Create a repository and paste the bundle.js, html and css files.
2. Go to the settings tab in your repository.
3. Scroll to Github Pages and activate.

De website live zetten kan via Netlify.
1. Ga to https://www.netlify.com/ en sign in (or create an account).
2. Click on the button 'new site from git'.
3. Connect the Git repo to your Netlify.
4. Change the directory to 'dist'.
5. Press 'deploy site'.

## Program

### Week 1 - Hello API 🐒

Goal: Retrieve data from an API and render it in an overview page.

[Excercises](https://github.com/cmda-minor-web/web-app-from-scratch-1920/blob/master/course/week-1.md)

[Slides](https://drive.google.com/open?id=1Rjl9xqXoKniQSRJPdkU1O5YwWC33SJK8KiV0a-H_xZU)

### Week 2 - Design and Refactor 🛠

Goal: Design the web app. Add routes and states. Rendering detail page.

[Excercises](https://github.com/cmda-minor-web/web-app-from-scratch-1920/blob/master/course/week-2.md)

[Slides](https://drive.google.com/open?id=1IqQeu1m0dQiSC_KCvrn8eencAgtYe7X6qT-gm0n9Bmc)

### Week 3 - Wrapping up 🎁

Goal:
Manipulate data. Split code into modules. Reflect on end result

[Excercises](https://github.com/cmda-minor-web/web-app-from-scratch-1920/blob/master/course/week-3.md)

[Slides](https://drive.google.com/open?id=1BSzGYNLMgtHD4HRnK7f0DgyTv4Pg3xsQwD_eYNo7v0Y)

<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- ☝️ replace this description with a description of your own work -->

<!-- replace the code in the /docs folder with your own, so you can showcase your work with GitHub Pages 🌍 -->

<!-- Add a nice poster image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- What external data source is featured in your project and what are its properties 🌠 -->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->
