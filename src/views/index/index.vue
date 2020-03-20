<template>
    <section class="content">
        home
        <a href="/api">click</a>
        <a href="/baidu">click</a>
        <input type="button" value="click" @click="fBtnClick" />
        <!-- <iframe src="/api"></iframe> -->
        {{jk}}
        <plane-component-i
        :dk="jk" 
        ></plane-component-i>
    </section>
</template>
<script>
import planeComponentI from "@/components/planeComponentI"
import userService from "@/services/userService"
export default {
    name:"indexIndex",
    data(){
        return {
            jk:6
        }
    },
    components:{
        planeComponentI
    },
    created(){
        userService.fTestService().then((res)=>{
            console.log(res);
        });
        // userService.fTestService2().then((res)=>{
        //     console.log(res);
        // });
        // userService.fTestService3().then((res)=>{
        //     console.log(res);
        // });
    },
    methods:{
        fBtnClick(){
            this.jk="10"
            console.log(9)
        }
    }    
}
</script>
<style lang="scss" scoped>

</style>