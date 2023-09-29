List Genius
=========

Introducing List Genius, the smart solution for everyone overwhelmed with endless lists in their lives. Here's how it makes a difference:

1. **Auto-Categorization**: By harnessing the capabilities of AI, List Genius swiftly and accurately categorizes your items. No more pondering over where to place an item - the AI has it sorted.

2. **Simple Interface**: With its user-friendly design, List Genius ensures you spend less time fumbling with settings and more time ticking off tasks.

Discover the simplicity of list-making with List Genius, where AI meets everyday organization.

## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information 
  - username: `username` 
  - password: `password` 
  - database: `database`
  - OPENAI_API_KEY=(Your openAi API key here)
3. Install dependencies: `npm i`
4. Reset database: `npm run db:reset` in the projects root directory.
7. Run the server: `npm run local` in the projects root directory.
  - Note: nodemon is used, so you should not have to restart your server
8. Visit `http://localhost:8080/`

## Dependencies

- Node 10.x or above
- NPM 5.x or above
- PG 8.5.x
- Axios 1.5.1
- Chalk 2.4.2
- cookie-parser 1.4.6
- dotenv 2.0.0
- express 4.17.1
- morgan 1.9.1
- sass 1.35.1

## Demo
### New Item Auto Categorization
![New Item Auto Categorization](https://github.com/tusharhchhabra/smarttodolist-btc/blob/develop/public/assets/gifs/ListGenius-NewItems.gif?raw=true)
### Update Item Category
![Update Item Category](https://github.com/tusharhchhabra/smarttodolist-btc/blob/develop/public/assets/gifs/ListGenius-UpdateItems.gif?raw=true)
### Profile Update
![Profile Update](https://github.com/tusharhchhabra/smarttodolist-btc/blob/develop/public/assets/gifs/ListGenius-ProfileUpdate.gif?raw=true)

## Warnings & Tips
- Please note that this project was developed in a span of 7 days for learning purposes. It lacks a comprehensive login/authentication mechanism, does not offer privacy features, and does not adhere to industry standards regarding password encryption. 
- Do not edit the `layout.css` file directly, it is auto-generated by `layout.scss`.
- Use the `npm run db:reset` command each time there is a change to the database schema or seeds. 
  - It runs through each of the files, in order, and executes them against the database. 
  - Note: you will lose all newly created data each time this is run.
