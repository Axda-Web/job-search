# Social B

[![React Native](https://img.shields.io/badge/React_Native-61DAFB?logo=react&logoColor=white&style=flat-square)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-000020?logo=expo&logoColor=white&style=flat-square)](https://expo.dev/)

![screenshot](/screenshot.jpg)

## Description

This React Native application provides a convenient platform for users to search for job opportunities using an API. With a user-friendly interface, users can easily explore job listings, filter results, and discover exciting career prospects.

This project explores various concepts and features including:

- Mobile App Developpment
- REST API Integration
- Routing
- Pagination
- Search filter

and more.

## Technologies Used

- [React Native](https://reactnative.dev/) - Version 0.72.3
- [Expo](https://expo.dev/) - Version 49.0.3

## Getting Started

To get started with the Social B project, follow the steps below:

1. Clone the repository:

   ```shell
   git clone https://github.com/Axda-Web/job-search
   ```

2. Change into the project directory:

   ```shell
   cd job-search
   ```

3. Install the project dependencies:

   ```shell
   npm install
   ```

4. Set up API key config:

- Create an `.env` file at the root of the project.
- Add a variable named `EXPO_PUBLIC_RAPID_API_KEY` to the `.env` file.
- Set the value of `EXPO_PUBLIC_RAPID_API_KEY` to your API token (you can get one for free at this address: [Rapid API](https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch/pricing) ).

  Example:

  ```shell
  EXPO_PUBLIC_RAPID_API_KEY={your-api-token-here}
  ```

  Make sure to replace `{your-api-token-here}` with your actual API token.

5. Run the project in development mode:

   ```shell
   npm start
   ```
