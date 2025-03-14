import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';



import KcalCalculationPage from './komponentit/Pages/KcalCalculationPage';
import FoodInformationSaverPage from './komponentit/Pages/FoodInformationSaverPage';
import { check,request, PERMISSIONS, RESULTS } from 'react-native-permissions';



function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  check(PERMISSIONS.ANDROID.CAMERA).then((status) => {
    switch(status){

      case RESULTS.DENIED:
        return console.log('The permission has not been requested / is denied but requestable');

      case RESULTS.GRANTED:
        return console.log('The permission is granted');

    }
  });

  request(PERMISSIONS.ANDROID.CAMERA).then(() => {});

  return (
    <View style={styles.backGround}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={'black'}
      />
      <ScrollView style={styles.backGround}>
        <KcalCalculationPage/>
        <FoodInformationSaverPage />
      </ScrollView>
    </View>
  );
}





const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  backGround: {
    backgroundColor: 'black',
    height: '100%',
  },

  statusBarColor: {
    color: 'black',
  },
  inputLabel:{
    color:'white',
  },
  inputStyle: {

  },
});

export default App;
