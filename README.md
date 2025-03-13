# How To Install

## Step 1: Install Dependencies

Before installing the this project, we need to make sure that our system has all the required dependencies installed. We will need to install the following dependencies:

-   PHP 8.2 or higher
-   Composer
-   Node.js
-   NPM
-   git

## Step 2: Clone This app

To clone the app, following command:

```bash
git clone https://github.com/shazeedul/task-flow-test.git
```

## Step 3: Go To project directory and composer install

-   first go to the project directory

```bash
cd task-flow-test
```

-   Then copy the .env.example file to .env

```bash
cp .env.example .env
```

-   Then install composer and npm install

```bash
composer install && npm install && npm run build
```

-   then publish assets

```bash
php artisan storage:link
```

## Step 5: Config your database and assine to .env file

```php
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=task_flow
DB_USERNAME=root
DB_PASSWORD=
```

-   then migrate and seed

```bash
php artisan migrate:fresh --seed
```

## Step 6: Now setup asset link by artisan command

```bash
php artisan module:asset-link
```

## Step 7: Now visit the project

```bash
http://task-flow-test.test
```

## Security Vulnerabilities

If you discover a security vulnerability within This Project, please send an e-mail to <a href="https://shazeedul.dev" target="_blank">Syed Shazeddul Islam</a> via [syedshazeedul@gmail.com](mailto:syedshazeedul@gmail.com). All security vulnerabilities will be promptly addressed.
