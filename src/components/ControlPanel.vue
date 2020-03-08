<template>
   <div id="control-panel">
        <div id="format-actions">
            <div class="spaces">
                <button id="bold"  className="format-action" type="button" v-on:click="getStyle"><b>B</b></button>
                <button id="cursive" className="format-action" type="button" v-on:click="getStyle"><i>I</i></button>
                <button id="underline" className="format-action" type="button" v-on:click="getStyle"><u>U</u></button>
                <select v-model="fontSize" v-on:change="getStyle">
                        <option value="" disabled selected>font size</option>
                        <option v-for="item in items" v-bind:key="item.value" >
                            {{ item.message }}
                        </option>
                </select>
            </div>
            <div class="spaces">
                <button id="edit" class="testName" className="format-action" type="button" v-on:click="getAction"><u>Edit</u></button>
                <button id="save" className="format-action" type="button" v-on:click="getAction"><u>Save</u></button>
                <button id="cancel" className="format-action" type="button" v-on:click="getAction"><u>Cancel</u></button>
            </div>
        </div>
    </div>
</template>

<script> 
    export default {
        name: "ControlPanel",
        data() {
            return {
                fontSize : '',
                actions : [],
                items : [
                    { value: 0, message: 'select'},
                    { value: 1, message: 'x-small'},
                    { value: 2, message: 'small'},
                    { value: 3, message: 'medium'},
                    { value: 4, message: 'large'},
                    { value: 5, message: 'x-large'},
                    { value: 6, message: 'xx-large' },
                    { value: 7, message: 'xxx-large'}
                ],
                fontSizeDic : {
                    'x-small': 1,
                    'small': 2,
                    'medium': 3,
                    'large': 4,
                    'x-large': 5,
                    'xx-large': 6,
                    'xxx-large': 7,
                }
            }
        },
        methods: {
            getStyle (event){
                document.execCommand('fontSize', false, this.fontSizeDic[this.fontSize]);

                if(event.currentTarget.id === 'bold'){
                    document.execCommand('bold');
                }
                else if(event.currentTarget.id === 'cursive'){
                    document.execCommand('italic');
                }
                else if(event.currentTarget.id === 'underline'){
                    document.execCommand('underline');
                }
                this.fontSize = '';
            },
            getAction (event){
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
        height: 80px;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding-top: 5px;
    }
    #format-actions {
        width: 100%;   
        text-align:center;
    }
    .spaces{
        margin: 10px 0;
        position: relative;
    }
</style>
