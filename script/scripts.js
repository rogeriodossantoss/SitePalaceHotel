

$( document ).ready(function() {

  // Progress bar
  let containerA = document.getElementById("circleA");

  let circleA = new ProgressBar.Circle(containerA, {

    color: '##b8860b',
    strokeWidth: 8,
    duration: 1400,
    from: { color: '#b8860b'},
    to: { color: '#b8860b'},
    

    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);

      var value = Math.round(circle.value() * 20);
      circle.setText(value);

    }

  });

  let containerB = document.getElementById("circleB");

  let circleB = new ProgressBar.Circle(containerB, {

    color: '#b8860b',
    strokeWidth: 8,
    duration: 1600,
    from: { color: '#b8860b'},
    to: { color: '#b8860b'},

    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);

      var value = Math.round(circle.value() * 5);
      circle.setText(value);

    }

  });

  let containerC = document.getElementById("circleC");

  let circleC = new ProgressBar.Circle(containerC, {

    color: '#b8860b',
    strokeWidth: 8,
    duration: 1800,
    from: { color: '#b8860b'},
    to: { color: '#b8860b'},

    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);

      var value = Math.round(circle.value() * 4);
      circle.setText(value);

    }

  });

  let containerD = document.getElementById("circleD");

  let circleD = new ProgressBar.Circle(containerD, {

    color: '#b8860b',
    strokeWidth: 8,
    duration: 2000,
    from: { color: '#b8860b'},
    to: { color: '#b8860b'},

    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);

      var value = Math.round(circle.value() * 100);
      circle.setText(value);

    }

  });

  // iniciando loaders quando a usuário chegar no elemento
  let dataAreaOffset = $('#data-area').offset();
  // stop serve para a animação não carregar mais que uma vez
  let stop = 0;

  $(window).scroll(function (e) {

    let scroll = $(window).scrollTop();
 
    if(scroll > ((dataAreaOffset.top) - 500) && stop == 0) {
      circleA.animate(1.0);
      circleB.animate(1.0);
      circleC.animate(1.0);
      circleD.animate(1.0);

     
    }

  });
  //chat



  //parallax
  setTimeout(function() {

    $('#img-paisagem').parallax({imageSrc:'imagens/praia.jpg'});
    
    },250);
});



 // scroll para as seções

 let navBtn = $('.nav-item');

 let bannerSection = $('#mainSlider');
 let aboutSection = $('#about-area');
 let apartamentoSection = $('#corousel-apartamento');
 let pacotesSection = $('#pacotes-area');
 let dadosSection = $('#data-area');
 let timeSection = $('#team-area');
 let contactSection = $('#contact-area');

 let scrollTo = '';

 $(navBtn).click(function() {

   let btnId = $(this).attr('id');

   if(btnId == 'sobre-menu') {
     scrollTo = aboutSection;
   } else if(btnId == 'apartamento-menu') {
     scrollTo = apartamentoSection;
   } else if(btnId == 'pacote-menu') {
     scrollTo = pacotesSection;
   } else if(btnId == 'servico-menu') {
     scrollTo = dadosSection;
   } else if(btnId == 'time-menu') {
     scrollTo = timeSection;
   } else if(btnId == 'localizacao') {
    scrollTo = bannerSection;
  } else if(btnId == 'home-menu') {
    scrollTo = bannerSectionn;
  } else if(btnId == 'contact-menu') {
    scrollTo = contactSection;
  }
   else {
     scrollTo = bannerSection;
   }

   $([document.documentElement, document.body]).animate({
       scrollTop: $(scrollTo).offset().top - 70
   }, 1500);
 });



