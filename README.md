# Movies  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Ce projet a été créé dans le cadre d'une expérience pratique de développement d'applications en ReactNative.  
L'application se connecte à l'API [TMDB](https://developers.themoviedb.org/3/getting-started/introduction) pour obtenir des informations sur les films et les séries télévisées.


<img src="/assets/movies.jpg" alt="Movies interface" width="300"/>


**CONFIGURATION**  
Vous devez ajouter une clé pour accéder à l'API [TMDB](https://developers.themoviedb.org/3/getting-started/introduction)  
1. Créer un fichier APIToken.js dans le dossier API  
2. Ajouter le code suivant
```
const Constants = {
    API_TOKEN : "VotreCléIci"
}
  
export default Constants
```  
****************
**APP Movies**  
npx expo --version: 6.0.8  
react-native -v: react-native-cli: 2.0.1; react-native: 0.68.2  
Expo SDK: 45  
****************
**TERMINAL**   
sudo npm install -g expo-cli  
brew install watchman  
****************
npx create-expo-app my-app  
cd my-app  
npx expo start  
npx expo publish  
npx expo update [SDK]  
****************
