import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          type: 'Dessert',
          color: '#f7931e',
          data: [
            {
              name: 'Stewed Mushrooms',
              image: require('../asset/namkho.jpg'),
              price: '$12',
            },
            {
              name: 'Jackfruit Fried',
              image: require('../asset/mitkho.jpg'),
              price: '$15',
            },
          ],
        },
        {
          type: 'Main course',
          color: '#39b54a',
          data: [
            {
              name: 'Noodles',
              image: require('../asset/hutieu.jpg'),
              rating: 4,
              price: '$20',
            },
            {
              name: 'Beef',
              image: require('../asset/cuonlalot.jpg'),
              rating: 2,
              price: '$12',
            },
            {
              name: 'Salad',
              image: require('../asset/cuondiep.jpg'),
              rating: 5,
              price: '$13',
            },
            {
              name: 'Salad',
              image: require('../asset/cuondiep.jpg'),
              rating: 5,
              price: '$13',
            },
          ],
        },
        {
          type: 'Other',
          color: '#ed1e79',
          data: [
            {
              name: 'Salad',
              image: require('../asset/cuondiep.jpg'),
              price: '$13',
            },
            {
              name: 'Jackfruit Dried',
              image: require('../asset/mitkho.jpg'),
              price: '$15',
            },
          ],
        },
      ],
    };
  }
  _renderImages(data) {
    let images = [];
    for (var i = 0; i < data.length; i++) {
      if (i !== 3) {
        images.push(
          <View style={styles.imageContainer}>
            <Image source={data[i].image} style={styles.image} />
            <Text style={styles.imageName}>{data[i].name}</Text>
          </View>,
        );
      }
    }
    return images;
  }

  renderItem = ({item}) => {
    return (
      <View style={styles.section}>
        <Text
          style={[
            styles.sectionText,
            {
              color: item.color,
            },
          ]}>
          {item.type}
        </Text>
        <View
          style={[
            styles.sectionContainer,
            {
              backgroundColor: item.color,
            },
          ]}>
          {this._renderImages(item.data)}
        </View>
      </View>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.flatlist}>
          <FlatList
            data={this.state.data}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={this.ItemSeparatorComponent}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    );
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  flatlist: {
    flex: 1,
    marginTop: 10,
  },
  sectionContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 15,
    flexDirection: 'row',
  },
  sectionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: 90,
    height: 90,
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 90,
    marginBottom: 10,
  },
  imageContainer: {
    alignItems: 'center',
    flex: 1,
  },
  imageName: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
