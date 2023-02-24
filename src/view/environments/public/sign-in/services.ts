import { KEYS } from '../../../../constants/keys';
import { HttpClient } from '../../../../infra/http/client';
import { HttpResponse } from '../../../../infra/http/types';
import { ResponseSignIn, SignInParams } from './types';

export const signInService = {
  signIn: async (data: SignInParams): Promise<HttpResponse<ResponseSignIn>> => {
    const { result } = await HttpClient<ResponseSignIn>('POST', {
      host: KEYS.HOST.API_URL,
      path: '/login',
      data,
      validations: {
        codeSuccess: 200,
        msgError: 'Ops... ocorreu algum erro ao tentar fazer login',
      },
    });

    if (!result.error) {
      const { token, refresh } = result.data;

      return {
        error: false,
        data: {
          token,
          refresh,
        },
      };
    }

    return {
      ...result,
      data: {} as ResponseSignIn,
    };
  },
};
