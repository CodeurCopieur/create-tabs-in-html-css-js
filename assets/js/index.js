const onglets = document.querySelectorAll('.onglets');
const contenu = document.querySelectorAll('.tabs__container-contenu');
let index = 0;

console.log(onglets, contenu);

onglets.forEach( onglet => {
  onglet.addEventListener('click', () => {

    if(onglet.classList.contains('active')) {
      return;
    } else {
      onglet.classList.add('active');
    }

    index = onglet.getAttribute('data-anim');
    //on affecte a la variable index le chiffre contenu dans son attribut data-anim
    console.log(index);

    for (let i = 0; i < onglets.length; i++) {

      if(onglets[i].getAttribute('data-anim') != index) {
        onglets[i].classList.remove('active');
      }
    }

  })
});