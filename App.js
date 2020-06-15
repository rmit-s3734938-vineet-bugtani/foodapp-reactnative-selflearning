import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import RootStack from '../foodapp/src/RootStack';

export default class App extends React.Component {
  render() {
    console.disableYellowBox = true; 
    return <RootStack />;
  }
}
