export default {
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