let x = 5, y = 10;

var xTag = document.getElementById('demo');

function Add()
{
    return x += y;
}


//pTag.innerHTML += `${x} += ${y} : ${x += y} <br>`;
xTag.innerHTML = Add();
