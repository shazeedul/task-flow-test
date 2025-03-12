<p align="center"><img src="./public/admin-assets/img/logo.png" width="400" alt="pces Logo"></p>

## About pces

# How To Install

## Step 1: Install Dependencies

Before installing the this project, we need to make sure that our system has all the required dependencies installed. We will need to install the following dependencies:

-   PHP 8.1 or higher
-   Composer
-   Node.js
-   NPM
-   git

## Step 2: Clone This app

To clone the app, following command:

```bash

```

## Step 3: Go To project directory and composer install

-   first go to the project directory

```bash
cd pces
```

-   Then copy the .env.example file to .env

```bash
cp .env.example .env
```

-   Then install composer

```bash
composer pces
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
DB_DATABASE=pces
DB_USERNAME=root
DB_PASSWORD=
```

-   then migrate and seed

```bash
php artisan migrate:fresh --seed
```

## Step 6: Now serve your application using php artisan serve command

```bash
 php artisan serve
```

## Security Vulnerabilities

If you discover a security vulnerability within This Project, please send an e-mail to <a href="https://bdtask.com" target="_blank">Bdtask Limited</a> via [support@bdtask.com](mailto:support@bdtask.com). All security vulnerabilities will be promptly addressed.
