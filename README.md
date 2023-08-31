# week-19-pwa-text-editor

## Project Description

This is a Single Page Text Editor using Progressive Web Application (PWA).<br>
It will also use IndexDB to store lightweight data locally.<br>
It was created using JavaScript, NodeJS, Express, Babel-loader webpack, CSS-loader webpack, html-webpack-plugin, mini-css-extract-plugin, webpacks<br>
and workbox-webpack-plugin

## Acceptance Criteria

GIVEN a text editor web application<br>
WHEN I open my application in my editor<br>
THEN I should see a client server folder structure<br>
WHEN I run `npm run start` from the root directory<br>
THEN I find that my application should start up the backend and serve the client<br>
WHEN I run the text editor application from my terminal<br>
THEN I find that my JavaScript files have been bundled using webpack<br>
WHEN I run my webpack plugins<br>
THEN I find that I have a generated HTML file, service worker, and a manifest file<br>
WHEN I use next-gen JavaScript in my application<br>
THEN I find that the text editor still functions in the browser without errors<br>
WHEN I open the text editor<br>
THEN I find that IndexedDB has immediately created a database storage<br>
WHEN I enter content and subsequently click off of the DOM window<br>
THEN I find that the content in the text editor has been saved with IndexedDB<br>
WHEN I reopen the text editor after closing it<br>
THEN I find that the content in the text editor has been retrieved from our IndexedDB<br>
WHEN I click on the Install button<br>
THEN I download my web application as an icon on my desktop<br>
WHEN I load my web application<br>
THEN I should have a registered service worker using workbox<br>
WHEN I register a service worker<br>
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets<br>
WHEN I deploy to Heroku<br>
THEN I should have proper build scripts for a webpack application<br>

## Activities carried out and Important Information

Installation prosess using npm i, to install all the necessary dependencies, followed by npm run start to kick of the application and activate the local host listening port 3000<br>

Necessary Backend code for text editor app completed<br>

Package-lock.json file generated<br>

Necessary extra files created and linked together for functionality<br>

## Screenshots of Web Application

![Screenshot of jate text editor with text](https://github.com/michaelcoder7/week-19-pwa-text-editor/assets/128432461/84012d1d-90c5-42e1-b86a-0bb79f414c39)

![Screenshot of jate text editor with inspecting Application log](https://github.com/michaelcoder7/week-19-pwa-text-editor/assets/128432461/5a95db40-b0bb-4f62-ac90-374b5e52ead6)

![Screenshot of jate text editor showing installability using Lighthouse](https://github.com/michaelcoder7/week-19-pwa-text-editor/assets/128432461/6599288c-0312-4587-8dba-8f09f8a725b2)

## Link to Deployed Application

https://text-editor-app-jate-395b3ecec249.herokuapp.com/
