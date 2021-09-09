# film-app-mongoose

NOTE: This program requiers you run: npm install prompt
      

# Basic Syntax:
## NOTE: speech marks only necessary if string has spaces.

### from root folder of project:

### To add a film: [node src/app.js add <"film title"> <"actors name"> <"good" or "bad">]
### Example:  node src/app.js add Bladerunner "Harrison Ford" good

### To list all films: [node src/app.js list ]
### Example: node src/app.js list

### To update the like status of a file: [node src/app.js update-like <"file title>" <"good" or "bad">]
### Example: node src/app.js update-like Bladerunner good

### To update the year: [node src/app.js <"film title">] <"year">
### Example: node src/app.js update-year Bladerunner 1982

### To delete a film: [node src/app.js delete <"film title">]
### node src/app.js update Bladerunne bad

### To check if a film is in the database: [src/app.js check <"film title">]
### Example: node src/app.js check Bladerunner
