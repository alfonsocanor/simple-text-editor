<template>
   <div id="file-zone">
        <div id="file">
            <div ref="myId" :contenteditable="action" v-bind:style=" action ? messageStyle : ''">
                {{ message }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FileZone",
        props: {
            validation: {
                type: String
            }
        },
        data() {
            return {
                /* start values binded from ControlPanel */
                validations: [],
                isActive: true,
                /* end values binded from ControlPanel */
                message: '',
                messageBeforeEdit: '', //Keep the text before Edit if the user uses Cancel action
                action: false,
                messageStyle: {
                    border: '1px solid grey',
                    padding: '8px',
                    height: '100% !important'
                }
            }
        },
        methods:{
            saveMessageBeforeEdit: function(){
                this.messageBeforeEdit = this.$refs.myId.innerText;
            }
        },
        watch: {
            validation: function(){
                this.validations = this.validation;
                if(this.validations[0] && !this.validations[1] && !this.validations[2]){
                    this.action = true;
                    this.saveMessageBeforeEdit();
                }
                if(this.validations[1] && !this.validations[2] && !this.validations[0]){
                    this.action = false;
                    this.message = this.messageBeforeEdit;
                }
                if(this.validations[2] && !this.validations[1] && !this.validations[0]){                    
                    this.$refs.myId.innerText = this.messageBeforeEdit;
                    this.action = false;
                }
            }
        }    
    };
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
    #file-zone {
        background-color:#f1f0f0;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 5px;
    }

    #file {
        padding: 16px;
        width: 600px;
        flex-grow: 1;
        background-color: #fff;
        border: 1px solid #e4dede;
        font-family: 'Roboto', sans-serif;
    }
</style>
