import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  PPhome,
  pp2,
  pp3,
  pp4,
  pp5,
  pp6,
  pp7,
  pp8,
  pp9,
  pp10,
  pp11,
  pp12,
  pp13,
  pp14,
} from '../../assets';

const DetailFollowers = () => {
  const navigation = useNavigation();
  const data = [
    {
      nama: 'Julia Mareta',
      photo: PPhome,
    },
    {
      nama: 'Rapik Kurnia',
      photo: pp2,
    },
    {
      nama: 'Lola Lita',
      photo: pp3,
    },
    {
      nama: 'Lisa Kirana',
      photo: pp4,
    },
    {
      nama: 'Charlie Calzoni',
      photo: pp5,
    },
    {
      nama: 'Resti',
      photo: pp6,
    },
    {
      nama: 'Firman Maul',
      photo: pp7,
    },
    {
      nama: 'Rajib GB',
      photo: pp8,
    },
    {
      nama: 'Eko Loso',
      photo: pp9,
    },
    {
      nama: 'Resi Melisa',
      photo: pp10,
    },
    {
      nama: 'Karina Kuy',
      photo: pp11,
    },
    {
      nama: 'Angel',
      photo: pp12,
    },
    {
      nama: 'Carla Dias',
      photo: pp13,
    },
    {
      nama: 'Tery Gouse',
      photo: pp14,
    },
  ];
  return (
    <SafeAreaView style={styles.page}>
      <LinearGradient
        style={styles.head}
        colors={['#05B1A1', '#006C90']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons
            name="arrow-left-thick"
            color="#FFFFFF"
            size={20}
          />
        </TouchableOpacity>
        <Text style={styles.texthead}>Pengikut</Text>
        <View />
      </LinearGradient>
      <ScrollView>
        {data.map((data, index) => (
          <View style={styles.box} key={index}>
            <View style={styles.isibox}>
              <View>
                <Image source={data.photo} style={styles.photo} />
              </View>
              <View style={styles.boxnama}>
                <Text style={styles.nama}>{data.nama}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textbutton}>Ikuti</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailFollowers;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#E1E1E1',
  },
  head: {
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  texthead: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 15,
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 20,
    paddingVertical: 5,
    marginBottom: 10,
  },
  isibox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  photo: {
    width: 30,
    height: 30,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#05B1A1',
  },
  button: {
    backgroundColor: '#46B29C',
    paddingVertical: 5,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  boxnama: {
    marginLeft: 10,
  },
  nama: {
    color: '#000000',
  },
  textbutton: {
    color: '#FFFFFF',
  },
});
