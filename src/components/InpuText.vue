<template>
      <div>
        <label for="id" class="form-label mt-2">{{label}}</label>
        <input :type="type" class="form-control" id="id" :placeholder='placeholder'  v-model="value" @input="test" :validator="validator" min="1" max="99">
        <p :class="enableError"><sup>*</sup><small class='px-2'>{{error}}</small></p>  
        </div>
</template>
<script>
import validators from '../validators'
export default {
  name: 'InputText',
 props: ["id","placeholder","label","type","validator","submitted"],
    compontents: {

    },
    template: `
    
    `,
    data: () => ({
        value:''
    }),
    methods: {
        test(){
            this.$emit("parent",{[this.id]:this.value, error:this.error!==''?1:0})
        }
    },
    computed: {
        error(){         
            return validators[this.validator].regex.test(this.value) ? '' : validators[this.validator].error
        },
        enableError(){
            return this.error===''|| !this.submitted?'d-none':'text-danger d-block'
        }

    },
    mounted(){
        this.$emit("parent", { [this.id]: this.value, error: 1 })
    }
}
</script>
