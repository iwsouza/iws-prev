import { Dispatch, ReactNode, SetStateAction } from 'react';
import { ToFuncRequest } from '../../hooks/to-request';

import { HttpResponse } from '../../infra/http';
import { ResponseSignIn } from '../../view/environments/public/sign-in/types';

export type Props = {
  children: ReactNode;
};

export type UserPayload = {
  email: string;
  password: string;
};

export type TokenAndRefresh = {
  token: string;
  refresh: string;
};

export type RefreshTokenResponse = {
  access: string;
  refresh: string;
};

export type ContextUser = {
  id?: string;
  name?: string;
  email?: string;
  token?: TokenAndRefresh['token'];
  refresh?: TokenAndRefresh['refresh'];
};

export type UserResponse = {
  id: number;
  email: string;
  name: string;
};

export type AuthContextData = {
  logged: boolean;
  signOut: () => void;
  user: UserResponse | null;
  setUser: Dispatch<SetStateAction<UserResponse | null>>;
  signIn: ({ email, password }: UserPayload) => Promise<
    | HttpResponse<ResponseSignIn>
    | {
        data: null;
        error: boolean;
        msgError: string;
      }
  >;
};

export interface IAuthServices {
  getDataProfile: ({
    signOut,
  }: ToFuncRequest) => Promise<HttpResponse<UserResponse>>;

  getRefreshToken: (
    refreshToken: string,
  ) => Promise<HttpResponse<RefreshTokenResponse>>;
}
