var images;


images = ['https://www.google.com/', 'https://www.facebook.com/', 'https://www.youtube.com/'];


document.getElementById('button').addEventListener('click', (event) => {
  images.forEach((images) => {
    let element_picture = document.getElementById('picture');
    let new_a = document.createElement('a');
    new_a.setAttribute("href", images);
    new_a.innerText = images;

    element_picture.appendChild(new_a);
  });

});
