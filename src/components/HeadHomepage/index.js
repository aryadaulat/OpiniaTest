import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
	TouchableHighlight,
  Image,
  Pressable,
  Dimensions,
  Modal,
  Alert,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {PPhome} from '../../assets';
import {useNavigation} from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HeadHomepage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [gambar, setGambar] = useState(PPhome);
  const navigation = useNavigation();
  const hapusgambar = () => {
    setGambar('');
    setModalVisible(!modalVisible);
  };
  return (
    <SafeAreaView style={styles.Head}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.pagemodal}>
          <View style={styles.modalHead}>
            <View style={styles.boxmodal}>
              <MaterialCommunityIcons name="camera" color="#FFFFFF" size={20} />
              <Text style={styles.textmodal}>Kamera</Text>
            </View>
            <View style={styles.boxmodal}>
              <AntDesign name="picture" color="#FFFFFF" size={20} />
              <Text style={styles.textmodal}>Galeri</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.boxhapus} onPress={hapusgambar}>
            <Text style={styles.texthapus}>HAPUS GAMBAR BANNER</Text>
          </TouchableOpacity>
          <TouchableHighlight
						underlayColor="#FFFFFF"
            onPress={() => setModalVisible(!modalVisible)}
            style={styles.batal}>
            <Text style={styles.textbatal}>Batal</Text>
          </TouchableHighlight>
        </View>
      </Modal>
      <ImageBackground
        source={gambar}
        style={styles.background}
        resizeMode="cover">
        <TouchableOpacity
          style={styles.iconpicture}
          onPress={() => setModalVisible(!modalVisible)}>
          <MaterialCommunityIcons name="camera" color="#FFFFFF" size={20} />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.box}>
        <View style={styles.headerbox}>
          <View>
            <Image source={PPhome} style={styles.photo} />
          </View>
          <View style={styles.textheaderbox}>
            <Text style={styles.nama}>Skylar Vaccaro</Text>
            <View style={styles.dollar}>
              <Pressable style={styles.star}>
                <MaterialCommunityIcons
                  name="star-outline"
                  color="#DD7F29"
                  size={20}
                />
              </Pressable>
              <Pressable style={styles.star}>
                <MaterialCommunityIcons
                  name="star-outline"
                  color="#DD7F29"
                  size={20}
                />
              </Pressable>
              <Pressable style={styles.star}>
                <MaterialCommunityIcons
                  name="star-outline"
                  color="#DD7F29"
                  size={20}
                />
              </Pressable>
              <Pressable style={styles.star}>
                <MaterialCommunityIcons
                  name="star-outline"
                  color="#DD7F29"
                  size={20}
                />
              </Pressable>
              <Pressable style={styles.star}>
                <MaterialCommunityIcons
                  name="star-outline"
                  color="#DD7F29"
                  size={20}
                />
              </Pressable>
            </View>
          </View>
        </View>
        <View style={styles.title}>
          <Text style={styles.isititle}>Penulis | Politisi</Text>
          <Text style={styles.desctitle}>
            "Hidup itu sederhana, kita yang membuatnya sulit."
          </Text>
        </View>
        <View style={styles.bar}>
          <Pressable style={styles.isibar}>
            <Text style={styles.textbox}>Postingan</Text>
            <Text style={styles.textboxnumber}>26</Text>
          </Pressable>
          <Pressable
            style={styles.isibarcenter}
            onPress={() => navigation.navigate('DetailFollowing')}>
            <Text style={styles.textbox}>Mengikuti</Text>
            <Text style={styles.textboxnumber}>30</Text>
          </Pressable>
          <Pressable
            style={styles.isibar}
            onPress={() => navigation.navigate('DetailFollowers')}>
            <Text style={styles.textbox}>Pengikut</Text>
            <Text style={styles.textboxnumber}>29</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HeadHomepage;

const styles = StyleSheet.create({
  Head: {
    flex: 0.5,
  },
  background: {
    flex: 0.5,
  },
  photo: {
    width: 91,
    height: 91,
    borderRadius: 50,
    marginTop: -40.5,
  },
  iconpicture: {
    width: 36,
    height: 36,
    backgroundColor: '#05B1A1',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 36,
    position: 'absolute',
    left: windowWidth - 50,
    top: windowHeight * 0.1 - 60,
  },
  box: {
    flex: 0.5,
    borderWidth: 1,
    marginHorizontal: windowWidth * 0.1 - 20,
    borderRadius: 20,
    marginTop: -40,
    backgroundColor: 'white',
    paddingBottom: 37,
  },
  headerbox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
  },
  textheaderbox: {
    position: 'absolute',
    marginLeft: windowWidth * 0.5 - 70,
    paddingTop: 30,
  },
  nama: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '700',
  },
  dollar: {
    flexDirection: 'row',
  },
  star: {
    marginHorizontal: -2,
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  isititle: {
    color: '#000000',
  },
  desctitle: {
    color: '#000000',
    textAlign: 'center',
    fontWeight: '500',
    width: 203,
  },
  bar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: '#05B1A1',
    paddingVertical: 9.5,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  isibar: {
    alignItems: 'center',
  },
  textbox: {
    color: '#FFFFFF',
  },
  textboxnumber: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  isibarcenter: {
    alignItems: 'center',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingHorizontal: 30,
    borderColor: '#FFFFFF',
  },
  body: {
    flex: 0.5,
  },
  modalHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boxmodal: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  textmodal: {
    color: '#FFFFFF',
  },
  boxhapus: {
    paddingVertical: 16,
    paddingHorizontal: 10,
  },
  batal: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  textbatal: {
    color: '#46B29C',
    fontWeight: '700',
  },
  texthapus: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  pagemodal: {
    backgroundColor: '#05B1A1',
    alignItems: 'center',
    marginHorizontal: windowWidth * 0.22,
    marginTop: 50,
    paddingTop: 16,
    borderRadius: 20,
  },
});
