# Rails API

INTRO DESCRIPTION

_This is a work in progress._

## Getting Started

### Prerequisites

#### Ruby ~> 2.4

Download and manage via [rbenv](https://github.com/rbenv/rbenv) or [RVM](https://rvm.io/)

#### Rails ~> 5.1

    gem install rails -v '~> 5.1'

#### PostgreSQL ~> 9.6

Follow the [instructions for downloading PostgreSQL](https://www.postgresql.org/download/) based on your operating system, and be sure to [create a database user with privileges](https://wiki.postgresql.org/wiki/First_steps).

### Installing

Clone the repository:

    git clone git@github.com:wuacamolegs/rails-api.git
    cd ./rails-api

Install the gems:

    bundle install

And set up the database:

    bin/rake db:setup
    rake db:create
    rake db:migrate
    rake db:seed

Start the development server:

    rails s

## Built With

- [Rails](http://rubyonrails.org/) - Web Framework
- [rbenv](https://github.com/rbenv/rbenv) - Environment Managemet
- [Bundler](http://bundler.io/) - Dependency Management
- [Heroku](https://www.heroku.com/) - Deployment Platforms

## Authors

- **Camila García Santillán**
