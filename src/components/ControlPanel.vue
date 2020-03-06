<template>
   <div id="control-panel">
        <div id="format-actions">
            <button id="bold" className="format-action" type="button" v-on:click="getStyle"><b>B</b></button>
            <button id="cursive" className="format-action" type="button" v-on:click="getStyle"><i>I</i></button>
            <button id="underline" className="format-action" type="button" v-on:click="getStyle"><u>U</u></button>
            <button id="edit" className="format-action" type="button" v-on:click="getAction"><u>Edit</u></button>
            <button id="save" className="format-action" type="button" v-on:click="getAction"><u>Save</u></button>
            <button id="cancel" className="format-action" type="button" v-on:click="getAction"><u>Cancel</u></button>
        </div>
    </div>
</template>

<script> 
export default {
        name: "ControlPanel",
        data() {
            /*== start Style array declaration ==*/
            // 0. Bold | 1. Cursive | 2. Underline
            style = [false, false, false];
            /*==  end Style array declaration  ==*/

            actions = [];
        },
        methods: {
            getStyle: function(event){
                if(event.currentTarget.id == 'bold'){
                    this.style = this.style[0] ? false : true;
                    this.$emit("validStyle", this.style);
                }
                else if(event.currentTarget.id == 'cursive'){
                    this.style = this.style[1] ? false : true;
                    this.$emit("validStyle", this.style);
                }
                else if(event.currentTarget.id == 'cursive'){
                    this.style = this.style[2] ? false : true;
                    this.$emit("validStyle", this.style);
                }
            },
            getAction: function(event){
                if(event.currentTarget.id == 'edit'){
                    this.actions = [true, false, false];
                    this.$emit("validAction", this.actions);
                }
                else if(event.currentTarget.id == 'save'){
                    this.actions = [false, true, false];
                    this.$emit("validAction", this.actions);
                }
                else if(event.currentTarget.id == 'cancel'){
                    this.actions = [false, false, true];
                    this.$emit("validAction", this.actions);
                }
            }
        }
    };
</script>
<style scoped>
    #control-panel {
        background-color: #fff;
        height: 25px;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding-top: 5px;
    }
    #format-actions {
        width: 300px;
        margin-right: 400px;
    }
</style>
