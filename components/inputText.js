const validators = {
    name: {
        regex: new RegExp(/^([A-Z]){1}([a-z]){2,20}$/),
        error: "Names should start with upper case and followed by lowercase letters, with no leading or lagging space"
    },
    email: {
        regex: new RegExp(/^(\w||-||\.){1,20}@(\w||-){1,20}\.([a-z]){2,8}(\.){0,1}([a-z]){0,2}$/),
        error: "Please, enter a valid email"
    },
    mobile: {
        regex: new RegExp(/^04([0-9]){8}$/),
        error: "Mobile numbers should be 10 digits starting with 04 without any dashes or spaces"
    },
    age:{
        regex: new RegExp(/^[1-9]{1}[0-9]{0,1}$/),
        error:'Age should be more than 0 and less than 99'
    },
    password:{
        regex: new RegExp(/(?=.{8,20})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()])/),
        error: 'password should be 8-20 characters, having at least one uppercase, one lowecase, one number and a special character'
    }
}
export default {
    props: ["id","placeholder","label","type","validator","submitted"],
    compontents: {

    },
    template: `
        <label for="id" class="form-label mt-2">{{label}}</label>
        <input :type="type" class="form-control" id="id" :placeholder='placeholder'  v-model="value" @input="test" :validator="validator" min="1" max="99">
        <p :class="enableError"><sup>*</sup><small class='px-2'>{{error}}</small></p>
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