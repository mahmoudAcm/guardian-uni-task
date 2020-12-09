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

slidesContainer.css({ width: 600 * (testimonials.length + 1 )+ 'px'});

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

const step = 640;
let count = 0;

const moveSlide = () => {
    container[0].scrollTo({
        left: sliderItems[count].offsetLeft - 375,
        behavior: 'smooth'
    })

    sliderItems.forEach((element, index) => {
        if(index === count) {
            element.style.cssText = 'transform: scale(1.1);'; 
            element.classList.add('shadow');
        }
        else  {
            element.style.cssText = 'transform: scale(1)'; 
            element.classList.remove('shadow');
        } 
    });
}

moveSlide();

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
