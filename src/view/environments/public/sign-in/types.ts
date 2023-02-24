export type SignInParams = {
  email?: string;
  password?: string;
};

export type ResponseSignIn = {
  token: string;
  refresh: string;
};
