# Recruitr

<table>
<tr>
<td>
  The goal of this app is to help the recruitment process for a company and to manage applicants.
</td>
</tr>
</table>

By [Camila García Santillán](mailto:camilagsantillan@gmail.com)

## Demo

Here is a working live demo : https://recruitr-drawbotics-cgs.herokuapp.com

## Table of Contents

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Using Examples](#using-examples)
- [Built with](#built-with)
- [To-do](#to-do)

## Installation

1. Navigate to [repo](https://github.com/wuacamolegs/recruitr.git)
2. Clone locally using
   `git clone git@github.com:wuacamolegs/recruitr.git`

**Run Rails API**

3. Navigate to api using `cd rails-api`
4. Install dependencies using `bundle install`
5. Initialize database using `bin/rake db:setup`
6. Run migrations and seed `rake db:migrate db:seed`
7. Run tests using `bundle exec rspec`
8. Start rails server using `rails s`

```
$ cd rails-api
$ bundle install
$ bin/rake db:setup
$ rake db:migrate db:seed
$ bundle exec rspec
$ rails s
```

**Run React App**

3. Navigate to api using `cd react-app`
4. Install dependencies using `npm install`
5. Start react server using `npm run start`
6. Navigate to app in [browser](http://localhost:5000)
7. Enjoy!

```
$ cd react-app
$ npm install
$ npm run start
```

**Using foreman**

```
$ foreman start -f Procfile.dev
```

## Getting Started

- [Landing Page](#landing-page)
- [New Position](#new-position)
- [New Applicant](#new-position)
- [Matching Recruiter](#new-position)
- [Listing Job Applications](#new-position)
- [Listing Open Positions](#new-position)
- [States](#states)

### Landing Page

### New Position

Create a new position and assign a hiring team

### New Applicant

Upon receiving a candidate, the HR person create a candidate profile and match with the position the candidate is applying for

### Matching Recruiter

When the applicant is matched to a position, the HR person should match the candidate with a recruiter. Suggested recruiters will be listed (desc) with score based on different criterias.

Criterias:

- **Skills**: Recruiters' skills are compared to the position required skills based on proficiency. (cosine similarity)
- **Seniority**: Recruiters are rank by their skills proficiency (sumatory of skills proficiency)
- **Random**: Recruiters are rank randomly

### Listing Job Applications

### Listing Open Positions

## States

- Position states: `draft`, `open`, `closed`
- Job application states: `unmatched`, `matched`, `interviewing`, `closed`

## Built with

- [Ruby on Rails]()
- [Foreman]()
- [Bundler]()
- [Npm]()
- [ReactJs]()
- [React Bootstrap]()
- [Axios]()
- [Redux]()
- [React router]()
- [create-react-app]()

## To-do

- Send email when new applicant
- Send email when matching a recruiter
- Create google calendars events
- So far skills proficiency are set as max level. Skills proficiency should be set in a range of 1 to 10
- Manage Hiring Teams
- Job application workflow
- Position workflow: change position state
- Draft positions
- Interview workflow: configure a interview process with interview steps, recruiters
