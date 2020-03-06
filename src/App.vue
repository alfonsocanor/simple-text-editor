<template>
  <div id="app">
    <Header/>
    <main>
      <ControlPanel @validAction="updateAction" @validStyle="udpateStyle"/>
      <FileZone :validation="actionData" :style="styleData"/>
    </main>
  </div>
</template>

<script>
import ControlPanel from './components/ControlPanel'
import FileZone from './components/FileZone'
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Header,
    ControlPanel,
    FileZone
  },
  data: function(){
    return {
      actionData: "",
      styleData: ""
    };
  },
  methods: {
    updateAction(action){
      alert('The variable: ' +  action);
      this.actionData = action;
    },
    updateStyle(style){
      this.styleData = style;
    }
  }
}
</script>

<style>
#app {
  display: flex;
  height: 100%;
  flex-direction: column;
}
main {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
</style>
