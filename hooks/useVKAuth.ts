import {useState} from 'react';
import {
  AuthConfiguration,
  AuthorizeResult,
  authorize,
} from 'react-native-app-auth';

const baseUrl = 'https://oauth.vk.com';
const appID = '51816985';
const secureKey = '5uncAz34rQAu2J31CKwy';
const serviceToken =
  '48bb8c6f48bb8c6f48bb8c6ff04bad2676448bb48bb8c6f2dc442fd65056779dcf3d6d7';

const config: AuthConfiguration = {
  issuer: 'https://oauth.vk.com',
  clientId: appID,
  redirectUrl: 'https://oauth.vk.com/blank.html',
  scopes: [],
  serviceConfiguration: {
    authorizationEndpoint: 'https://oauth.vk.com/authorize',
    tokenEndpoint: 'https://oauth.vk.com/access_token',
  },
  additionalParameters: {
    display: 'page',
    response_type: 'token',
    prompt: 'login',
  },
};

export const useVKAuth = () => {
  const [state, setState] = useState<AuthorizeResult>({} as AuthorizeResult);

  const onLogin = async () => {
    try {
      const reseponse = await authorize(config);
      setState(reseponse);
    } catch (err) {
      console.log('errror:', err);
    }
  };

  const handler = {
    onLogin,
  };

  return {
    state,
    handler,
  };
};
