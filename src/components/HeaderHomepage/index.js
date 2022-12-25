import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const HeaderHomepage = () => {
  const navigation = useNavigation();
  return (
    <LinearGradient
      style={styles.header}
      colors={['#05B1A1', '#006C90']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}>
      <TouchableOpacity>
        <MaterialCommunityIcons
          name="arrow-left-thick"
          color="#FFFFFF"
          size={20}
        />
      </TouchableOpacity>
      <Text style={styles.TextProfile}>Profil</Text>
      <View style={styles.icon}>
        <TouchableOpacity style={{marginLeft: -20, marginRight: 20}}>
          <MaterialCommunityIcons
            name="share-variant"
            color="#FFFFFF"
            size={20}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <MaterialCommunityIcons
            name="account-outline"
            color="#FFFFFF"
            size={20}
          />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default HeaderHomepage;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#05B1A1',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  TextProfile: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '400',
  },
  icon: {
    flexDirection: 'row',
  },
});
