# Prisma ORM 4.x Upgrade to 5.x incompatible issue test code

## Usage
  
### prisma 4.x
  Enter prisma4 folder, modify .env file, config the database connection string, then
  
  ```bash
  yarn
  npx prisma migrate deploy
  yarn prisma:generate && yarn start

  ```

  A record will be inserted into the database

### prisma 5.x
  Enter prisma5 folder, modify .env file, config the database connection string as same as prisma 4.x, then
  
  ```bash
  yarn
  yarn prisma:generate && yarn start
  ```
  A record will be inserted into the database