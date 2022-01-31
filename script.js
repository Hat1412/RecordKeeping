var text = document.getElementById('entry')
var list = document.getElementById("result")
l = {}

function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
}

document.addEventListener("keydown", function (event) {
    if (event.code === "Enter") {
        list.innerHTML = ""
        t = text.value.toLowerCase();
        if (t in l) {
            l[t] += 1
        }
        else {
            l[t] = 1
        }
        text.value = ""
        for (i in l) {
            list.innerHTML += `${capitalize(i)} : ${l[i]}`
            list.innerHTML += `</br>`
        }

    }
});