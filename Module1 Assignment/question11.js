
const dullTag = document.querySelectorAll("p");

for (const color of dullTag)
{
    color.addEventListener("mouseenter", () =>
    {
        //color.style.color = "blue";
        color.style.fontWeight = "bold";
    });
}



for (const color of dullTag)
{
    color.addEventListener("mouseleave", () => 
    {
        color.style.fontWeight = "normal";
        color.style.color = "black";
    });
}