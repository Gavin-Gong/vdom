import Ele from './h'
import { diff } from './diff'
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

const node2 = {
  tag: 'div',
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


const oldTree = app.VNode
const newTree = new Ele(node2.tag, node2.props, node2.children).VNode

const diffTree = diff(newTree, oldTree)