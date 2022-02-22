# 'Mybrary' code-along project


> Based on a free [*Full Stack Web Development Course*](https://www.youtube.com/playlist?list=PLZlA0Gpn_vH8jbFkBjOuFjhxANC63OmXM) created by [**Web Dev Simplified**](https://www.youtube.com/c/WebDevSimplified) on YouTube.  Thank you for a great series, Kyle!


## ME~~R~~N Tech Stack (no React)
* Node.js
* Express
* MongoDB
* Heroku
* MongoDB Cloud (Atlas)

## Rationale
After completing Colt Steele's Web Developer Bootcamp 2022 up to (but not including) the YelpCamp project, I wanted more practice with Node/Express/MongoDB and go through the motions of deployment.  99% of the code here is Kyle's, but I added some extra styles and there are a couple of bugs I fixed.

## Publishing/Deployment
Why am I sharing a project that is 99% not mine?  To practice going through the motion of real development and collaboration.  I deployed the app to Heroku.  However, there is no user authentication or permissions and since it has CRUD capability, I'm opting to leave it in maintenance mode to eliminate any risk of it being used maliciously.

# My Notes
## Initial Setup Steps
1. Make new project folder on PC.
2. Run GitBash inside the folder.  Type `code .` to open in VS code
3. In VScode, open up the bash terminal and type:
    * `npm init -y` (this creates a package.json file)
    * `npm i express ejs express-ejs-layouts mongoose` (install dependencies we'll need)
    * `npm i --save-dev nodemon` (saves nodemon to devDependencies in package.json)
4. Remove default info from the `"scripts"` section of package.json file edit to this:
```js
"scripts": {
    "start": "node server.js",
    "devStart": "nodemon server.js"
  },
```
* line 2 starts our server on a production environment without nodemon
* line 3 sets up nodemon to run server with `npm run devStart` terminal command
5. Create server.js file
6. Create views directory    (for ejs templates)
7. Create public directory   (for css, js, pictures, etc.)
8. To start up the server, in terminal: `npm run devStart`
9. Make a routes folder to house all our controllers.  In Node.js/Express, most people refer to controllers as routes.
10. Create a models folder for our database models.
11. Create index.js inside routes folder.
12. Create layouts folder inside views folder.  Create layout.ejs file inside layouts folder.
    * the layout.ejs file is like a template for all our views
13. Create index.ejs file inside views folder.
14. Link database
15. `npm i --save-dev dotenv`  (to set up environment variables)
16. Add to git
17. Add .gitignore file and put relevant pieces in it (.env, node modules)
18. Push to GitHub
19. Heroku setup (account, installed CLI).  To push to Heroku, `git push heroku main` in terminal
20. MongoDB Atlas setup
## Build Notes (admittedly short)
1. Set up lots of ejs, partials, routes
2. `npm i body-parser`
3. A bunch of stuff
4. npm i multer (helps with images)
5. filepond via CDN to handle image integration with database
6. uninstalled Multer (filepond replaces it)
7. `npm i method-override`
8. Added live server web extension to Chrome to enable live server when running a server
