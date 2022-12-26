let testimonials = [
  {
    image: "./image/user1.png",
    name: "Wanda",
    ratings:
      '<p><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span></p>',
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, recusandae fugit dolor aut officiis tempora expedita. Ipsa consectetur voluptatum obcaecati facilis a? Dolorum ab natus eius sint obcaecati ea repudiandae.",
    quotes: '<span><i class="fa fa-quote-left" aria-hidden="true"></i></span>',
  },
  {
    image: "./image/user2.png",
    name: "Thomas",
    ratings:
      '<p><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span></p>',
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, recusandae fugit dolor aut officiis tempora expedita. Ipsa consectetur voluptatum obcaecati facilis a? Dolorum ab natus eius sint obcaecati ea repudiandae.",
    quotes: '<span><i class="fa fa-quote-left" aria-hidden="true"></i></span>',
  },
  {
    image: "./image/user3.png",
    name: "Elvis",
    ratings:
      '<p><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span></p>',
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, recusandae fugit dolor aut officiis tempora expedita. Ipsa consectetur voluptatum obcaecati facilis a? Dolorum ab natus eius sint obcaecati ea repudiandae.",
    quotes: '<span><i class="fa fa-quote-left" aria-hidden="true"></i></span>',
  },
  {
    image: "./image/user4.png",
    name: "Mark Galloway",
    ratings:
      '<p><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span></p>',
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, recusandae fugit dolor aut officiis tempora expedita. Ipsa consectetur voluptatum obcaecati facilis a? Dolorum ab natus eius sint obcaecati ea repudiandae.",
    quotes: '<span><i class="fa fa-quote-left" aria-hidden="true"></i></span>',
  },
  {
    image: "./image/user5.png",
    name: "Henry",
    ratings:
      '<span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>',
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, recusandae fugit dolor aut officiis tempora expedita. Ipsa consectetur voluptatum obcaecati facilis a? Dolorum ab natus eius sint obcaecati ea repudiandae.",
    quotes: '<span><i class="fa fa-quote-left" aria-hidden="true"></i></span>',
  },
];
let i = 0;
let j = testimonials.length;
let testimonialContainer = document.getElementById("testimonial1_container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");
function nextTestimonial() {
//   setInterval(() => {
    i = (j + i + 1) % j;
    displayTestimonial();
//   }, 1500);
}

function prevTetsimonial() {
//   setInterval(() => {
    i = (j + i - 1) % j;
    displayTestimonial();
//   }, 1500);
}

let displayTestimonial = () => {
  testimonialContainer.innerHTML = `
    <img src=${testimonials[i].image}></img>
    <p>${testimonials[i].name}</p>
    <p>${testimonials[i].ratings}</p>
    <p>${testimonials[i].content}</p>
    <p>${testimonials[i].quotes}</p>
  `;
};
window.onload = displayTestimonial;
