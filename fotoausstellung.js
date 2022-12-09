<<<<<<< HEAD
window.addEventListener('load', function(){
  // I use Glider library to show my fotos
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

  // I show an overlay with a big version of foto on click

  const initClickHandler = () => {
    const imageOverview = document.querySelectorAll('.zoomable');
    imageOverview.forEach((el) => {
    el.addEventListener('click', (event) => {
      console.log(event.target);
      const image = event.target.querySelector('img');
      const src = image.getAttribute('src'); // image1
      createOverlay(src);
      });
  })}; 
   initClickHandler();
  const createOverlay = (src) => {
    const fullPage = document.querySelector('#fullpage');
    console.log(src);
    fullPage.style.backgroundImage = "url('" + src + "')";
    fullPage.style.display = 'block';
  };

// I found an API with random Cats fotos and use a random foto for a comment

const changeFoto = document.querySelector('#bildNew');
changeFoto.addEventListener('click', (event) => {
const url = `https://api.thecatapi.com/v1/images/search`;  
fetch(url)
.then((response) => {
return response.json();
})
.then((data) => {
  let imagesData = data;
  imagesData.map(function(imageData) {
    
    let image = document.getElementById('fotoKomment');
    //use the url from the image object
    image.src = `${imageData.url}`;
    });
})
.catch(function(error) {
   console.log(error);
});
  
});
});

function submitKomment(theForm) {
  console.log(theForm);
  const Vorname = theForm.vorname.value;
  const Nachname = theForm.nachname.value;
  const Kommentar = theForm.frage2.value;
  const rad = theForm.country.value;
  const email = theForm.email.value;
  if (!rad) { 
    alert('Enter Location');
   }
  // else if (!)
  else {
  const MyDivKomment = document.querySelector('#kommentFormTemplate');
  var clone = MyDivKomment.cloneNode(true);
  clone.id='kommentForm';

  clone.querySelector('#KommentorName').innerHTML = Vorname;
  clone.querySelector('#KommentarText').innerHTML = rad;
  clone.querySelector('#KommentorSecondName').innerHTML = Nachname;
  clone.querySelector('#KommentarMy').innerHTML = Kommentar;
  clone.querySelector('#thisFoto').src = theForm.querySelector('#fotoKomment').src;
  // clone..
  
  document.querySelector('#CommentList').appendChild(clone);
  return false;
  }
  } 
=======
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
 
>>>>>>> 049482ed2f3e43ab9fc8de3d7293b16e981a530e
