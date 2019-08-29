import phbutton from './src/phbutton.vue'

phbutton.install = function (Vue) {
    Vue.component(phbutton.name,phbutton)
}

export default phbutton