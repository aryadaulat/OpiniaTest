import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const Boxprofile = ({title, icon, text1, text2, text3, option, index}) => {
  return (
    <View style={styles.box} key={index}>
      <View>
        <Text style={styles.textheader}>{title}</Text>
      </View>
      <View style={styles.body}>
        <View>
          <Image source={icon} style={styles.icon} />
        </View>
        {option === 3 && (
          <View style={styles.boxtext}>
            <Text style={styles.textbody}>{text1}</Text>
            <Text style={styles.textbody}>{text2}</Text>
            <Text style={styles.textbody}>{text3}</Text>
          </View>
        )}
        {option === 2 && (
          <View style={styles.boxtext}>
            <Text style={styles.textbody}>{text1}</Text>
            <Text style={styles.textbody}>{text2}</Text>
          </View>
        )}
        {option === 1 && (
          <View style={styles.boxtext}>
            <Text style={styles.textbody}>{text1}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default Boxprofile;

const styles = StyleSheet.create({
  box: {
    borderColor: '#797979',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  body: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  boxtext: {
    marginLeft: 20,
  },
  textheader: {
    color: '#05B1A1',
    fontSize: 20,
    fontWeight: '700',
  },
  textbody: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '400',
  },
  icon: {
    width: 20,
    height: 20,
  },
});
