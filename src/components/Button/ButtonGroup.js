export default {
    name: "LteButtonGroup",
    props:{
        vertical:{
            type:Boolean
        }
    },
    render(h){
        let props = {};
        props.class = 'btn-group';
        let content = [this.$slots.default];
        if(this.vertical){
            props.class = 'btn-group-vertical';
        }
        return h('div', props, content)
    }
}
