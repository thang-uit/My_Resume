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
    localStorage.setItem("color", color);
    ChangeColor();
}

function ChangeColor() 
{ 
    alternateStyle.forEach((style) =>
    {
        if(localStorage.getItem("color") === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled", "true");
        }
    });
}

if(localStorage.getItem("color") !== null)
{
    ChangeColor();
}



/*-------------------- Light/Dark Mode --------------------*/
const dayNight = document.querySelector(".day-night");

function ChangeTheme()
{
    if(localStorage.getItem("theme") === 'dark')
    {
        dayNight.querySelector("i").classList.add("fa-sun");
        document.body.classList.add("dark");
    }
    else if(localStorage.getItem("theme") === 'light')
    {
        dayNight.querySelector("i").classList.remove("fa-sun");
        document.body.classList.remove("dark");
    }
}

dayNight.addEventListener("click", () =>
{
    if(dayNight.querySelector("i").classList.contains("fa-sun"))
    {
        localStorage.setItem("theme", "light");
    }
    else
    {
        localStorage.setItem("theme", "dark");
    }
    ChangeTheme();
});

if(localStorage.getItem("theme") !== null)
{
    ChangeTheme();
}
