
$(document).ready(function(){
$('.responsive').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    autoplay:false,
    slidesToScroll: 1,
    arrows:true,
    pauseOnHover: false,
    prevArrow:'.arrow_prev',
    nextArrow:'.arrow_next',
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  // ========= Blog Sm ========
  $('.responsive-sm').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    autoplay:false,
    slidesToScroll: 1,
    arrows:true,
    pauseOnHover: false,
    prevArrow:'.arrow_prev',
    nextArrow:'.arrow_next',
    
  });
  // ========= Testimonials ========
  $('.t_slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    autoplay:false,
    slidesToScroll: 1,
    arrows:true,
    pauseOnHover: false,
    prevArrow:'.arrow_prev',
    nextArrow:'.arrow_next',
    
  });
  // Counter up
  $('.counter').counterUp({
		delay: 50,
		time: 3000,
	});










})
// Price Range Property.html md
$( function() {
  $( "#slider-range-md" ).slider({
    range: true,
    min: 0,
    max: 500,
    values: [ 75, 300 ],
    slide: function( event, ui ) {
      $( "#amount-md" ).val( "Min"+"$" + ui.values[ 0 ] +"-Max"+ "$" + ui.values[ 1 ] );
    }
  });
  $( "#amount-md" ).val( "Min"+"$" + $( "#slider-range-md" ).slider( "values", 0 ) +"-Max"+ "$" + $( "#slider-range-md" ).slider( "values", 1 ) );
} );
// Price Range Property.html
$( function() {
  $( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 500,
    values: [ 75, 300 ],
    slide: function( event, ui ) {
      $( "#amount" ).val( "Min"+"$" + ui.values[ 0 ] +"-Max"+ "$" + ui.values[ 1 ] );
    }
  });
  $( "#amount" ).val( "Min"+"$" + $( "#slider-range" ).slider( "values", 0 ) +"-Max"+ "$" + $( "#slider-range" ).slider( "values", 1 ) );
} );

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// const filterBtnIcons = document.querySelectorAll('.fa-sliders');
const filterBtnIcons = document.querySelector('.filter-icon');
const filterPart = document.querySelector('.property-filter-part-md');

console.log(filterBtnIcons)
 filterBtnIcons.addEventListener ("click" , () => {
filterPart.classList.toggle("property-filter-part-md-block")
 } );
          