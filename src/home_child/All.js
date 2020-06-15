import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class All extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: 'Mushrooms',
          image: require('../asset/namkho.jpg'),
          rating: 3,
          price: '$12',
        },
        {
          name: 'Jackfruit Fried',
          image: require('../asset/mitkho.jpg'),
          rating: 5,
          price: '$15',
        },
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
          name: 'Salad dressing',
          image: require('../asset/cuondiep.jpg'),
          rating: 5,
          price: '$13',
        },
      ],
    };
    this._loadFont();
  }

  _loadFont() {
    Icon.loadFont();
  }

  _rating(item) {
    let rating = [];
    for (var i = 0; i < item; i++) {
      rating.push(
        <Image
          source={require('../asset/star.png')}
          style={styles.ratingImage}
        />,
      );
    }
    return rating;
  }

  renderItem = ({item}) => {
    return (
      <LinearGradient
        colors={['#009245', '#8cc631']}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 0}}
        style={styles.item}>
        <View style={styles.image_container}>
          <Image source={item.image} style={styles.image} />
        </View>
        <View style={styles.content}>
          <Text style={styles.name}>{item.name}</Text>
          <View style={styles.rating}>{this._rating(item.rating)}</View>
        </View>
        <View style={styles.arrowContainer}>
          <TouchableOpacity style={styles.arrow}>
            <Icon name="arrow-right" size={10} color="green" />
          </TouchableOpacity>
        </View>
      </LinearGradient>
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
  },
  item: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: 10,
    flexDirection: 'row',
  },
  image_container: {
    height: 100,
    width: 100,
  },
  image: {
    width: '100%',
    height: '100%',
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 10,
  },
  content: {
    marginLeft: 10,
    flex: 1,
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  rating: {
    marginTop: 5,
    flexDirection: 'row',
  },
  ratingImage: {
    width: 15,
    height: 15,
    marginRight: 5,
  },
  arrow: {
    width: 30,
    height: 30,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  arrowContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});
