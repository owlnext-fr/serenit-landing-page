// =========================================================
// Sérén'IT — JavaScript principal
// =========================================================
// Vanilla JS, pas de framework, pas de build.
// Pour l'instant : juste un petit test pour vérifier que le JS
// est bien chargé et que le déploiement GitHub Pages fonctionne.
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ Sérén'IT — JS chargé. CI/déploiement OK.");

  const status = document.getElementById("ci-status");
  if (status) {
    status.textContent = "✅ JavaScript chargé — le déploiement fonctionne.";
  }
});

// Gère le changement de couleur automatique des liens de la navbar (Scrollspy) lors du défilement
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section, footer");
  const liensNav = document.querySelectorAll(".navbar-links a");

  const optionRadar = {
    root: null,
    rootMargin: "-20% 0px -10% 0px"
  };

  const espionScroll = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const idSection = entry.target.getAttribute("id");

        liensNav.forEach((lien) => {
          lien.classList.remove("active");
          if (lien.getAttribute("href") === `#${idSection}`) {
            lien.classList.add("active");
          }
        });
      }
    });
  }, optionRadar);

  sections.forEach((section) => {
    if (section.getAttribute("id")) {
      espionScroll.observe(section);
    }
  });
});

// Animation d'apparition du hero au chargement
document.addEventListener("DOMContentLoaded", () => {
  const titreAccueil = document.querySelector(".hero h1");
  const descriptionAccueil = document.querySelector(".hero p");
  const boutonAppelAction = document.querySelector(".hero__cta");
  const listeElements = [titreAccueil, descriptionAccueil, boutonAppelAction];

  listeElements.forEach((element, index) => {
    if (element) {
      setTimeout(() => {
        element.classList.add("apparition-visible");
      }, index * 200);
    }
  });
});

// Animation au scroll de la section Plateforme (titre, approche, solutions)
document.addEventListener("DOMContentLoaded", () => {
  const observateur = new IntersectionObserver((elementsAffiches) => {
    elementsAffiches.forEach((elementAffiche) => {
      if (elementAffiche.isIntersecting) {
        elementAffiche.target.classList.add("plateforme-visible");
      }
    });
  }, {
    threshold: 0.15
  });

// Carrousel des solutions (flèches + points de navigation)
  const titreApproche = document.querySelector(".approche h5");
  const titrePlateforme = document.querySelector(".plateforme h2");
  const cartesTop = document.querySelector(".approche__cards--top");
  const cartesBottom = document.querySelector(".approche__cards--bottom");
  const sectionSolutions = document.querySelector(".solutions");

  if (titreApproche) observateur.observe(titreApproche);
  if (titrePlateforme) observateur.observe(titrePlateforme);
  if (cartesTop) observateur.observe(cartesTop);
  if (cartesBottom) observateur.observe(cartesBottom);
  if (sectionSolutions) observateur.observe(sectionSolutions);
});

document.addEventListener("DOMContentLoaded", () => {
  const listeSolutions = document.querySelectorAll(".solutions_bloc");
  const listePoints = document.querySelectorAll(".points .point");
  const boutonGauche = document.querySelector(".fleche_gauche");
  const boutonDroite = document.querySelector(".fleche_droite");
  
  let indexActuel = 0;


function changerSolution(nouvelIndex) {
  const gauche = nouvelIndex > indexActuel;
  const [ancien, nouveau] = [listeSolutions[indexActuel], listeSolutions[nouvelIndex]];

  ancien.style.animation = `${gauche ? "sortieGauche" : "sortieDroite"} 0.3s ease-out forwards`;

  setTimeout(() => {
    ancien.classList.remove("active");
    listePoints[indexActuel].classList.remove("point_active");
    indexActuel = nouvelIndex;
    nouveau.classList.add("active");
    nouveau.offsetHeight;
    nouveau.style.animation = `${gauche ? "apparitionGauche" : "apparitionDroite"} 0.3s ease-out forwards`;
    listePoints[indexActuel].classList.add("point_active");
  }, 300);
}

  listePoints.forEach((point, index) => {
    point.addEventListener("click", () => {
      changerSolution(index);
    });
  });

  if (boutonDroite) {
    boutonDroite.addEventListener("click", () => {
      const prochainIndex = indexActuel === listeSolutions.length - 1 ? 0 : indexActuel + 1;
      changerSolution(prochainIndex);
    });
  }

  if (boutonGauche) {
    boutonGauche.addEventListener("click", () => {
      const prochainIndex = indexActuel === 0 ? listeSolutions.length - 1 : indexActuel - 1;
      changerSolution(prochainIndex);
    });
  }
});

// Animation au scroll de la section Prix (titre, cartes, tableau comparatif)
const prixTexte = document.querySelector(".prix-texte");
  if (prixTexte) {
    const obsTexte = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          prixTexte.classList.add("visible");
          obsTexte.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    obsTexte.observe(prixTexte);
  }

const grillePrix = document.querySelector(".prix-cards");

  if (grillePrix) {
    const observateur = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          grillePrix.classList.add("visible");
          observateur.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15
    });

    observateur.observe(grillePrix);
  }

// Animation d'apparition du tableau comparatif des prix au défilement
  const sectionComparatif = document.querySelector(".comparison-section");

  if (sectionComparatif) {
    const observateurTableau = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          sectionComparatif.classList.add("visible");
          observateurTableau.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    observateurTableau.observe(sectionComparatif);
  }

// Animation d'apparition du titre de la section clients au défilement
  const titreClients = document.querySelector(".clients h2");

if (titreClients) {
  const obsTitreClients = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obsTitreClients.unobserve(entry.target);
      }
    });
  }, { 
    threshold: 0.2 
  });
  
  obsTitreClients.observe(titreClients);
}

// Animation d'apparition des cartes avis clients au défilement
  const sectionClients = document.querySelector(".clients");
  const conteneurAAnimer = document.querySelector(".clients_cards");

  if (sectionClients && conteneurAAnimer) {
    const observateurClients = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          conteneurAAnimer.classList.add("visible");
          observateurClients.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15
    });

    observateurClients.observe(sectionClients);
  }

  // Carrousel des avis clients (flèches gauche/droite + gestion du scroll)
const conteneurCards = document.querySelector(".clients_cards");
const boutonClientDroite = document.querySelectorAll(".fleche_client_droite");
const boutonClientGauche = document.querySelectorAll(".fleche_client_gauche");
const cartesClients = document.querySelectorAll(".clients_cards > div");

if (conteneurCards && cartesClients.length > 0) {
  let peutCliquer = true;

  const largeurUneCarte = cartesClients[0].offsetWidth + 30;
  const largeurDecalage = window.innerWidth <= 960 ? largeurUneCarte : largeurUneCarte * 2;
  boutonClientDroite.forEach(btn => {
    btn.addEventListener("click", () => {
      if (!peutCliquer) return;
      peutCliquer = false;
      
      conteneurCards.scrollLeft += largeurDecalage;

      setTimeout(() => {
        peutCliquer = true;
      }, 500);
    });
  });

  boutonClientGauche.forEach(btn => {
    btn.addEventListener("click", () => {
      if (!peutCliquer) return;
      peutCliquer = false;

      conteneurCards.scrollLeft -= largeurDecalage;

      setTimeout(() => {
        peutCliquer = true;
      }, 500);
    });
  });
}


  // Scroll infini avis clients
const track = document.querySelector(".clients_cards");
const items = [...track.children];

for (let i = 0; i < 150; i++) {
  items.forEach(item => track.appendChild(item.cloneNode(true)));
}

requestAnimationFrame(() => {
  track.scrollLeft = track.scrollWidth / 2;
  majCartesActives();
});




// Caches les avis pas dans le cadre (opacité + plus petites)
function majCartesActives() {
  const centreTrack = track.scrollLeft + track.clientWidth / 2;
  const cartes = track.querySelectorAll(".clients_cards > div");
  
  cartes.forEach(carte => {
    const centreCarte = carte.offsetLeft + carte.offsetWidth / 2;
    const distance = Math.abs(centreTrack - centreCarte);
    
    if (distance < carte.offsetWidth * 1.5) {
      carte.classList.add("actif");
    } else {
      carte.classList.remove("actif");
    }
  });
}

track.addEventListener("scroll", majCartesActives);
majCartesActives();


// Animation au scroll de la section action
const sectionAction = document.querySelector('.action');

if (sectionAction) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        sectionAction.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  observer.observe(sectionAction);
}

// Animation au scroll du footer

const sectionFooter = document.querySelector('#contact');

if (sectionFooter) {
  const observerFooter = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        sectionFooter.classList.add('active');
        observerFooter.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  observerFooter.observe(sectionFooter);
}


// Affichage/Disparition des tableaux de comparaison pour la version mobile (tableau croissance)
function afficherCroissance() {
  const tableEssentiel = document.querySelector('.container_essentiel');
  const tableCroissance = document.querySelector('.container_croissance');
  
  if (tableEssentiel && tableCroissance) {
    tableEssentiel.classList.remove('active-tab');
    tableCroissance.classList.add('active-tab');
  }
}

// (tableau essentiel)
function afficherEssentiel() {
  const tableEssentiel = document.querySelector('.container_essentiel');
  const tableCroissance = document.querySelector('.container_croissance');
  
  if (tableEssentiel && tableCroissance) {
    tableCroissance.classList.remove('active-tab');
    tableEssentiel.classList.add('active-tab');
  }
}

// Apparition au clique du menu 
function gererMenu() {
  const menu = document.querySelector('.panel_menu');
  if (menu) {
    menu.classList.toggle('open');
  }
}


const carrousel = document.querySelector(".solutions_carrousel");
let debutX = 0;

carrousel.addEventListener("touchstart", e => debutX = e.touches[0].clientX);
carrousel.addEventListener("touchend", e => {
  const diff = debutX - e.changedTouches[0].clientX;
  if (Math.abs(diff) < 50) return;
  document.querySelector(diff > 0 ? ".fleche_droite" : ".fleche_gauche").click();
});

