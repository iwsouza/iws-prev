import { destroyCookie } from 'nookies';
import { createContext, useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { KEYS } from '../../constants/keys';
import { useCookies } from '../../hooks/use-cookies';
import { createJWTCookie } from '../../utils';
import { signInService } from '../../view/environments/public/sign-in/services';
import { authServices } from './services';

import { AuthContextData, Props, UserPayload, UserResponse } from './types';

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<UserResponse | null>(null);
  const navigate = useNavigate();
  const { refreshToken, accessToken } = useCookies();

  const signIn = useCallback(async ({ email, password }: UserPayload) => {
    try {
      const result = await signInService.signIn({
        email,
        password,
      });

      if (result.error) {
        throw new Error(result.msgError);
      }

      // create cookie by access_token
      createJWTCookie(result.data.token, KEYS.STORAGE.USER_ACCESS_TOKEN);

      // create cookie by refresh_token
      createJWTCookie(result.data.refresh, KEYS.STORAGE.USER_REFRESH_TOKEN);

      return result;
    } catch (err) {
      setUser(null);
      return {
        data: null,
        error: true,
        msgError: (err as Error)['message'],
      };
    }
  }, []);

  const signOut = async (): Promise<void> => {
    destroyCookie(undefined, KEYS.STORAGE.USER_ACCESS_TOKEN);
    destroyCookie(undefined, KEYS.STORAGE.USER_REFRESH_TOKEN);
    setUser(null);
    navigate('/');
  };
  const userData = useCallback(async () => {
    const { data, error } = await authServices.getDataProfile({
      signOut,
    });

    if (error) return;

    if (data) setUser(data);
  }, [accessToken]);

  useEffect(() => {
    if (refreshToken) {
      userData();
    }
  }, [refreshToken]);
  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        setUser,
        signOut,
        logged: Boolean(user),
      }}>
      {children}
    </AuthContext.Provider>
  );
};
