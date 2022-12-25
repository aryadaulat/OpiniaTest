import React from 'react';
import {
  ImageBackground,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Boxprofile} from '../../components';
import {icon1, icon2, icon3, icon4, icon5, BagroundProfile} from '../../assets';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();
  const data = [
    {
      title: 'Pekerjaan',
      icon: icon1,
      text1: 'Graphic Design',
      text2: 'Opinia',
      text3: '(2008-Sekarang)',
      option: 3,
    },
    {
      title: 'Pendidikan',
      icon: icon2,
      text1: 'Design Engineering',
      text2: 'Politeknik Manufaktur Negeri Bandung',
      text3: '(2011-2013)',
      option: 3,
    },
    {
      title: 'Tempat Tinggal',
      icon: icon3,
      text1: 'Kota Bekasi',
      text2: '(2011-2013)',
      option: 2,
    },
    {
      title: 'Hobi',
      icon: icon4,
      text1: 'Musik',
      option: 1,
    },
    {
      title: 'Hobi',
      icon: icon5,
      text1: 'www.gdsagdsagdsa.com',
      option: 1,
    },
  ];

  return (
    <SafeAreaView style={styles.page}>
      <ImageBackground source={BagroundProfile} style={styles.background}>
        <View style={styles.boxheader}>
          <Pressable onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" color="#000000" size={30} />
          </Pressable>
        </View>
        {data.map((data, index) => (
          <Boxprofile
            title={data.title}
            icon={data.icon}
            text1={data.text1}
            text2={data.text2}
            text3={data.text3}
            option={data.option}
            key={index}
          />
        ))}
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
  },
  boxheader: {
    paddingVertical: 20,
  },
  background: {
    flex: 1,
  },
});
