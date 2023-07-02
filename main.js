import './style.scss';
import btnLBlue from './assets/arrow-blue-left.png';
import btnRBlue from './assets/arrow-blue-right.png';
import btnLGray from './assets/arrow-gray-left.png';
import btnRGray from './assets/arrow-gray-right.png';

$(() => {
  // loading button images
  const hoverButton = (selector, src, opacity = '100%') => {
    // $(`${selector} img`).fadeOut(500, function () {
    // $(this).attr('src', src).fadeIn(500);
    // });
    $(`${selector} img`)
      .animate({ opacity: opacity }, 200)
      .attr('src', src)
      .animate({ opacity: '100%' }, 200);
  };

  $('.button-left').append($('<img>').attr('src', btnLBlue));
  $('.button-left').hover(
    () => {
      hoverButton('.button-left', btnLGray, '75%');
    },
    () => {
      hoverButton('.button-left', btnLBlue);
    }
  );

  $('.button-right').append($('<img>').attr('src', btnRBlue));
  $('.button-right').hover(
    () => {
      hoverButton('.button-right', btnRGray, '75%');
    },
    () => {
      hoverButton('.button-right', btnRBlue);
    }
  );

  let sliderActive = false;

  // slide right
  $('.button-right').on('click', () => {
    if (!sliderActive) {
      sliderActive = true;
      let lastImageBottom = $('.bottom-image-container img:first');
      let lastImageTop = $('.row-top img:first');
      lastImageTop.css('width', lastImageTop.width());
      lastImageBottom.css('width', lastImageBottom.width());

      setTimeout(() => {
        lastImageTop.addClass('shrink');
        lastImageBottom.addClass('shrink');
      }, 50);

      setTimeout(() => {
        $('.bottom-image-container').append(
          $('<img>').attr('src', lastImageBottom.attr('src'))
        );
        lastImageBottom.remove();

        $('.row-top').append($('<img>').attr('src', lastImageTop.attr('src')));
        lastImageTop.remove();
        sliderActive = false;
      }, 200);
    }
  });

  // slide left
  $('.button-left').on('click', () => {
    if (!sliderActive) {
      sliderActive = true;
      let firstImageTop = $('.row-top img:last');
      let firstImageBottom = $('.bottom-image-container img:last');
      const bottomWidth = firstImageBottom.width();
      const topWidth = firstImageTop.width();

      setTimeout(() => {
        $('.bottom-image-container').prepend(
          $('<img>').attr('src', firstImageBottom.attr('src'))
        );
        $('.bottom-image-container img:first').css({
          width: 0,
          opacity: '0%',
        });

        $('.row-top').prepend(
          $('<img>').attr('src', firstImageTop.attr('src'))
        );
        $('.row-top img:first').css({
          width: 0,
          opacity: '0%',
        });
      }, 50);

      setTimeout(() => {
        $('.bottom-image-container img:first')
          .css({
            width: bottomWidth,
            // opacity: 100,
          })
          .animate(
            {
              opacity: '100%',
            },
            1000
          );
        firstImageBottom.remove();
        $('.row-top img:first')
          .css({
            width: topWidth,
          })
          .animate(
            {
              opacity: '100%',
            },
            1000
          );
        firstImageTop.remove();
        sliderActive = false;
      }, 150);
    }
  });
});
