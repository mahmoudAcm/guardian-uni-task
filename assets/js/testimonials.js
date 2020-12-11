console.log('testimonials');

const slide = 
{
    text: "\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, eius deleniti! Omnis, quaerat rem? Ad vero quae delectus quod maiores magnam sit placeat non quaerat temporibus. Ipsum iusto maxime tempora.\"",
    username: 'Elisa Joe',
    title: 'Ceo Simalakama'
}

const testimonials = [slide, slide, slide];
const slidesContainer = $("#slides");
const container = $(".testimonials .main-content");
const leftBtn = $(".left-side");
const rightBtn = $(".right-side");

testimonials.forEach(slide => {
    slidesContainer.append(`
        <div class="card">
            <div class="card-body">
              <p>${slide.text}</p>
              <h4>${slide.username}</h4>
              <span>${slide.title}</span>
            </div>
        </div>
    `)
});

const sliderItems = document.querySelectorAll("#slides .card");

let count = 1;

const moveSlide = () => {
    const cardWidth = rightBtn.offset().left - leftBtn.offset().left ;

    //resize the slider container to fit the new cards sizes
    slidesContainer.css({ width: (sliderItems.length + 2) * cardWidth });

    //resize the card programaticly 
    sliderItems.forEach((element) => {
        element.style.width = cardWidth - 30 + 'px';
    });

    //move the scroll to the next card offset
    container[0].scrollTo({
        left: sliderItems[count].offsetLeft - leftBtn.offset().left - 40,
        behavior: 'smooth'
    });

    console.log(container[0].offsetLeft);

    sliderItems.forEach((element, index) => {
        if(index === count) {
            element.style.transform = 'scale(1.1)';
            element.classList.add('shadow');
        }
        else  {
            element.style.transform = 'scale(1)'; 
            element.classList.remove('shadow');
        } 
    });
}

moveSlide();
$(window).on('resize load', () => {
    moveSlide();
});

rightBtn.on('click', () => {
    count = Math.min(testimonials.length - 1, count + 1);
    
    moveSlide();
    console.log('right ' + count);
});

leftBtn.on('click', () => {
    count = Math.max(count - 1, 0);
    
    moveSlide();
    console.log('left ' + count);
});

console.log(leftBtn.offset().left);