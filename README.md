# Real Estate Listings Website

This project is a modern, responsive web application built with **React.js**. The website presents a clean and modern interface, offering features like light mode and dark mode for different user preferences. It includes interactive elements, real-time data fetching, and secure backend communication. *(Note: There is a separate backend server repository, which I have kept private. If you would like to view this repository, please email me at contact@mohfarid.com.)*

## Table of Contents

- [Features](#features)
- [Sample Images](#sample-images)
  - [Home Page](#home-page)
  - [Gallery Page](#gallery-page)
  - [About Page](#about-page)
  - [Availability Page](#availability-page)
  - [Amenities Page](#amenities-page)
  - [Neighborhood Map](#neighborhood-map)
  - [Nearby Attractions Page](#nearby-attractions-page)
  - [Contact Page](#contact-page)
- [Project Structure](#project-structure)
- [Steps to Run the Code/Website](#steps-to-run-the-codewebsite)
  - [1. Install Dependencies](#1-install-dependencies)
  - [2. Start the Development Server](#2-start-the-development-server)
  - [3. Run Tests](#3-run-tests)
  - [4. Build for Production](#4-build-for-production)
  - [5. Eject the Configuration (Optional)](#5-eject-the-configuration-optional)
- [Learn More](#learn-more)

## Features

- **Modern UI/UX**: The website includes both light mode and dark mode, ensuring it is suitable for various user preferences and screen sizes.
  
- **Analytics**: Tracks basic analytics such as page visits by region and device.

- **Interactive Elements**:
  - **Gallery**: Users can filter images by category.
  - **Amenities**: Comprehensive list of amenities offered by the villas (accordion style).
  - **Availability**: Real-time apartment availability checker.
  - **3D Interactive Map**: Built with the Mapbox API, featuring custom clickable icons.

- **Data Security**: All data is fetched from a secure backend server. The server is password-protected and adheres to authorization and authentication rules.

- **Loading Animations**: The front end displays loading animations while fetching data from the backend, ensuring a smooth user experience. Once the data is loaded, the relevant content is populated into the page.

## Sample Images

### Home Page
<img src="https://github.com/user-attachments/assets/de74fe90-68e9-457e-891e-87cc0d26038a" alt="Home Page" title="Rhodesville Villas Home Page" width="800">

### Gallery Page
<img src="https://github.com/user-attachments/assets/aba2eaa8-3678-4b09-be4f-9d946a533b02" alt="Gallery Page" title="Gallery with Filter Options" width="800">

### About Page
<img src="https://github.com/user-attachments/assets/67f4a10a-9714-4657-986f-14fcddfd831a" alt="About Page" title="About Page with Cards" width="800">

### Availability Page
<img src="https://github.com/user-attachments/assets/b9ba55c8-eb68-41af-847d-9c36ccd6f844" alt="Availability Page" title="Real-time Availability Checker" width="800">

### Amenities Page
<img src="https://github.com/user-attachments/assets/6f75a624-e726-43b9-8210-a66dc2b03370" alt="Amenities Page" title="List of Amenities in accordion style" width="800">

### Neighborhood Map
<img src="https://github.com/user-attachments/assets/1c64b18b-2628-42f8-b383-fbac99f03aa4" alt="Neighborhood Map" title="Interactive 3D Map" width="800">

### Nearby Attractions Page
<img src="https://github.com/user-attachments/assets/b3ca6711-0062-4396-a966-320918b6c5a6" alt="Attractions Page" title="Displays nearby attractions" width="800">

### Contact Page
<img src="https://github.com/user-attachments/assets/092d5615-1ae7-4811-8246-402cc5c80907" alt="Contact Page" title="Contact Page with clipboard functionality" width="800">

## Project Structure

The project is organized as follows:

- **src/assets**: Contains static assets like images and icons.
- **src/components**: Reusable UI components such as the Header and Footer.
  - **Footer**: The footer section of the website.
    - `Footer.tsx`
    - `styles.tsx`
  - **Header**: The header section of the website.
    - `Header.tsx`
    - `styles.tsx`

- **src/pages**: Pages of the website, including the About, Amenities, Availability, Contact, Home, and Neighborhood sections.
  - **About-villas**: Information about the villas.
    - `About.tsx`
    - `styles.tsx`
  - **Amenities**: List of amenities offered by the villas.
    - `Amenities.tsx`
    - `styles.tsx`
  - **Availability**: Real-time apartment availability checker.
    - `Availability.tsx`
    - `styles.tsx`
  - **Contact**: Contact information and form.
    - `Contact.tsx`
    - `styles.tsx`
  - **Home**: The homepage of the website.
    - `Gallery.tsx`
    - `Home.tsx`
    - `styles.tsx`
  - **Neighborhood**: Information about the surrounding neighborhood.
    - `MapComponent`
      - `LazyMapComponent.tsx`: Lazy-loaded map component for performance optimization.
      - `MapComponent.tsx`: The main Map component.
      - `MapComponent.css`: CSS for the Map component.
    - `Neighborhood.tsx`
    - `styles.tsx`

- **src/utils**: Utility functions and modules used throughout the project.
  - `auth.ts`: Handles authentication and authorization logic.

- **src/App.tsx**: Main application file.
- **src/index.tsx**: Entry point of the application.

## Steps to Run the Code/Website

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), a tool that provides a modern setup for building React applications with zero configuration.

Follow these steps to get the project up and running:

### 1. Install Dependencies

Before starting the application, ensure all dependencies are installed by running:

```bash
npm install
```

This command installs the necessary packages specified in the `package.json` file.

### 2. Start the Development Server

To start the application in development mode:

```bash
npm start
```

- This command launches the app and opens it in your default web browser at [http://localhost:3000](http://localhost:3000).
- The development server provides hot reloading, meaning the page will automatically reload whenever you make changes to the code.
- Any lint errors or issues will be displayed in the console.

### 3. Run Tests 

To run the test suite in interactive watch mode:

```bash
npm test
```

- This will launch the test runner, which watches for file changes and re-runs tests automatically.
- For more detailed information on running tests, refer to the [Create React App testing documentation](https://facebook.github.io/create-react-app/docs/running-tests).
- NOTE: I have not written any custom tests for this project yet.

### 4. Build for Production

To create an optimized production build:

```bash
npm run build
```

- This command bundles the app for production, optimizing the build for the best performance.
- The optimized files are output to the `build` directory, ready to be deployed.
- Filenames are hashed to ensure proper caching on the client side.

For more details on deploying your application, refer to the [Create React App deployment guide](https://facebook.github.io/create-react-app/docs/deployment).

### 5. Eject the Configuration (Optional)

If you need more control over the project configuration, you can eject the default setup:

```bash
npm run eject
```

**Important: Ejecting is a one-way operation. Once you eject, you cannot revert back!**

- This command will remove the single build dependency from your project and copy all the configuration files and dependencies (Webpack, Babel, ESLint, etc.) directly into your project.
- You can then modify the configuration files as needed.
- All existing commands (`npm start`, `npm test`, `npm run build`) will continue to work, but they will use the copied configuration.

## Learn More

For further reading and advanced topics:

- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started) - Comprehensive guide on using Create React App.
- [React Documentation](https://reactjs.org/) - Official React documentation for learning more about React and its ecosystem.

---

**Built by Mohamed Farid Patel**

## License

This work is licensed under a [Creative Commons Attribution-NonCommercial 4.0 International License](https://creativecommons.org/licenses/by-nc/4.0/).

![Creative Commons License](https://i.creativecommons.org/l/by-nc/4.0/88x31.png)

