import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { RootState } from '../reducer';

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export { useTypedSelector as useSelector };
