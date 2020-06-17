/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  Text,
  SafeAreaView,
} from 'react-native';
import ScrollableTabView, {
  DefaultTabBar,
} from 'react-native-scrollable-tab-view';
import All from '../src/home_child/All';
import Menu from '../src/home_child/Menu';
import Popular from '../src/home_child/Popular';

export default class Home extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <ImageBackground
            source={require('./asset/header.png')}
            style={styles.imageBackground}
            resizeMode="contain">
            <Text style={styles.title}>HOME</Text>
          </ImageBackground>
        </View>
        <View style={styles.tabbar}>
          <ScrollableTabView
            initialPage={0}
            tabBarActiveTextColor={'green'}
            tabBarUnderlineStyle={{backgroundColor: 'green'}}
            renderTabBar={() => <DefaultTabBar />}>
            <All tabLabel="All" props={this.props} />
            <Menu tabLabel="Menu" props={this.props} />
            <Popular tabLabel="Popular" props={this.props} />
          </ScrollableTabView>
        </View>
      </SafeAreaView>
    );
  }
}
const width = Dimensions.get('screen').width;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    marginTop: 0,
  },
  tabbar: {
    flex: 1,
    paddingHorizontal: 30,
    marginTop: -60,
  },
  imageBackground: {
    width: width * 0.4,
    height: width * 0.4,
    alignItems: 'center',
    position: 'relative',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    position: 'absolute',
    marginTop: 20,
  },
});
