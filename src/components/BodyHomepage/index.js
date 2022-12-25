import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  Animated,
  TouchableHighlight,
} from 'react-native';
import {Feed} from '../index';
import {Reward, Iconright} from '../../assets';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const BodyHomepage = () => {
  const [isPress, setIsPress] = useState(false);
  const [menuBar, setMenubar] = useState([
    {
      id: 1,
      icon: 'menu',
      nama: 'Semua',
      color: '#05B1A1',
    },
    {
      id: 2,
      icon: 'lightbulb-on-outline',
      nama: 'Idea',
      color: '#05B1A1',
    },
    {
      id: 3,
      icon: 'newspaper-variant-outline',
      nama: 'Artikel',
      color: '#05B1A1',
    },
    {
      id: 4,
      icon: 'poll',
      nama: 'Poling',
      color: '#05B1A1',
    },
    {
      id: 5,
      icon: 'account-group-outline',
      nama: 'Petisi',
      color: '#05B1A1',
    },
  ]);
  const [menuBardefault] = useState([
    {
      id: 1,
      icon: 'menu',
      nama: 'Semua',
      color: '#05B1A1',
    },
    {
      id: 2,
      icon: 'lightbulb-on-outline',
      nama: 'Idea',
      color: '#05B1A1',
    },
    {
      id: 3,
      icon: 'newspaper-variant-outline',
      nama: 'Artikel',
      color: '#05B1A1',
    },
    {
      id: 4,
      icon: 'poll',
      nama: 'Poling',
      color: '#05B1A1',
    },
    {
      id: 5,
      icon: 'account-group-outline',
      nama: 'Petisi',
      color: '#05B1A1',
    },
  ]);
  const ubahwarna = async urutan => {
    var data = [];
    await menuBar.forEach(item => {
      if (item.id === urutan) {
        item.color = '#FFFFFF';
        data.push(item);
      } else {
        data.push(item);
      }
      setIsPress(true);
      setMenubar(data);
    });
  };
  const ubahwarnahide = async urutan => {
    var data = [];
    await menuBar.forEach(item => {
      if (item.id === urutan) {
        item.color = '#05B1A1';
        data.push(item);
      } else {
        data.push(item);
      }
      setIsPress(false);
      setMenubar(data);
    });
  };
  const choose = index => {
    // setMenubar(menuBar);
    // navigation.navigate('Detail', {key: index});
  };
  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.boxpoin}>
        <View style={styles.totalpoin}>
          <Image source={Reward} />
          <View style={styles.boxjumlahpoin}>
            <Text style={styles.texttotappoin}>Total Poin Anda</Text>
            <View style={styles.jumlahpoin}>
              <Text style={styles.number}>230</Text>
              <Text style={styles.textklaim}>Klaim Reward</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity>
          <Image source={Iconright} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.status}>
          <Text>Lengkapi Profil Anda 2/3</Text>
          <View style={styles.barstatus}>
            <Animated.View
              style={
                ([StyleSheet.absoluteFill],
                {backgroundColor: '#EA6C00', width: '75%'})
              }
            />
          </View>
        </View>
        <View style={styles.menubar}>
          {menuBar.length === 5 &&
            menuBar.map((data, index) => (
              <View style={styles.fullbox} key={data.id}>
                <TouchableHighlight
                  activeOpacity={1}
                  underlayColor="#05B1A1"
                  style={isPress ? styles.btnPress : styles.btnNormal}
                  onHideUnderlay={() => ubahwarnahide(data.id)}
                  onShowUnderlay={() => ubahwarna(data.id)}
                  onPress={() => choose(data.nama)}>
                  <View style={styles.boxicon}>
                    <MaterialCommunityIcons
                      name={data.icon}
                      color={data.color}
                      size={20}
                    />
                  </View>
                </TouchableHighlight>
                <Text style={styles.texttitle}>{data.nama}</Text>
              </View>
            ))}
          {menuBar.length !== 5 && setMenubar(menuBardefault)}
        </View>
        <Feed />
      </ScrollView>
    </SafeAreaView>
  );
};

export default BodyHomepage;

const styles = StyleSheet.create({
  body: {
    flex: 0.5,
  },
  boxpoin: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E4E4E4',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 17,
  },
  totalpoin: {
    flexDirection: 'row',
  },
  jumlahpoin: {
    flexDirection: 'row',
  },
  boxjumlahpoin: {
    marginLeft: 10,
  },
  texttotappoin: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '700',
  },
  number: {
    color: '#EA6C00',
    marginRight: 5,
  },
  barstatus: {
    height: 5,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'white',
    borderColor: '#05B1A1',
    borderWidth: 1,
    borderRadius: 5,
  },
  status: {
    marginHorizontal: 20,
  },
  menubar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 20,
    marginHorizontal: 10,
  },
  boxicon: {
    alignItems: 'center',
    padding: 15,
  },
  btnNormal: {
    borderColor: '#9B9B9B',
    borderWidth: 1,
    borderRadius: 10,
  },
  btnPress: {
    borderColor: '#9B9B9B',
    borderWidth: 1,
    borderRadius: 10,
  },
  fullbox: {
    alignItems: 'center',
  },
  textklaim: {
    color: '#747474',
    fontWeight: '400',
  },
  texttitle: {
    color: '#05B1A1',
    fontWeight: '400',
  },
});
