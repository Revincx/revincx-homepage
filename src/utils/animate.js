export default function () {
    let contents = document.getElementById("main").children
    let extra = document.getElementsByClassName("up-float")
    let items = [...contents]
    items.push(...extra)

    for (let i = 0; i < items.length; i++) {
        setTimeout(() => {
            console.log(items[i]);
            items[i].classList.add("up-floated")
        }, i * 200)
    }
}