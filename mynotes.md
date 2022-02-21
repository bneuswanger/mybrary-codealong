Code-Along with WebDev Simplified: Node.js/Express/MongoDB Course #1

1. Make new project folder on PC.  
2. Run GitBash inside the folder.  Type code . to open in VS code
3. In VScode, open up the bash terminal and type: 
    a) npm init -y                                       (this creates a package.json file)
    b) npm i express ejs express-ejs-layouts mongoose    (install dependencies we'll need)  
    c) npm i --save-dev nodemon                          (saves nodemon to devDependencies in package.json)
4. Remove default info from the "scripts" section of package.json file edit to this: 
"scripts": {
    "start": "node server.js",         (this starts our server on a production environment without nodemon)
    "devStart": "nodemon server.js"    (this is what we'll use to auto-refresh our server when we make a change)
  },
5. Create server.js file
6. Create views directory    (for ejs templates)
7. Create public directory   (for css, js, pictures, etc.)
8. To start up the server, in terminal: npm run devStart  
9. Make a routes folder to house all our controllers.  In Node.js/Express, most people refer to controllers as routes. 
10. Create a models folder for our database models. 
11. Create index.js inside routes folder.
12. Create layouts folder inside views folder.  Create layout.ejs file inside layouts folder.
    -the layout.ejs file is like a template for all our views
13. Create index.ejs file inside views folder. 
14. Link database
15. npm i --save-dev dotenv  (to set up environment variables)
16. Add to git
17. Add .gitignore file and put relevant pieces in it
18. Push to GitHub
19. Heroku setup
20. MongoDB Atlas setup
21. Set up lots of ejs, partials, routes
22. npm i body-parser
23. A bunch of stuff
24. npm i multer (helps with images)
25. filepond via CDN to handle image integration with database
26. uninstalled Multer (filepond replaces it)
27. npm i method-override 



