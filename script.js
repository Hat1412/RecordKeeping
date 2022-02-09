var text = document.getElementById('entry')
var list = document.getElementById("result")
l = {}

function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
}

document.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
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

function download(mime,ext) {
    today = new Date();
    date = `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`;
    let fileName = `${date}.${ext}`;

    let blob = new Blob([JSON.stringify(l, null, 4)], {
        type: `${mime}`,
        name: fileName
    });

    href = URL.createObjectURL(blob)
    a = Object.assign(document.createElement("a"),{href,style:"display:none",download:fileName})
    document.body.appendChild(a)
    a.click()
    URL.revokeObjectURL(href)
    a.remove()
}

function add(event){
    console.log(event)
}