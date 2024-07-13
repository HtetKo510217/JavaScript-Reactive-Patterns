const person = {
    _originalName: 'Pavel', // private property
}

Object.defineProperty(person, 'name', {
    get() {
        console.log('Getting property name')
        return this._originalName
    },
    set(value) {
        console.log(`Setting property name to value ${value}`)
        this._originalName = value
    },
})

console.log(person.name) // 'Getting property name' and 'Pavel'
person.name = 'Sergei' // Setting property name to value Sergei
