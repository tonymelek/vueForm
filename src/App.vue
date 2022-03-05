<template>
    <div class="container">
        <div class="card p-3 my-3 max-width-500">
        <h2>Registration Form</h2>
        <inputText id="firstName" type="text"  placeholder="John"  label="First name" @parent="print" validator="name" :submitted="submitted"/>
        <inputText id="lastName" type="text" placeholder="Doe"  label="Last name" @parent="print" validator="name" :submitted="submitted"/>
        <inputText id="password" type="password" placeholder=""  label="Password" @parent="print" validator="password" :submitted="submitted"/>
        <inputText id="age" type="number" placeholder="100"  label="Age" @parent="print" validator="age" :submitted="submitted"/>
        <button class="btn btn-secondary my-4" @click="submit">Submit</button>
        </div>
        <p>{{result}}</p>
    </div>  
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import InputText from './components/InpuText.vue'

export default {
  name: 'App',
  components: {
    InputText
  },
      data:()=>({
    submitted:false,
    data:{error:{}},
    }),
    computed:{
errorSum(){
    return Object.keys(this.data.error).reduce((a,b)=>this.data.error[b]+a,0)
},
result(){
    if(this.submitted && !!this.errorSum) {   
      return `Please, fix the ${this.errorSum} error(s) and re-submit`;
    }
    return ''
}
    },
    methods:{
        print(payload){
            let formItem=''
            for(let key in payload){
                if(key!=='error') formItem=key
                break;
            }
            this.data[formItem]=payload[formItem];
            this.data.error[formItem] = payload.error;
        },
        submit(){
            this.submitted = true;  
       
        }

    },
}
</script>

<style>

</style>
