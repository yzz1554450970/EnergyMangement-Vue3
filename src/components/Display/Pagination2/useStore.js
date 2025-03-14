import { useContext } from 'react';
import Context from './Context';

const useStore = () => {
  const { state: paginState, dispatch: paginDispatch } = useContext(Context);
  return {
    paginState,
    paginDispatch,
  };
};

export default useStore;
