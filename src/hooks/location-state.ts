import { useLocation } from 'react-router-dom';

export const useLocationState = <
  T = {
    from: Location;
  },
>() => {
  const location = useLocation();
  return (location.state as T) || null;
};
