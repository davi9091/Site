nav = $('.sidenav');

function ToggleNav() {
  if ($('.sidenav').hasClass('closed') == true) {
    $('.sidenav').css({
      "width": "250px"
    });

    $('.openupper').css({
      'top': '25px',
      'transform': 'rotate(-45deg) translate(5px, -5px)'
    });

    $('.openlower').css({
      'top': '45px',
      'transform': 'rotate(45deg) translate(-18px, -19px)'
    });

    $('.openbtn').css({
      'left': '195px'
    });

    $('.sidenav').removeClass('closed');
  } else {
    $('.sidenav').css({
      "width": "0"
    });

    $('.openupper').css({
      'top': '10px',
      'transform': 'none'
    });

    $('.openlower').css({
      'top': '30px',
      'transform': 'none'
    });

    $('.openbtn').css({
      'left': '15px'
    });

    $('.sidenav').addClass('closed');
  }
};
