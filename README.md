# Football Stats Tracker
## Overview
The **Football Stats Tracker** is my passion project. At the end of my first production build, I intend it to be a versatile tool tailored for football enthusiasts, amateur teams and players to effortlessly manage and monitor their statistics. 
Whether you're an indiviudal player aiming to keep a detailed record of your performance or a small league organizer seeking in-depth statistical insights, this app should be able to provide a comprehensive solution. For now, I've submitted a very barebones infrastructure.

## Key Features
- Player Statistics:  Easily log and track player statistics, including goals and assists.
  - I am including a "Player Attribute" stat category (Like FIFA games) for future use.
- Teams: Creation of teams.
  - I will implement a more robust team creation, especially creating temporary team using a list of available players
- Clean UI is in the works.
- Database Integration: All data is designed to be stored in a SQL Database
- Authentication


## Application is Work-In-Progress. 
I have the backbones code here. I will continuously develop this project.

## List of Prerequisites
Make sure your system has the following prerequisite packages installed.
- Python
- Django
  - To install, type this in your terminal ``` pip install django ```
  - Django Rest Framework,  Django CORS Headers & other required packages.
  - ``` pip install djangorestframework djangorestframework-simplejwt django-cors-headers  ```
- MySQL or any SQL DB
- You must manually provide the database details in ```Backend/backend/settings.py```
```
#For MySQL
  DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'mysql_db_name',
        'USER': 'db_username',
        'PASSWORD': 'db_password',
        'HOST':'localhost',
        'PORT':'portlocation',
    }
}
```

- Node.JS with Node Package Manager (NPM)
- To install required frontend packages, type the following commands in the terminal:
```
cd frontend/
npm install
```

### Contributions or comments will be highly appreciated.

# License
GNU General Public License v3.0
