
// Display Message . 


const performDropdownAction = function ()
{
    let current = this.value || document.getElementById('parishid').value;
    if (current == 1)
    {
        console.log("Selection : St. Catherine");

    } else if (current == 2)
    {
        console.log("Selection : Kingston");
    } else if (current == 3)
    {
        console.log("Selection : Calarendon");
    }
}

window.onload = performDropdownAction;

document.getElementById('parishid').addEventListener('change', performDropdownAction);

