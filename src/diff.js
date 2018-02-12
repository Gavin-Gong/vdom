class Diff {
  constructor(newTree, oldTree) {

  }
  diff() {

  }
}

export default Diff
export const diff = (newTree, oldTree) => {
  return new Diff(newTree, oldTree).diff()
}