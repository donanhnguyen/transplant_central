# TRANSPLANTCENTRAL

TransplantCentral is a web application that allows you to review your favorite US metropolitan cities based of a variety of categories and share your living/travel experiences.

Each user can create an account and then click on their desired city, review each of the 4 categories, and post a review.

<h1>Languages and tools used:</h1>

<div display=flex>
  <img src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-original.svg' width=40 height=40/>
  <img src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original-wordmark.svg' width=40 height=40/>
  <img src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/ruby/ruby-original-wordmark.svg' width=40 height=40/>
  <img src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/rails/rails-original-wordmark.svg' width=40 height=40/>
  <img src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-original-wordmark.svg' width=40 height=40/>
  <img src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-original-wordmark.svg' width=40 height=40/>
  <img src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/postgresql/postgresql-original-wordmark.svg' width=40 height=40/>
  <img src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/webpack/webpack-original-wordmark.svg' width=40 height=40/>
  <img src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/git/git-original-wordmark.svg' width=40 height=40/>
  <img src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/redux/redux-original.svg' width=40 height=40/>
</div>

<br>
<h1>How to Run Project Locally:</h1>

1. Git clone the project using:

`git clone https://github.com/thedonwind69/transplant_central.git`

2. Then, CD into project:

`cd transplant_central`

3. Install homebrew in order to install Ruby:

`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
`

4. Check if homebrew is installed by running: 

`brew --version`

5. Install ruby using rbenv:

`rbenv install 3.2.0`

6. Install bundles:

`bundle install`

7. Install NPM and Javascript packages:

`npm install`

8. Create rails database:

`bundle e rails db:setup`

9. Migrate:

`bundle e rails db:migrate`

10. Check if postgres is installed by running: 

`postgres -V`

11. If not, then run: 

`brew install postgresql`

12. Start PostgreSQL:

`brew services start postgresql`

13. Run the rails server:

`bundle e rails s`

14. When the server is running, try to access http://localhost:3000, and it should work in many cases!





