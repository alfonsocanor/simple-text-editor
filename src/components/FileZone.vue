<template>
   <div id="file-zone">
        <div id="file">
            <textarea @select="selectEvent" v-model="message" @keypress="someHandler"/>
            <div v-bind:style=" action ? messageStyle : qwe" v-html="message2" v-bind:class="{ active: isActive }">
                {{ message2 }}
            </div>
            <div >
                <span class="bold">test</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FileZone",
        props: {
            validation: {
                type: Array
            },
            style: {
                type: Array
            }
        },
        data() {
            return {
                /* start values binded from ControlPanel */
                validations: [],
                isActive: true,
                styles: [],
                /* end values binded from ControlPanel */
                message: '',
                message2: '',
                messageBeforeEdit: '', //Keep the text before Edit if the user uses Cancel action
                action: false,
                messageStyle: {
                    border: '1px solid red',
                    margin: '8px',
                    padding: '8px'  
                }
            }
        },
        methods:{
            someHandler: function(e){
                var helper = '';
                var helper2 = '';
                var totalHelper = '';
                //alert('message out: ' + this.message);
                if(this.message != ''){
                    if(this.message.split('').length == 1){
                        //alert('message in if: ' + this.message);
                        this.message2 = this.message2 + '<span class="bold">' + e.key + '</span>';
                    }
                    else{
                        /*alert('message in else: ' + this.message 
                            +' message2 in else: ' + this.message2
                            +' totalHelper in else: ' + totalHelper
                            +' splitted: ' + this.message.split(''));*/
                        
                        this.message2 = this.message.split('').reduce((total, letter)=>{
                            totalHelper = totalHelper == '' ? '<span class="bold">' + total + '</span>': totalHelper;
                            //alert('reduce letter: ' + letter + ' total: ' + total + 'tHelper: ' + totalHelper);
                            totalHelper = totalHelper + '<span class="bold">' + letter + '</span>';
                            return total + letter;
                        });
                        this.message2 = totalHelper + '<span class="bold">' + e.key + '</span>';
                    }
                }
                else{
                    //alert(e.key + ' message else: ' + this.message);
                    this.message2 = '<span class="bold">' + e.key + '</span>';
                }
            },
            selectEvent: function(e){
                alert(
                    e.target.value.substring(
                        e.target.selectionStart, e.target.selectionEnd
                ));
            },
            getBold: function(text, apply){
                /*if(apply){
                    return '<div class="bold">' + text + '</div>'
                }
                return */
            }
        },
        watch: {
            validation: function(){
                alert(this.validation);
                this.validations = this.validation;
                if(this.validations[0] && !this.validations[1] && !this.validations[2]){
                    this.action = true;
                    this.messageBeforeEdit = this.message;
                }
                if(this.validations[1] && !this.validations[2] && !this.validations[0]){
                    this.action = false;
                }
                if(this.validations[2] && !this.validations[1] && !this.validations[0]){
                    this.action = false;
                    this.message = this.messageBeforeEdit;
                }
            },

            style: function(){
                if(this.style[0]){

                }
            }
        }
        
    };


</script>

<style scoped>
    #file-zone {
        background-color:#f1f0f0;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 5px;
    }

    #file {
        width: 600px;
        flex-grow: 1;
        background-color: #fff;
        border: 1px solid #e4dede;
    }

    .bold {
        color: green !important;
    }
</style>
