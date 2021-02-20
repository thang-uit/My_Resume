/*-------------------- Toggle style switcher --------------------*/
(() =>
{
    const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");

    styleSwitcherToggler.addEventListener("click", () =>
    {
        document.querySelector(".style-switcher").classList.toggle("open");
    });

    window.addEventListener("scroll", () =>
    {
        if(document.querySelector(".style-switcher").classList.contains("open"))
        {
            document.querySelector(".style-switcher").classList.remove("open");
        }
    });
})();



/*-------------------- Theme Colors --------------------*/
const alternateStyle = document.querySelectorAll(".alternate-style");

function SetActiveStyle(color)
{   
    alternateStyle.forEach((style) =>
    {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled", "true");
        }
    });
}



/*-------------------- Theme Light/Dark Mode --------------------*/




