import { IState } from './state';

export default {
  doubleNum(state: IState) {
    return state.num * 2;
  },
};
