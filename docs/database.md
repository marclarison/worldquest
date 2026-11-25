WORLDQUEST DATABASE

Purpose

The database stores country information, user accounts, learning progress and quiz results.

Tables

1. Countries

Stores information about every country.

Fields:
- id
- name
- capital
- continent
- population
- flag
- description
- fun_fact

2. Profiles

Stores user information.

Fields:
- id
- username
- email
- avatar

3. User Country Progress

Tracks a user's learning progress.

Fields:
- id
- user_id
- country_id
- status
- mastery_score
- last_reviewed

Status Values:
- Learning
- Mastered
- Favourite

4. Quiz Attempts

Stores quiz history.

Fields:
- id
- user_id
- country_id
- question_type
- correct
- created_at

5. Flag Features

Stores flag characteristics for future quizzes.

Fields:
- country_id
- colours
- symbols
- stars
- crescent
- cross
- animal
- dragon
- tree

Relationships

- One user can have many progress records.
- One user can have many quiz attempts.
- One country can appear in many quizzes.
- One country can have one flag feature record.

Database Goal

Keep the database simple, organised and easy to expand as new features are added.