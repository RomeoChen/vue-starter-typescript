import { IState } from './state';

export default {
  syncAdd(state: IState, payload = 1) {
    state.num += payload;
  },
};
