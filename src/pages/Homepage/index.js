import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Buttonpin} from '../../assets';

import {HeaderHomepage, HeadHomepage, BodyHomepage} from '../../components';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Homepage = () => {
  return (
    <SafeAreaView style={styles.page}>
      <HeaderHomepage />
      <HeadHomepage />
      <BodyHomepage />
      <TouchableOpacity style={styles.Buttonpin}>
        <Image source={Buttonpin} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },

  Buttonpin: {
    position: 'absolute',
    top: windowHeight * 0.82,
    left: windowWidth * 0.8,
  },
});
