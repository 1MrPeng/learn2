import animateText from './src/animateText.vue'

animateText.install = function (Vue) {
    Vue.component(animateText.name,animateText)
}

export default animateText