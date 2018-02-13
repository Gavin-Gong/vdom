import { REPLACE } from './constant'

class Diff {
  constructor(newTree, oldTree) {
    this.newTree = newTree
    this.oldTree = oldTree
  }
  diff() {
    console.log(this.newTree, this.oldTree)
    let { newTree, oldTree } = this
    let index = 0
    let patches = {}
    
    /* diff tagName*/
    if (newTree.tag !== oldTree.tag) {
      pactches[ ++index ] = {
          type: REPLACE,
          node: document.createElement() 
        }
      }
    
    /* diff props */

    /* diff children */
    
  }
}

export default Diff
export const diff = (newTree, oldTree) => {
  return new Diff(newTree, oldTree).diff()
}