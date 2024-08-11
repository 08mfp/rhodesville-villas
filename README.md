# Rhodesville Villas Website

This project is a modern, responsive web application built with React.js. It website presents a clean and modern interface, offering features like light mode and dark mode for different user preferences. It includes interactive elements, real-time data fetching, and secure backend communication.

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

### BEFORE: 
Navigate to the root folder in this repository


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
- NOTE: i have not written any custom tests for this project yet.


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

**Note:** The curated feature set provided by Create React App is suitable for most applications. Only eject if you need to customize the build process significantly.

### Learn More

For further reading and advanced topics:

- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started) - Comprehensive guide on using Create React App.
- [React Documentation](https://reactjs.org/) - Official React documentation for learning more about React and its ecosystem.


```
Built by Mohamed Farid Patel
```
