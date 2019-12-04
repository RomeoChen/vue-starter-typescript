<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <a-button @click="addSync">同步增加，每次加1</a-button>
    <a-button @click="addAsync">异步增加，等待1秒加{{asyncAddNum}}</a-button>
    <div>当前计数：{{num}}</div>
    <div>双倍的数字：{{doubleNum}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
const counterModule = namespace('counter');

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  @counterModule.State num!: number;
  @counterModule.Getter doubleNum!: number;
  @counterModule.Mutation syncAdd: any;
  @counterModule.Action('asyncAdd') asyncAdd: any;
  // 也可以 @counterModule.Action asyncAdd: any;

  private asyncAddNum = 2;

  public addSync() {
    this.syncAdd();
  }

  public addAsync() {
    this.asyncAdd(this.asyncAddNum);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
