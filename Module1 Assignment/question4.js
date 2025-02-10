
// Function to Changed border color and width of the respective P Tag and Textarea . 
function AppendDetails()
{
    // Append text to the p Tag . 
    let pTag = document.getElementById('po');
    pTag.style.borderColor = "red";
    pTag.style.borderWidth = "2px";
    pTag.innerText = `New paragraph here : Test Word limits`;

}
