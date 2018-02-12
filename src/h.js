class Element {
  constructor(tag, props, children) {
    this.VNode = {
      tag,
      props,
      children
    }
    this.ele = this.render(tag, props, children)
  }
  render(tag, props = [], children = []) {
    if (tag) {
      let ele = document.createElement(tag)
      Object.keys(props).forEach(key => {
        ele.setAttribute(key, props[key])
      })
      if (typeof children === 'string') {
        ele.textContent = children
      } else {
        children.forEach(item => {
          let childEle = this.render(item.tag, item.props, item.children)
          childEle && ele.appendChild(childEle)
        })
      }
      return ele
    }
  }
  $mount(selector) {
    document.querySelector(selector).appendChild(this.ele)
  }
}

export default Element