
// Function to Changed text color on mouse hover

const dTag = document.querySelectorAll("p");


//function ChangedMColors()
//{
/* for (let index = 0; index < dullTag.length; index++)
{

    dullTag[index].style.color = "red";
} */



//}



for (const color of dTag)
{
    color.addEventListener("mouseover", () =>
    {
        color.style.color = "red";
    });

}

// This handler will be executed only once when the cursor
// moves over the unordered list

/*
dTag.addEventListener(
    "mouseenter",
    (event) =>
    {
        // highlight the mouseenter target
        event.target.style.color = "purple";

        // reset the color after a short delay
        setTimeout(() =>
        {
            event.target.style.color = "";
        }, 500);
    },
    false,
);
*/


// This handler will be executed every time the cursor
// is moved over a different list item

/*
dTag.addEventListener(
    "mouseover",
    (event) =>
    {
        // highlight the mouseover target
        event.target.style.color = "red";

        // reset the color after a short delay
        setTimeout(() =>
        {
            event.target.style.color = "";
        }, 500);
    },
    false,
);
*/
//dTag.style.color = "red";


//dTag.addEventListener('onmouseover', ChangedMColors);