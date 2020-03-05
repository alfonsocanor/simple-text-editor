<template>
   <div id="control-panel">
        <div id="format-actions">
            <button className="format-action" type="button"><b>B</b></button>
            <button className="format-action" type="button"><i>I</i></button>
            <button className="format-action" type="button"><u>U</u></button>
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
            isEditing = false;
            wasSaved = true;
            wasCanceled = true;
        },
        methods: {
            getAction: function(event){
                if(event.target.id == 'edit'){
                    this.isEditing = true
                    this.$emit("editable", this.isEditing);
                }
                else if(event.target.id == 'save'){
                    this.isEditing = false;
                    this.$emit("saved", this.wasSaved);
                    this.$emit("editable", this.isEditing);
                }
                else if(event.target.id == 'cancel'){
                    this.isEditing = false;
                    this.$emit("canceled", this.wasCanceled);
                    this.$emit("editable", this.isEditing);
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
