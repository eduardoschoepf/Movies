**EXPO framework**
 
C’est quoi Expo ?  
Expo est un framework et une plateforme pour les applications React. Il s’agit d’un ensemble d’outils et de services construits autour de React Native et de plateformes natives qui vous aident à développer, créer, déployer et itérer rapidement sur des applications Ios, Android et Web à partir de la même codebase JavaScript / TypeScript.

**APP Movies**  
npx expo --version: 6.0.8  
react-native -v: react-native-cli: 2.0.1; react-native: 0.68.2  
Expo SDK: 45  

**CONFIGURATION**  
Vous devez ajouter une clé pour accéder à l'API TMDBApi (https://developers.themoviedb.org/3/getting-started/introduction)  
1. Créer un fichier APIToken.js dans le dossier API  
2. Ajouter le code suivant
```
const Constants = {
    API_TOKEN : "VotreCléIci"
}
  
export default Constants
```

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