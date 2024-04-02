document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.slider-image');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const thumbnailsContainer = document.querySelector('.thumbnails-container');
  
    let currentImageIndex = 0;
  
    function showImage(index) {
      images.forEach((image, i) => {
        if (i === index) {
          image.classList.add('active');
        } else {
          image.classList.remove('active');
        }
      });
      updateThumbnails(index);
    }
  
    function updateThumbnails(index) {
      thumbnailsContainer.innerHTML = '';
      images.forEach((_, i) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = images[i].src;
        thumbnail.classList.add('thumbnail');
        if (i === index) {
          thumbnail.classList.add('active-thumbnail');
        }
        thumbnail.addEventListener('click', () => showImage(i));
        thumbnailsContainer.appendChild(thumbnail);
      });
    }
  
    prevBtn.addEventListener('click', () => {
      currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
      showImage(currentImageIndex);
    });
  
    nextBtn.addEventListener('click', () => {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      showImage(currentImageIndex);
    });
  
    showImage(currentImageIndex);
  });