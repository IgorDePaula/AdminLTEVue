import typeValidator from '../../mixins/modal/typeValidator'
export default {
  name: 'LteModal',
  props: {
    target: {
      type: String,
      required: true
    },
    closeText: {
      type: String,
      required: true
    },
    saveText: {
      type: String
    },
    title: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true,
      validator: typeValidator
    }
  },
  render (h) {
    const globalProps = {}
    globalProps.staticClass = 'modal'
    globalProps.class = []
    globalProps.class.push('fade')

    const finalContent = [this.$slots.default]

    const close = h('span', { attrs: { ariaHidden: true } }, ['x'])
    const buttonClose = h('button', { on: { click: () => {}, class: 'close' }, attrs: { dataDismiss: 'modal', ariaLabel: this.closeText } }, [close])

    const title = h('h4', { class: 'modal-title' }, [this.title])

    const header = h('div', { class: 'modal-header' }, [buttonClose, title])
    const content = h('div', { class: 'modal-body' }, [finalContent])

    const footContent = []

    const closeFooter = h('button', {class:['btn',`btn-${this.type}`,'pull-left'], attrs:{type:'button',dataDimiss:'modal'}},[this.closeText])

    footContent.push(closeFooter)

    if(this.saveText){
      const buttonSave =  h('button', {class:['btn',this.type === 'default' ?'btn-primary' : 'btn-outline'],on:{click:()= this.$emit('modal-saved')}},[this.saveText])
      footContent.push(buttonSave)
    }

    const footer = h('div', { class: 'modal-footer' }, footContent)

    const modalGlobal = h('div', globalProps, [header, content, footContent])

    return modalGlobal
  }
}
