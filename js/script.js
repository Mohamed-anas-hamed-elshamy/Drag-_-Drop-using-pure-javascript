let btn_add = document.querySelector("input[type = submit]");
let input_text = document.querySelector("input[type = text]");
let boxs = document.querySelectorAll(".box");
let drag = null;

btn_add.addEventListener("click", function () {
    if (input_text.value != "") {
        boxs[0].innerHTML += `<p class = item draggable = true>${input_text.value}</p>`
        input_text.value = ""
    }
    drag_item()
})

function drag_item() {
    let items = document.querySelectorAll(".item")
    items.forEach(item => {
        item.addEventListener("dragstart", function () {
            item.style.opacity = "0.5"
            drag = item
        })
        item.addEventListener("dragend", function () {
            item.style.opacity = "1"
        })
    })
    boxs.forEach(box => {
        box.addEventListener("dragover", function (e) {
            e.preventDefault()
            box.style.backgroundColor = "green"
            this.style.color = "#fff"
        })
        box.addEventListener("dragleave", function () {
            box.style.backgroundColor = "#fff"
            this.style.color = "black"
        })
        box.addEventListener("drop", function () {
            box.append(drag)
            box.style.backgroundColor = "#fff"
            this.style.color = "black"
        })
    })
}
