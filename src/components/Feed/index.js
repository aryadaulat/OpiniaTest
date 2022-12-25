import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {PPhome} from '../../assets';

const Feed = () => {
  return (
    <View style={styles.box}>
      <View style={styles.header}>
        <View>
          <Image source={PPhome} style={styles.picture} />
        </View>
        <View style={styles.title}>
          <View>
            <Text style={styles.textname}>Julia Mareta</Text>
          </View>
          <View style={styles.status}>
            <Text style={styles.timeline}>19 Menit Lalu</Text>
            <Text style={styles.katagori}>Idea</Text>
          </View>
        </View>
      </View>
      <View style={styles.boxtext}>
        <Text style={styles.isitext}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, Selengkapnya...
        </Text>
      </View>
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({
  box: {
    marginHorizontal: 30,
  },
  picture: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: '#05B1A1',
    borderWidth: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    alignItems: 'flex-start',
    marginLeft: 10,
  },
  status: {
    flexDirection: 'row',
  },
  timeline: {
    borderRightWidth: 1,
    marginRight: 5,
    paddingRight: 5,
    color: '#797979',
  },
  textname: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '700',
  },
  katagori: {
    color: '#05B1A1',
  },
  boxtext: {
    marginRight: 20,
  },
  isitext: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '400',
  },
});
