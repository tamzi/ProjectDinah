!function()
{
    "use strict";function e()

    {
        .classList.remove("disabled"),n.classList.remove("disabled"),i.scrollLeft<=0&&l.classList.add("disabled"),i.scrollLeft+i.clientWidth+5>=i.scrollWidth&&n.classList.add("disabled")
    }
 function t(e)
    {
        i.scrollLeft+=e
    }
    var n=document.querySelector(".scrollindicator.scrollindicator--right"),l=document.querySelector(".scrollindicator.scrollindicator--left"),i=document.querySelector(".docs-navigation"),d=40;i.addEventListener("scroll",e),e(),n.addEventListener("click",t.bind(null,d)),n.addEventListener("tap",t.bind(null,d)),l.addEventListener("click",t.bind(null,-d)),l.addEventListener("tap",t.bind(null,-d))
}
(),

    function()
{"use strict";
               var e=document.querySelector(".download-button-container");
               e&&e.addEventListener("click",function()
                                     {
                   ga("send",{hitType:"event",eventCategory:"click",eventAction:"mdl-download"})})}

();
