
// Function to Changed Image source. 

let pTag = document.getElementById('image');
const html = '<p>First Image:</p> <img src="https://images.pexels.com/photos/8971740/pexels-photo-8971740.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Test" width="150" height="150"/> <p>Second Image: </p> <img src="https://images.pexels.com/photos/8971740/pexels-photo-8971740.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Test" width="150" height="150"/>';

pTag.onload = AppendImage();

function AppendImage()
{
    pTag.src = 'mountain.jpg';
    console.log("Image changed on load event!");

}

//window.onload = AppendImage;
//window.onload = AppendImage;
//document.getElementById('image').addEventListener('change', AppendImage);
