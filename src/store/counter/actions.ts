export default {
  /** 等待1秒 */
  asyncAdd(context: any, payload = 1) {
    setTimeout(() => {
      context.commit('syncAdd', payload);
    }, 1000);
  },
};
