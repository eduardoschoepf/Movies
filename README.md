# Movies Application
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

TThis application was developed as a result of my studies in React Native.  
The application connects to the [TMDB API](https://developers.themoviedb.org/3/getting-started/introduction) to retrieve information on movies and TV shows.  

## Features

- **Movie or series search:** Easily search for your movies and series by entering a title in the search bar.
- **Consult movie or series details:** Click on the search result to display the details of the selected title.

<img src="/assets/movies.jpg" alt="Movies interface" width="300"/>
  
## Configuration  

You need to add an API key to access the [TMDB API](https://developers.themoviedb.org/3/getting-started/introduction).
1. Create a file APIToken.js in the API folder.
2. Add the following code:
```
const Constants = {
    API_TOKEN : "YourKeyHere"
}
  
export default Constants
```

****************
npx expo --version: 6.0.8  
react-native -v: react-native-cli: 2.0.1; react-native: 0.68.2  
Expo SDK: 45  
****************

### Contributions

Contributions are welcome! Feel free to submit pull requests for new features or improvements.
