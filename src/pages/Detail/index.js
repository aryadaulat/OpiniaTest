import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Detail = ({route}) => {
  return (
    <View>
      <Text>{route.params.key}</Text>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({});
