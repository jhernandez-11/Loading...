const pageLoading = document.querySelectorAll(".page-loading h1")

anime({
    targets: pageLoading, 
    translateX: anime.stagger(10, {grid: [14, 5], from: 'center', axis: 'x'}),
    translateY: anime.stagger(10, {grid: [14, 5], from: 'center', axis: 'y'}),
    delay: anime.stagger(200, {grid: [14, 5], from: 'center'}),
    color: '#23C3ED',
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine',
    duration: 1200
})

anime({
    targets: 'body',
    keyframes: [
      {background: '#23C3ED'},
      {background: '#262626'},
      {background: '#187FBF'},
      {background: '#159FD9'},
      {background: '#F2F2F3'}
    ],
    duration: 12000,
    easing: 'easeOutElastic(1, .8)',
    loop: true
  });