## Key Features 

### Authentication & Authorization
- **Actions:** Sign Up, Log In, Log Out, Update Profile, Reset Password
- **Roles:** Regular User (default), Admin, Lead Guide, Guide

### User Profile
- **Updates:** Username, Photo, Email, Password, Other Info
- **Roles:** Regular Users, Admins, Lead Guides, Guides

### Tours
- **Management:** Booking, Tour Map, User Reviews & Ratings
- **Creation:** Admins & Lead Guides
- **Visibility:** All Users
- **Updates:** Admins & Lead Guides
- **Deletion:** Admins & Lead Guides

### Bookings
- **Booking:** Only Regular Users can book (payment required)
- **Restrictions:** No duplicate bookings by Regular Users
- **Viewing:** Regular Users see their bookings; Admins & Lead Guides see all bookings
- **Creation:** Admins & Lead Guides can create (manual, no payment)
- **Editing:** Admins & Lead Guides can edit all bookings
- **Deletion:** Admins & Lead Guides can delete any booking

### Reviews
- **Writing:** Only Regular Users who’ve booked can write reviews
- **Viewing:** All Users
- **Editing/Deletion:** Regular Users can edit/delete their own reviews; Admins can delete any review
- **Restrictions:** No duplicate reviews by Regular Users

### Favorite Tours
- **Addition:** Regular Users can add booked tours to favorites
- **Removal:** Regular Users can remove tours from favorites
- **Restrictions:** No duplicate favorite tours

### Credit Card Payment

## How To Use 

### Booking a Tour
1. **Log In:** Access your account by logging into the site.
2. **Search Tours:** Browse through available tours and find one you wish to book.
3. **Book Tour:** Select the tour and proceed to the booking page.
4. **Payment:** Complete your booking by moving to the payment checkout page. Enter the following test card details:

    - **Card Number:** 4242 4242 4242 4242
    - **Expiry Date:** 02 / 22
    - **CVV:** 222

5. **Done:** Your booking is complete!

### Managing Your Booking
- **View Bookings:** Navigate to the "Manage Booking" page in your user settings to review your booked tours. You will be redirected to this page automatically once your booking is finalized.

### Updating Your Profile
- **Edit Details:** Update your username, profile photo, email address, and password from your profile settings.

## Built With 

- **Node.js:** JavaScript runtime environment for building scalable network applications.
- **Express:** Web framework that simplifies routing and server-side logic.
- **Mongoose:** ODM library for MongoDB, facilitating schema design and data validation.
- **MongoDB Atlas:** Managed cloud database service for secure data storage.
- **Pug:** Fast and efficient templating engine for rendering dynamic HTML.
- **JSON Web Token (JWT):** Security standard for user authentication and authorization.
- **Parcel:** Zero-configuration, high-speed bundler for web applications.
- **Stripe:** Payment processing API for handling online transactions.
- **Postman:** Tool for testing and debugging APIs.
- **Mailtrap & SendGrid:** Platforms for managing and sending transactional emails.
- **Heroku:** Cloud platform for deploying and scaling applications.
- **Mapbox:** Service for integrating interactive maps and displaying tour locations.


## Setting Up Your Local Environment ⚙️

If you wish to play around with the code base in your local environment, do the following

```
* Clone this repo to your local machine.
* Using the terminal, navigate to the cloned repo.
* Install all the necessary dependencies, as stipulated in the package.json file.
* If you don't already have one, set up accounts with: MONGODB, MAPBOX, STRIPE, SENDGRID, and MAILTRAP. Please ensure to have at least basic knowledge of how these services work.
* In your .env file, set environment variables for the following:
    * DATABASE=your Mongodb database URL
    * DATABASE_PASSWORD=your MongoDB password

    * SECRET=your JSON web token secret
    * JWT_EXPIRES_IN=90d
    * JWT_COOKIE_EXPIRES_IN=90

    * EMAIL_USERNAME=your mailtrap username
    * EMAIL_PASSWORD=your mailtrap password
    * EMAIL_HOST=smtp.mailtrap.io
    * EMAIL_PORT=2525
    * EMAIL_FROM=your real-life email address

    * SENDGRID_USERNAME=apikey
    * SENDGRID_PASSWORD=your sendgrid password

    * STRIPE_SECRET_KEY=your stripe secret key
    * STRIPE_WEBHOOK_SECRET=your stripe webhook secret

* Start the server.
* Your app should be running just fine.
```
