import {restApi} from '#apis';
import {setStorage} from '#utils/rn.async.storage';


export const sendLogin = async ({data, navigation}) => {
  await restApi.post('api', data).then(res => {
    const token = res.data.payload.access_token;
    const refreshtoken = res.data.payload.refresh_token;
    setStorage('token', token);
    setStorage('refreshToken', refreshtoken);
    navigation.navigate('main page');
  });
};
