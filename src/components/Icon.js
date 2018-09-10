export default {
    name: "LteIcon",
    props:{
        type:{
            type:String,
            required: true
        }
    },
    render(h){
        return h('i', {class:this.type}, [])
    }
}
