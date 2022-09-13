
function addToList () {
    let input = document.getElementById("input").value;
    let list = document.getElementById("list");
    let listItem = document.createElement('li');
    
    listItem.innerHTML = input

    list.append(listItem);

    document.getElementById("input").value = ""
}


function plus () {
    var input1 = document.getElementById("input1").value
    var input2 = document.getElementById("input2").value

    var result = Number(input1)+ Number(input2)

    document.getElementById("result").innerHTML += `<p>Resultatet af plus stykket er: ${result}</p>`

    document.getElementById("input1").value = ""
    document.getElementById("input2").value = ""
}
function minus () {
    var input1 = document.getElementById("input1").value
    var input2 = document.getElementById("input2").value

    var result = Number(input1)- Number(input2)

    document.getElementById("result").innerHTML += `<p>Resultatet af minus stykket er: ${result}</p>`

    document.getElementById("input1").value = ""
    document.getElementById("input2").value = ""
}
function gange () {
    var input1 = document.getElementById("input1").value
    var input2 = document.getElementById("input2").value

    var result = Number(input1)* Number(input2)

    document.getElementById("result").innerHTML += `<p>Resultatet af gange stykket er: ${result}</p>`

    document.getElementById("input1").value = ""
    document.getElementById("input2").value = ""
}
function divider () {
    var input1 = document.getElementById("input1").value
    var input2 = document.getElementById("input2").value

    var result = Number(input1)/ Number(input2)

    document.getElementById("result").innerHTML += `<p>Resultatet af divider stykket er: ${result}</p>`

    document.getElementById("input1").value = ""
    document.getElementById("input2").value = ""
}

