<template>
  <Background :config="globalConfig"/>
  <div class="app-content" :class="{ blur : globalConfig.theme.backgroundBlur }">
    <div id="main" class="main">
      <Avatar class="avatar" :config="globalConfig"></Avatar>
      <p class="my-name">{{ globalConfig.name }}</p>
      <OneWord :config="globalConfig"/>
      <Columns :config="globalConfig"/>
      <Contacts :config="globalConfig"></Contacts>
    </div>
    <div class="bottom up-float">
      <p class="moe-icp" v-if="globalConfig.moeICP.enabled">
        <a href="https://icp.gov.moe" target="_blank">萌ICP备 </a>
        <a :href='`https://icp.gov.moe/?keyword=${globalConfig.moeICP.ICPNum}`' target="_blank"> {{ globalConfig.moeICP.ICPNum }} 号</a></p>
    </div>
  </div>

</template>
<script>
import Config from "src/config"
import Background from "src/components/Background.vue";
import Avatar from "src/components/view/Avatar.vue";
import OneWord from "src/components/view/OneWord.vue";
import Columns from "src/components/view/Columns.vue";
import loadAnimation from 'src/utils/animate.js'
import Contacts from "src/components/view/Contacts.vue";

export default {
  name: 'App',
  components: {
    Contacts,
    Background,
    Avatar,
    OneWord,
    Columns
  },
  data() {
    return {
      globalConfig: Config
    }
  },
  mounted() {
    loadAnimation()
  }
}
</script>

<style scoped>

.up-float {
  opacity: 0;
}

.app-content {
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.blur {
  backdrop-filter: blur(10px);
}

.main * {
  transition: all 2s cubic-bezier(0.19, 1, 0.22, 1);
  width: fit-content;
  opacity: 0;
}

.main {
  max-width: 80%;
  /*position: absolute;*/
  /*left: 50%;*/
  /*top: 50%;*/
  transform: translate3d(0, 0, 0);
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.my-name {
  font-family: YellowPeas, serif, sans-serif;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin: 20px 0;
}

.bottom {
  position: fixed;
  bottom: 4px;
  right: 4px;
}

.moe-icp a {
  text-decoration: none;
  color: rgba(255,255,255,.6);
  font-family: MoeFonts,serif;
  font-size: 0.7rem;
}

/*.moe-icp a:first-child::before {*/
/*  font-family: icomoon,sans-serif;*/
/*  content: "\e900";*/
/*  font-size: 0.7rem;*/
/*  margin-right: 2px;*/
/*  transform: translateY(5px);*/
/*}*/

</style>
