import {restApi} from '#apis';
import {setStorage} from '#utils/rn.async.storage';
import {numreg, pwreg} from '#commons/regulation';

export const sendLogin = async ({data, navigation}) => {
  await restApi.post('api', data).then(res => {
    const token = res.data.payload.access_token;
    const refreshtoken = res.data.payload.refresh_token;
    setStorage('token', token);
    setStorage('refreshToken', refreshtoken);
    navigation.navigate('main page');
  });
};

export const dupId = async ({text, error, setError}) => {
  await restApi
    .post('api', text)
    .then(res => setError({...error, iddup: true}))
    .catch(err => setError({...error, iddup: false}));
};

export const pwReg = ({text, setError, error}) => {
  if (pwreg(text)) {
    setError({...error, pwreg: true});
  } else {
    setError({...error, pwreg: false});
  }
};

export const setSignIn = async ({data, navigation}) => {
  await restApi.post('api', data).then(res => {
    navigation.navigate('로그인');
  });
};
