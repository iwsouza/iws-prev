export const KEYS = {
  STORAGE: {
    THEME: '@COMPASS-THEME',
    USER: '@COMPASS-USER',
    USER_ACCESS_TOKEN: 'COMPASS-USER-ACCESS-TOKEN',
    USER_REFRESH_TOKEN: 'COMPASS-USER-REFRESH-TOKEN',
  },
  HOST: {
    API_URL: (process.env.NEXT_PUBLIC_API_URL || '') as string,
  },
};
