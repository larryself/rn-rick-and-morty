import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Action } from '../action';

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(Action, dispatch);
};
