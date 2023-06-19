import './style.scss';
import btnLBlue from './assets/arrow-blue-left.png';
import btnRBlue from './assets/arrow-blue-right.png';
import btnLGray from './assets/arrow-gray-left.png';
import btnRGray from './assets/arrow-gray-right.png';
import image1 from './assets/slider-image-1.jpg';
import image2 from './assets/slider-image-2.jpg';
import image3 from './assets/slider-image-3.jpg';
import image4 from './assets/slider-image-4.jpg';
import image5 from './assets/slider-image-5.jpg';
import image6 from './assets/slider-image-6.jpg';
import image7 from './assets/slider-image-7.jpg';
import image8 from './assets/slider-image-8.jpg';
import image9 from './assets/slider-image-9.jpg';

const imageRow1 = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
];
const imageRow2 = [...imageRow1].reverse();
$(() => {
  //   $('.button-left, .button-right').attr('src', btnLBlue);
  $('.button-left').append($('<img>').attr('src', btnLGray));

  $('.button-right').append($('<img>').attr('src', btnRBlue));
  $.each(imageRow1, (i, src) => {
    let img = $('<img>').attr('src', src);
    $('.row-top').append(img);
  });

  $.each(imageRow2, (i, src) => {
    let img = $('<img>').attr('src', src);
    $('.bottom-image-container').append(img);
  });

  let lastImgBottom = $('.bottom-image-container img:first');
  let lastImgTop = $('.row-top img:first');
  $('.button-right').on('click', () => {
    $('.row-top').append($('<img>').attr('src', lastImgTop.attr('src')));
    $('.bottom-image-container').append(
      $('<img>').attr('src', lastImgBottom.attr('src'))
    );
    lastImgTop.remove();

    lastImgBottom.remove();
    lastImgTop = $('.row-top img:first');
    lastImgBottom = $('.bottom-image-container img:first');
  });
});
