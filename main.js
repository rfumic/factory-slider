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
    $('.top-image-container').append(img);
  });

  $.each(imageRow2, (i, src) => {
    let img = $('<img>').attr('src', src);
    $('.bottom-image-container').append(img);
  });

  let lastImg = $('.bottom-image-container img:first');
  $('.button-right').on('click', () => {
    let lastWidth = lastImg.width();
    console.log(lastImg.attr('src'));
    // $('.bottom-image-container img').css(
    //   'transform',
    //   `translateX(${lastWidth}px)`
    // );
    // $('.bottom-image-container img:first').css('display', 'none');
    $('.bottom-image-container').append(
      $('<img>').attr('src', lastImg.attr('src'))
    );
    lastImg.remove();
    lastImg = $('.bottom-image-container img:first');

    // $('.row-top img:first').before(lastImg);
    // lastImg.remove();
    // lastImg = $('.row-top img:last');
  });
});
