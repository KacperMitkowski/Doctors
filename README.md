# Doctor and Doctor addresses in Python/Django and React

This is simple application presenting information about doctors and medical institutions on the base of data taken from 'https://rpwdl.ezdrowie.gov.pl/'

## About the project

The project is SPA with Python, Django and Sqlite as backend and React.js in frontend with the use of Webpack and Babel. The content in the application is created dynamically. 
The user is in the same route for whole the time. The data are taken from db by requests prepared in React and handled in Django (in doctors/urls.py and doctors/views.py). In addition it's possible to organise data by entering django admin panel (obviously you need to create superuser by pressing 'python manage.py createsuperuse') where you have all CRUD interface for the data.

**The goal was to:**
- practice backend skills with Python, Django and Sqlite
- practice customizing Django admin page to current needs
- practice frontend skills with React.js
- get familiar with Webpack and Babel
- practice gathering data from csv into db

## Used technologies:
- Python, Django
- Sqlite
- React.js
- Babel, Webpack
- HTML, CSS, Bootstrap

## Loading data:
- there are 2 options which you can choose:
  1. using csv files: 
    - First you must unpack csv files enclosed in repo and place them in the root folder
    - Prepare db by making necessary migrations (by python manage.py makemigrations -> python manage.py migrate)
    - load data from csv to prepared db by triggering '/load_doctors_to_db_from_csv' and 'load_doctor_addresses_from_csv' urls (in this order). Be aware that this process may
    last very long time (139387 records in doctors' table and 320152 in addresses' table)
    - install necessary packages for frontend by npm: e.g. 'react', 'react-dom', 'style-loader', 'css-loader' etc.
  2. using sqllite:
    - First you must unpack sqlite file and place it in the roor folder
    - Import db to your project
    - install necessary packages for frontend by npm: e.g. 'react', 'react-dom', 'style-loader', 'css-loader' etc.
    
    (This files are packed due to the fact that github accepts 100 MB for each file)

## Plans for the future:
- add additional functionalities such as: search engine, ordering by pressing column name in index page
- add google maps to display exact location of the doctor's addresses
- connect with GUS / VIES server to get additional data
- refine styles and add RWD rules by implementing more Bootstrap classes
- add external libs to improve UI such as prime.ng
- prepare documentation for other developers

## Screenshots:
Doctors Index page:
![alt text](https://github.com/KacperMitkowski/Doctors/blob/master/screenshots/1.PNG)
Doctor Details page:
![alt text](https://github.com/KacperMitkowski/Doctors/blob/master/screenshots/2.PNG)
Django admin page:
![alt text](https://github.com/KacperMitkowski/Doctors/blob/master/screenshots/3.PNG)
