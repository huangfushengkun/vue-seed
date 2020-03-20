<template>
  <div ref="echarts" class="plane-I">{{dk}}</div>    
</template>
<script>
import echarts from "echarts";
export default {
    name:"plane-I",
    methods:{
      add:function(){
        console.log(5)
             let myChart=  echarts.init(this.$refs.echarts)
               myChart.setOption({
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
});
      }
    },
    props:['dk'],
    mounted(){
       console.log(this.dk);
    },
    watch:{
      dk:{
        handler(){
          this.add();
        },
        deep:true
      }
    }
}
</script>
<style lang="scss" scoped>

</style>