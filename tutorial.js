function SuperElement(type, content) {
    this.el = document.createElement(type)
    this.el.innerText = content
    document.body.append(this.el)
    this.el.addEventListener('click', () => {
        console.log(this.el)
    })
}

const h1 = SuperElement('h1', 'Hello World!')

const array = ['a', 'b', 'c']
const myElements = array.map(item => {
    return new SuperElement('p', item)
})