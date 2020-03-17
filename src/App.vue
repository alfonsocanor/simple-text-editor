<template>
  <div id="app"> 
    <main>
      <Header class="flex-container"/>
      <ControlPanel class="flex-container" @validAction="updateAction"/>
      <FileZone class="flex-container" :validation="actionData"/>
    </main>

    <div class="container">
      <div class="row">
        <div class="col-6 col-md-4 col-sm-4 col-xs-1">
          <h3>Column 1</h3>
          <p>Lorem ipsum dolor..</p>
        </div>
        <div class="col-6 col-md-4 col-sm-4 col-xs-1">
          <h3>Column 2</h3>
          <p>Lorem ipsum dolor..</p>
        </div>
        <div class="col-6 col-md-4 col-sm-4 col-xs-1">
          <h3>Column 3</h3>
          <p>Lorem ipsum dolor..</p>
        </div>
      </div>
    </div>
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
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
#app {
  display: flex;
  height: 100%;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
}
main {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
</style>
