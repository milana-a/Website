window.addEventListener('load', function(){
  new Glider(document.querySelector('.glider'), {
    slidesToShow: 3,
    slidesToScroll: 3,
    draggable: true,
    dots: '.dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  });
  initClickHandler();
  });

  const initClickHandler = () => {
    const imageOverview = document.querySelectorAll('.glider-slide');
    console.log(imageOverview);
    imageOverview.forEach((el) => {
      console.log(el);
    el.addEventListener('click', (event) => {
      const image = event.target.querySelector('.imageKarusell');
      const src = image.getAttribute('src'); // image1
      const markup = createOverlay(src);
      const body = document.querySelector('body');
      body.append(markup);
      initCloseHandler();
    });
  })};
  const createOverlay = (src) => {
    const markup = `
      <div>
        <span class="close-button">x</span>
        <img src="${src}"/img>
        var elem = document.createElement("img");
        elem.setAttribute("src", "${src}");
        document.appendChild(elem);
      </div>
    `;
    return markup;
  };
 