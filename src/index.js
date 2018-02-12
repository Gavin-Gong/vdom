import Ele from './h'

const node = {
  tag: 'ul',
  props: {
   class: 'name' 
  },
  children: [
    { tag: 'li', props: { class: 'item' }, children: "hh" },
    { tag: 'li', props: { class: 'item' }, children: "33" },
    { tag: 'li', props: { class: 'item' }, children: "99" },
  ]
}

const app = new Ele(node.tag, node.props, node.children)
app.$mount('#app')