<template>
    <div id="ceshi" @click="ceshi">{{test}}</div>
</template>
<script>
    const $ = require("jquery");
    export default{
        data () {
            return {
                "test":"hello world"
            }
        },
        methods: {
            ceshi:function(){
                alert($("#ceshi").html());
            }
        }
    }
</script>
