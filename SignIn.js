import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {dupId, pwReg, setSignIn} from './loginLogic';

const SignIn = ({navigation}) => {
  const [data, setData] = useState({});
  const [error, setError] = useState({
    iddup: true,
    pwreg: true,
    pwsame: true,
  });
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <TextInput
          style={styles.input}
          placeholder="ID"
          placeholderTextColor="#A7A7A7"
          onChangeText={text => setData({...data, id: text})}
          onEndEditing={text => dupId({text, error, setError})}
        />
        {!error.iddup && <Text>아이디 중복</Text>}
        <TextInput
          style={styles.input}
          placeholder="PW"
          placeholderTextColor="#A7A7A7"
          onChangeText={text => {
            pwReg({text, setError, error});
            setData({...data, pw: text});
          }}
        />
        {!error.pwreg && <Text>비밀번호 형식 오류</Text>}
        <TextInput
          style={styles.input}
          placeholder="PWCK"
          placeholderTextColor="#A7A7A7"
          onChangeText={text =>
            data.pw === text
              ? setError({...error, pwsame: true})
              : setError({...error, pwsame: false})
          }
        />
        {!error.pwsame && <Text>비밀번호 불일치</Text>}
        <TextInput
          style={styles.input}
          placeholder="NAME"
          placeholderTextColor="#A7A7A7"
          onChangeText={text => setData({...data, name: text})}
        />
        <TextInput
          style={styles.input}
          placeholder="PHONE"
          placeholderTextColor="#A7A7A7"
          onChangeText={text => setData({...data, phone: text})}
        />
      </View>
      <Pressable
        onPress={() =>
          data.id &&
          data.pw &&
          data.name &&
          error.iddup &&
          error.pwreg &&
          error.pwsame &&
          setSignIn({data, navigation})
        }
        style={[
          styles.btn,
          {
            backgroundColor:
              data.id &&
              data.pw &&
              data.name &&
              error.iddup &&
              error.pwreg &&
              error.pwsame
                ? 'white'
                : 'red',
          },
        ]}>
        <Text>회원가입</Text>
      </Pressable>
    </View>
  );
};

export default SignIn;

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
