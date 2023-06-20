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
  // const hoverButton = (selector, src) => {
  //   $(`${selector} img`).fadeOut(100, function () {
  //     $(this).attr('src', src).fadeIn(100);
  //   });
  // };
  $('.button-left').append($('<img>').attr('src', btnLGray));
  $('.button-left').hover(
    () => {
      $('.button-left img').fadeOut(100, function () {
        $(this).attr('src', btnLBlue).fadeIn(100);
      });
    },
    () => {
      $('.button-left img').fadeOut(100, function () {
        $(this).attr('src', btnLGray).fadeIn(100);
      });
    }
  );
  // $('.button-left').hover(
  //   hoverButton('.button-left', btnLBlue),
  //   hoverButton('.botton-left', btnLGray)
  // );

  $('.button-right').append($('<img>').attr('src', btnRGray));
  $('.button-right').hover(
    () => {
      $('.button-right img').fadeOut(100, function () {
        $(this).attr('src', btnRBlue).fadeIn(100);
      });
    },
    () => {
      $('.button-right img').fadeOut(100, function () {
        $(this).attr('src', btnRGray).fadeIn(100);
      });
    }
  );

  $.each(imageRow1, (i, src) => {
    let img = $('<img>').attr('src', src);
    $('.row-top').append(img);
  });

  $.each(imageRow2, (i, src) => {
    let img = $('<img>').attr('src', src);
    $('.bottom-image-container').append(img);
  });

  $('.button-right').on('click', () => {
    let lastImgBottom = $('.bottom-image-container img:first');
    let lastImgTop = $('.row-top img:first');
    lastImgTop.css('width', lastImgTop.width());
    lastImgBottom.css('width', lastImgBottom.width());

    setTimeout(() => {
      lastImgTop.addClass('shrink');
      lastImgBottom.addClass('shrink');
    }, 50);

    setTimeout(() => {
      $('.bottom-image-container').append(
        $('<img>').attr('src', lastImgBottom.attr('src'))
      );
      lastImgBottom.remove();

      $('.row-top').append($('<img>').attr('src', lastImgTop.attr('src')));
      lastImgTop.remove();
    }, 200);
  });

  $('.button-left').on('click', () => {
    let firstImageTop = $('.row-top img:last');
    let firstImageBottom = $('.bottom-image-container img:last');
    const bottomWidth = firstImageBottom.width();
    const topWidth = firstImageTop.width();

    setTimeout(() => {
      $('.bottom-image-container').prepend(
        $('<img>').attr('src', firstImageBottom.attr('src'))
      );
      $('.bottom-image-container img:first').css({ width: 0, marginRight: 0 });

      $('.row-top').prepend($('<img>').attr('src', firstImageTop.attr('src')));
      $('.row-top img:first').css({
        width: 0,
        marginRight: 0,
      });
    }, 50);

    setTimeout(() => {
      $('.bottom-image-container img:first').css({
        width: bottomWidth,
        marginRight: '10px',
      });
      firstImageBottom.remove();
      $('.row-top img:first').css({
        width: topWidth,
        marginRight: '10px',
      });
      firstImageTop.remove();
    }, 150);
  });
});
