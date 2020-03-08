<template>
  <div id="app">
    <Header/>
    <main>
      <ControlPanel @validAction="updateAction"/>
      <FileZone :validation="actionData"/>
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
      actionData: ""
    };
  },
  methods: {
    updateAction(action){
      this.actionData = action;
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
