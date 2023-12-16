import axios from 'axios';
import {useState} from 'react';
import {AuthorizeResult, authorize} from 'react-native-app-auth';

const baseUrl = 'https://oauth.yandex.com';

const config = {
  issuer: baseUrl,
  clientId: '997ae6f7655a416eaaf3714f5f0a9435',
  redirectUrl: 'com.authwithyandexexample://oauthredirect',
  scopes: [],
  serviceConfiguration: {
    authorizationEndpoint: `${baseUrl}/authorize`,
    tokenEndpoint: `${baseUrl}/token`,
    revocationEndpoint: `${baseUrl}/revoke`,
  },
};

export const useYandexAuth = () => {
  const [state, setState] = useState<AuthorizeResult>({} as AuthorizeResult);

  const onLogin = async () => {
    try {
      const reseponse = await authorize(config);
      const idToken = await getInfo(reseponse.accessToken, 'jwt');
      const userInfo = await getInfo(reseponse.accessToken, 'json');
      console.log({idToken});
      console.log(userInfo);
      setState(reseponse);
    } catch (err) {
      console.log('errror:', err);
    }
  };

  const getInfo = async (
    accessToken: string,
    format: 'jwt' | 'json' | 'xml',
  ) => {
    const response = await axios.get(
      `https://login.yandex.ru/info?format=${format}`,
      {
        headers: {
          Authorization: `OAuth ${accessToken}`,
        },
      },
    );

    return response.data;
  };

  const handler = {
    onLogin,
  };
  return {
    state,
    handler,
  };
};
