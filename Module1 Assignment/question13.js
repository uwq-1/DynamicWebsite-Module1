
let uTag = document.getElementById("demo");
let fruits, index;

function displayArray()
{

    // using an array and display the last element in the array 
    fruits = ["apple", "banana", "orange"];
    console.log(`Last Element in the array : ${fruits[2]}`); // Using string templation 
    /* for (index = 0; index < fruits.length; index++)
    {
        // Display all the Elements in the array.
        //uTag.innerHTML += "</br>" + fruits[index]
        uTag.innerHTML += "</br>" + fruits[2]

    } */

    // display the last element in the array 
    return uTag.innerHTML = `Last Element in the array : ${fruits[2]} <br>`;

}
