const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

  // Récupération des éléments du carrousel 
  const arrowLeft = document.querySelector('.arrow_left');
  const arrowRight = document.querySelector('.arrow_right');
  const dotsContainer = document.querySelector('.dots');
  const bannerImg = document.querySelector('.banner-img');
  const bannerText = document.querySelector('#banner p'); 

  // Index de la diapositive actuelle 
  let currentSlideIndex = 0;

  // Fonction pour mettre à jour l'affichage en fonction de l'index de la diapositive 
  function updateSlide(index) {
      // Mettre à jour le bullet point actif
      const dots = dotsContainer.querySelectorAll('.dot');
      dots.forEach((dot, dotIndex) => {
          dot.classList.toggle('dot_selected', dotIndex === index);
      });

      // Mettre à jour l'image 
      const imagePath = `./assets/images/slideshow/${slides[index].image}`;
      bannerImg.src = imagePath;  

      // Mettre à jour le texte
      bannerText.innerHTML = slides[index].tagLine;
  }

  // Gestionnaire d'événement pour la flèche droite
  arrowRight.addEventListener('click', function () {
      // Passer à la diapositive suivante (modulo pour la boucle)
      currentSlideIndex = (currentSlideIndex + 1) % slides.length;
      updateSlide(currentSlideIndex);
  });

  // Gestionnaire d'événement pour la flèche gauche
  arrowLeft.addEventListener('click', function () {
      // Passer à la diapositive précédente (modulo pour la boucle)
      currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
      updateSlide(currentSlideIndex);
  });

  // Générer les points dynamiquement
  slides.forEach((slide, index) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (index === 0) {
          dot.classList.add('dot_selected'); 
      }

      // Ajouter un Event Listener pour chaque point si nécessaire 
      dot.addEventListener('click', function () {
          // Ajoutez ici la logique pour afficher la diapositive correspondante
          currentSlideIndex = index;
          updateSlide(currentSlideIndex);
      });

      dotsContainer.appendChild(dot);
  });

  // Initialiser la première diapositive
  updateSlide(currentSlideIndex);

  // Ajouter une gestion du clavier pour le défilement 
  document.addEventListener('keydown', function (e) {
      if (e.code === 'ArrowLeft') {
          // Passer à la diapositive précédente
          currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
          updateSlide(currentSlideIndex);
      } else if (e.code === 'ArrowRight') {
          // Passer à la diapositive suivante
          currentSlideIndex = (currentSlideIndex + 1) % slides.length;
          updateSlide(currentSlideIndex);
      }
  });