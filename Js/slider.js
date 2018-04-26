function Slider(selector, userSettings) {

    var defaults = {
        nextIcon : "fas fa-chevron-right",
        prevIcon : "fas fa-chevron-left",
        height: "500",
        width: "700",
        loop: false,
        items: 1,
        itemToSlide: 1,
        slideSpeed: 2000
    }

    //create global interval
    var slideLoop;
    var activeIndex = 0;

    var settings = extend(defaults, userSettings);

    var wrapper = document.querySelector(selector);
    wrapper.style.width = settings.width + "px";

    //Adding slider class to main Slider wrapper
    wrapper.classList.add("sliderWrapper");

    //Change height of wrapper
    wrapper.style.height = settings.height + "px";

    //create outer for div for slide
    var stageOuter = document.createElement('div');
    stageOuter.classList.add("stage-outer");

    //get all slide-items inside Slider
    var slideItems = document.querySelectorAll(selector + " > div");
    var slideCount = slideItems.length;
    for (var i = 0; i < slideItems.length; i++) {
        slideItems[i].classList.add("slide-item");
        slideItems[i].style.width = settings.width / settings.items + "px";
        
        //add number to images
        // var span = document.createElement('span');
        // span.innerText = i+1;
        // slideItems[i].appendChild(span);

        stageOuter.appendChild(slideItems[i]);
    }

    stageOuter.style.width = slideCount * settings.width + "px";
    wrapper.appendChild(stageOuter);

    // making first active
    slideItems[0].classList.add("active");

    //Right Icon
    var rightBtn = document.createElement('i');
    rightBtn.className = settings.nextIcon;
    rightBtn.classList.add("rightIcon");

    //Left icon
    var leftBtn = document.createElement('i');
    leftBtn.className = settings.prevIcon;
    leftBtn.classList.add("leftIcon");

    //Add icons to wrapper
    wrapper.appendChild(leftBtn);
    wrapper.appendChild(rightBtn);

    //Adding click events to icons
    rightBtn.addEventListener("click", function (event) {
        Slide("sag", event);
    });

    leftBtn.addEventListener("click", function (event) {
        Slide("sol", event);
    });

    function Slide(dir, e) {
        //get parent wrapper element
        var parent = e.target ? e.target.parentElement : e;

        //check if buttons clicked, then clear loop
        if(e.target){
            clearInterval(slideLoop);
        }

        //find next element
        if(dir == "sag"){
            if((activeIndex + 1) * settings.itemToSlide + settings.items <= slideCount){
                activeIndex++;
            }else{
                activeIndex = 0;
            }
        }
        else{
            if((activeIndex) * settings.itemToSlide - settings.items >= 0){
                activeIndex--;
            }else{
                activeIndex = slideCount - settings.items - 1;
            }
        }

        stageOuter.style.left =  -activeIndex * settings.width * settings.itemToSlide / settings.items + "px";
    }

    if(settings.loop){
        slideLoop = setInterval(function(){
            Slide("sag", wrapper);
        }, settings.slideSpeed)
    }

    function extend(o1, o2) {
        for (var item in o2) {
            if (o2.hasOwnProperty(item)) {
                o1[item] = o2[item];
            }
        }
        return o1;
    }

}