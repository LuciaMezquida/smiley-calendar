# Smiley Calendar
![giphy](https://media.giphy.com/media/Ww26UTo6jq36WnRl5l/giphy.gif)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It is a calendar in which each day you write down how the day has gone by choosing a smiley. Also, you can leave a comment about the day. The idea is to be able to see a period of time in context so that the bad days cannot against the good ones.

## Content

From the landing, you can access the main panel where you can see all the added smileys depending on how the day went. There is also the possibility to filter only the good days or the bad days. By clicking on one of the smileys, more detailed information will appear, such as the date and a comment about it.

From the add button (+) we access the form to add a new day. If the day has been happy, the option to add a comment is activated.
It's okay if you forget to add one day. It can be added later since when it is added to the main panel it does so chronologically.

In the footer, you can find a list of links to my main social and contact networks and the possibility of returning to the landing by clicking on the copyright.

## Sctructure

~~~
src
├── components
│   ├── About
│   │   ├── About.js
│   │   └── About.scss
│   ├── DaysList
│   │   ├── DaysList.js
│   │   └── DaysList.scss
│   ├── Edition
│   │   ├── Edition.js
│   │   └── Edition.scss
│   ├── Footer
│   │   ├── Footer.js
│   │   └── Footer.scss
│   ├── Header 
│   │   ├── Header.js
│   │   └── Header.scss
│   ├── Landing
│   │   ├── Landing.js
│   │   └── Landing.scss
│   ├── SmileyCard
│   │   ├── SmileyCard.js
│   │   └── SmileyCard.scss
│   ├── SmileyDetail
│   │   ├── SmileyDetail.js
│   │   └── SmileyDetail.scss
│   └── App.js
├── images
├── styleSheets
│   ├── App.scss
│   ├── index.scss
│   └── variables.scss
└── index.js


~~~

## Web App

Landing

![Landing](https://i.ibb.co/KzFY9qt/smiley-calendar.png)

Main page

![Main](https://i.ibb.co/cLRB4kM/Captura-de-pantalla-2020-12-30-a-las-12-13-32.png)

Form page

![Form](https://i.ibb.co/h8TQSPZ/Captura-de-pantalla-2020-12-30-a-las-12-13-56.png)

Detail page

![Detail](https://i.ibb.co/XbgJDpk/Captura-de-pantalla-2020-12-30-a-las-12-13-45.png)

## Start the project

### `npm install`

To install the project.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.\

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
