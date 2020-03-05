<template>
   <div id="file-zone">
        <div id="file">
            <textarea @select="selectEvent" v-model="message"/>
            <div v-bind:style=" action ? messageStyle : qwe">
                {{ message }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FileZone",
        data() {
            return {
                message: '',
                action: true,
                messageStyle: {
                    border: '1px solid red',
                    margin: '8px',
                    padding: '8px'  
                }
            }
        },
        methods:{
            selectEvent: function(e){
                alert(
                    e.target.value.substring(e.target.selectionStart, e.target.selectionEnd));
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
</style>
