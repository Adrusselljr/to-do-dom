const form = document.querySelector("form")
const list = document.querySelector("#list")
const remove = document.querySelector("#remove")
const removeAll = document.querySelector("#removeAll")
const todoList  = document.querySelector("#todoList")

form.addEventListener('submit', e => {
    e.preventDefault()
    const newItem = document.createElement("p")
    newItem.id = "pTag"
    newItem.innerHTML = `${list.value}`
    todoList.appendChild(newItem)
})

todoList.addEventListener('click', e => {
    e.target.style.textDecoration = "line-through"
})