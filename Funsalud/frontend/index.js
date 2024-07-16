const initSlider =() => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollBar = document.querySelector(".container-carousel .slider-scrollbar");
    const ScrollBarThumb = sliderScrollBar.querySelector(".scrollbar-thumb");
    const maxScorllLeft = imageList.scrollWidth - imageList.clientWidth;

    ScrollBarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumPosition = ScrollBarThumb.offsetLeft;

        const handleMouseMove = (e) =>{
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumPosition + deltaX;

            const maxThumbPosition = sliderScrollBar.getBoundingClientRect().width - ScrollBarThumb.offsetWidth;

            const boudedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boudedPosition / maxThumbPosition) * maxScorllLeft;

            ScrollBarThumb.style.left = `${boudedPosition}px`;
            imageList.scrollLeft =  scrollPosition;
        }

        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    })

    slideButtons.forEach(button => {
        button.addEventListener("click", () =>{
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({left: scrollAmount, behavior: "smooth"});
        });
    });

    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
        slideButtons[1].style.display = imageList.scrollLeft >=  maxScorllLeft ? "none" : "block";
    }

    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumPosition = (scrollPosition / maxScorllLeft) * (sliderScrollBar .clientWidth - ScrollBarThumb.offsetWidth)
        ScrollBarThumb.style.left = `${thumPosition}px`;
    }



    imageList.addEventListener("scroll", () => {
        handleSlideButtons();
        updateScrollThumbPosition();
    })

}

window.addEventListener("load", initSlider);