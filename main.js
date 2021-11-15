const form = document.querySelector("form")
const addToList = document.querySelector("#list")
const add = document.querySelector("#add")
const removeSome = document.querySelector("#removeSome")
const removeAll = document.querySelector("#removeAll")
const todoList  = document.querySelector("#todoList")

add.addEventListener('click', e => {
    e.preventDefault()
    const newItem = document.createElement("p")
    newItem.id = "pTag"
    newItem.innerHTML = `${addToList.value}`
    todoList.appendChild(newItem)
})

todoList.addEventListener('click', e => {
    e.target.style.textDecoration = "line-through"
    e.target.className = "line"
})

removeSome.addEventListener('click', e => {
    e.preventDefault()
    const pTag = document.querySelectorAll(".line")
    pTag.forEach(element => {
        element.remove()
    })
})

removeAll.addEventListener('click', e => {
    e.preventDefault()
    const pTag = document.querySelectorAll("#todoList p")
    console.log(pTag)
    pTag.forEach(element => {
        element.remove()
    })
})