import React from 'react';
import firebase from 'firebase/app';

import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme/';

import { Navigation } from './src/infrastructure/navigation/';

import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context';
import { LocationContextProvider } from './src/services/location/location.context';
import { FavouritesContextProvider } from './src/services/favourites/favourites.context';
import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';

const firebaseConfig = {
  apiKey: 'AIzaSyCv8dtcwQf7_wHgYrOeBDgHbgNMnCFMht0',
  authDomain: 'mealstogo-7b7d1.firebaseapp.com',
  projectId: 'mealstogo-7b7d1',
  storageBucket: 'mealstogo-7b7d1.appspot.com',
  messagingSenderId: '30029844934',
  appId: '1:30029844934:web:5d387ee9f4def9ffae62c7',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     firebase
  //       .auth()
  //       .signInWithEmailAndPassword('doc@docpee.it', 'test123')
  //       .then(user => {
  //         setIsAuthenticated(true);
  //       })
  //       .catch(e => {
  //         console.log(e);
  //       });
  //   }, 2000);
  // }, []);

  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  // if (!isAuthenticated) return null;

  return (
    <>
      {/* <SafeAreaView
        style={{ height: "100%", backgroundColor: "orange" }}
      ></SafeAreaView> */}
      <ThemeProvider theme={theme}>
        {/* <RestaurantsScreen /> */}
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
