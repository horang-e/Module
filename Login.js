import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {sendLogin} from './loginLogic';

const Login = ({navigation}) => {
  const [data, setData] = useState({});
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <TextInput
          style={styles.input}
          placeholder="ID"
          placeholderTextColor="#A7A7A7"
          onChangeText={text => setData({...data, id: text})}
        />
        <TextInput
          style={styles.input}
          placeholder="PW"
          placeholderTextColor="#A7A7A7"
          onChangeText={text => setData({...data, pw: text})}
        />
      </View>
      <Pressable
        onPress={() => data.id && data.pw && sendLogin({data, navigation})}
        style={[
          styles.btn,
          {backgroundColor: data.id && data.pw ? 'white' : 'red'},
        ]}>
        <Text>로그인</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('회원가입')}
        style={styles.btn}>
        <Text>회원가입</Text>
      </Pressable>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: 'pink',
  },
  inner: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '90%',
    color: 'black',
    borderColor: 'black',
    borderWidth: 1,
    paddingLeft: 15,
  },
  btn: {
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },
});
