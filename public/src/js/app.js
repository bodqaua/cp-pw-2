const title = document.querySelector('.title');
const courseFeatureElements = document.querySelectorAll('.course-feature');
const button = document.querySelector('button');

if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/sw.js')
}

function animate() {
  title.classList.remove('animate-in');

  for (let i = 0; i < courseFeatureElements.length; i++) {
    courseFeatureElements[i].classList.remove('animate-in');
  }

  button.classList.remove('animate-in');

  setTimeout(function () {
    title.classList.add('animate-in');
  }, 1000);

  for (let i = 0; i <= 6; i++) {
    console.log((i + 2) * 1500);
    setTimeout(function () {
      courseFeatureElements[i].classList.add('animate-in');
    }, (i + 2) * 1500);
  }

  setTimeout(function () {
    button.classList.add('animate-in');
  }, 13500);
}

animate();

button.addEventListener('click', function() {
  animate();
});
