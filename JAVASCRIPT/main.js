/*-------------------- About section tabs --------------------*/
(() =>
{
    const aboutSection = document.querySelector(".about-section"),
    tabsContainer = document.querySelector(".about-tabs");
    tabsContainer.addEventListener("click", (event) => 
    {
        // console.log(event.target);
        if(event.target.classList.contains("tab-item") && !event.target.classList.contains("active"))
        {
            const target = event.target.getAttribute("data-target");
            tabsContainer.querySelector(".active").classList.remove("outer-shadow", "active");
            event.target.classList.add("outer-shadow", "active");

            aboutSection.querySelector(".tab-content.active").classList.remove("active");
            aboutSection.querySelector(target).classList.add("active");
        }
    });
})();   



/*-------------------- Portfolio filter and popup --------------------*/
function BodyScrollingToggle()
{
    document.body.classList.toggle("stop-scrolling");
}

(() =>
{
    const filterContainer = document.querySelector(".portfolio-filter"),
    portfolioItemsContainer = document.querySelector(".portfolio-items"),
    portfolioItems = document.querySelectorAll(".portfolio-item"),
    popup = document.querySelector(".portfolio-popup"),
    prevBtn = popup.querySelector(".pp-prev"),
    nextBtn = popup.querySelector(".pp-next"),
    closeBtn = popup.querySelector(".pp-close"),
    projectDetailsContainer = popup.querySelector(".pp-details"),
    projectDetailsBtn = popup.querySelector(".pp-project-details-btn");

    let itemIndex, slideIndex, screenshots;
    filterContainer.addEventListener("click", (event)=>
    {
        if(event.target.classList.contains("filter-item") && !event.target.classList.contains("active"))
        {
            filterContainer.querySelector(".active").classList.remove("outer-shadow", "active");
            event.target.classList.add("outer-shadow", "active");
            
            const target = event.target.getAttribute("data-target");
            portfolioItems.forEach((item) =>
            {
                if(target === item.getAttribute("data-category") || target === 'all')
                {
                    item.classList.remove("hide");
                    item.classList.add("show");
                }
                else
                {
                    item.classList.remove("show");
                    item.classList.add("hide");
                }
            })
        }
    });

    portfolioItemsContainer.addEventListener("click", (event) =>
    {
        if(event.target.closest(".portfolio-item-inner"))
        {
            const portfolioItem = event.target.closest(".portfolio-item-inner").parentElement;
            itemIndex = Array.from(portfolioItem.parentElement.children).indexOf(portfolioItem);
            screenshots = portfolioItems[itemIndex].querySelector(".portfolio-item-img img").getAttribute("data-screenshots");
            screenshots = screenshots.split(",");
            if(screenshots.length === 1)
            {
                prevBtn.style.display = "none";
                nextBtn.style.display = "none";
            }
            else
            {
                prevBtn.style.display = "block";
                nextBtn.style.display = "block";
            }
            slideIndex = 0;
            PopupToggle();
            PopupSlideshow();
        }
    });

    closeBtn.addEventListener("click", () =>
    {
        PopupToggle();
    });

    function PopupToggle()
    {
        popup.classList.toggle("open");
        BodyScrollingToggle();
    }

    function PopupSlideshow()
    {
        const imgsrc = screenshots[slideIndex];
        const popupImg = popup.querySelector(".pp-img");
        // activate loader until the popupIMG loaded
        popup.querySelector(".pp-loader").classList.add("active");
        popupImg.src = imgsrc;
        popupImg.onload = () =>
        {
            popup.querySelector(".pp-loader").classList.remove("active");
        }
        popup.querySelector(".pp-counter").innerHTML = (slideIndex + 1) + " of " + screenshots.length;
    }

    nextBtn.addEventListener("click", () =>
    {
        if(slideIndex === screenshots.length - 1)
        {
            slideIndex = 0;
        }
        else
        {
            slideIndex++;
        }
        PopupSlideshow();
    })

    prevBtn.addEventListener("click", () =>
    {
        if(slideIndex === 0)
        {
            slideIndex = screenshots.length - 1;
        }
        else
        {
            slideIndex--;
        }
        PopupSlideshow();
    })
})();   
