# SocialPost
Social Post is very simple webapp developed using in Django and React. using this webapp you can login, create new posts, update them and delete them.

**Technologies Used**
1. Django
2. Django Rest Api
3. React Js
4. MySql

**Features**

1. SignUp
2. Register
3. Post Creation
4. Post Edit
5. Post Delete

**Setup BackEnd-**

1. Clone the Whole Repository and navigate to postcrudbackend
2. Create virtual environment by using command ```pip install``` and ```pip env shell```
3. Install ```pip install django```, ```pip install djangorestframework```,```pip install knox ``` and ```pip install pillow``` library
4. change mysql database username and password in file ```postcrud/settings.py```
5. migrate database using the command ```python manage.py makemigration``` and then ```python manage.py migrate```
6. runserver using the commange ```python manage.py runserver```

**Setup frontend**

1. switch to frontend repo and run ```npm install```
2. start server ```npm start```
