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

var data = [
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
];

export default class All extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      data_temp: data,
      search: '',
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

  _search(text) {
    let filteredData = [];
    this.state.data_temp.map(function(value) {
      if (value.name.indexOf(text) > -1) {
        filteredData.push(value);
      }
    });
    this.setState({
      data: filteredData,
      search: text,
    });
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
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        </View>
        <View style={styles.arrowContainer}>
          <TouchableOpacity
            style={styles.arrow}
            onPress={() =>
              this.props.props.navigation.navigate('DetailScreen', {
                image: item.image,
                price: item.price,
                name: item.name,
              })
            }>
            <Icon name="arrow-right" size={10} color="green" />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.section}>
          <TextInput
            style={styles.sectionText}
            placeholder="Search.."
            value={this.state.search}
            onChangeText={text => this._search(text)}
          />
          <TouchableOpacity hitSlop={{top: 5, bottom: 5, left: 5, right: 5}}>
            <Icon
              onPress={() => this._search('')}
              style={styles.sectionIcon}
              name="close"
              size={18}
              color="grey"
            />
          </TouchableOpacity>
        </View>
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
  item: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
  },
  image_container: {
    height: 90,
    width: 90,
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
  priceContainer: {
    width: 60,
    height: 30,
    backgroundColor: 'white',
    marginTop: 10,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  price: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 16,
  },
  section: {
    paddingVertical: 10,
    backgroundColor: '#f2f2f2',
    marginTop: 10,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionText: {
    marginLeft: 15,
    fontSize: 18,
    flex: 1,
  },
  sectionIcon: {
    alignItems: 'flex-end',
    marginRight: 20,
  },
});
