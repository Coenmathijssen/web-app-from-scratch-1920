<img width="1280" alt="Screenshot 2020-02-13 at 19 10 12" src="https://user-images.githubusercontent.com/43337909/74464941-c4141c00-4e94-11ea-9995-a05b087455c0.png">

# Web App From Scratch @cmda-minor-web 1819

In this course you will learn to build a web application without frameworks or unnecessary libraries, but with vanilla HTML, CSS & JavaScript as much as possible. The end result is a modular, single page web app (SPA). Data will be retrieved from an external API of your choice, manipulated and finally shown in the UI of the App. You will learn different ways to structure code and develope your own coding style. With the gained knowledge you will be able to build interactive prototypes, based on real data. Also you will gain a better understanding of the how API's, frameworks and libraries work.

## Description of concept
After a thorough search of API's I decided to lay my hands on the [BreweryDB](brewerydb.com/) API. The API is what the name sugests: a API containing a lot of information of beers. I'm a student after all ;). I regularly use an existing app where you can rate your beers and share it with friends. I wanted to do something similar. With this API, I have alot of options and oppertunities for designing my webapp. 

With my webapp, the user can scroll through a list of all the possible beers. It's also possible to search (filter) for a certain beer, category or brewery. When the user clicks on a beer, details will appear. It is possible to take a look at the beer-style, the ABV, the creation date, an image, a description of the beer, etc. When the user likes the beer and wants to save it for later, it's possible to favorite the beer. The webapp will store those beers in a favorite page. With the help of a Google Maps API, it's also possible to get the route to the nearest corresponding brewery.


## Diagrams
![actor](https://user-images.githubusercontent.com/43337909/74465137-21a86880-4e95-11ea-857e-8fc8d67c7ebb.jpg)
![interaction](https://user-images.githubusercontent.com/43337909/74465147-25d48600-4e95-11ea-8a73-fd1a5baf1221.jpg)

## API
For my project I'm using the [BreweryDB](brewerydb.com/) API. This is an API which collect all possible data surrounding beers. I'm using two different endpoints: one for fetching the beers and one for fetching the breweries selling the corresponding beers. For plotting the location of the breweries, I made use of the Google Maps API. 

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

## Deployment
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

## Auteur 
[Coen Mathijssen - GitHub](https://github.com/Coenmathijssen/)

## License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/Wiebsonice/functional-programming/blob/master/LICENSE) file for details
