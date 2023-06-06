//bouton menu deroulant//
const navbar = document.querySelector(`.menu`);
//onglet du menu deroulant//
const accueil2 = document.querySelector('.accueil2');
const xppro = document.querySelector('.xppro');
const formation = document.querySelector('.formation');
const loisirs = document.querySelector('.loisirs');
const contact = document.querySelector('.contact');
//menu burger //
const croix1 = document.querySelector('.croix1');
const croix2 = document.querySelector('.croix2');
const croix3 = document.querySelector('.croix3');
const croi1 = document.querySelector('#croi1');
const croi2 = document.querySelector('#croi2');
const croi3 = document.querySelector('#croi3');

//animation bouton burger au scroll //

window.addEventListener("scroll",(e)=>{

    if( window.scrollY > 120){
        navbar.style.top ="20px"
    }
        else{
        croi1.classList.remove('croix1')
        croi2.classList.remove('croix2')
        croi3.classList.remove('croix3')
        navbar.style.top ="-80px"
        accueil2.style.left ="-200px"
        xppro.style.left ="-200px"
        formation.style.left ="-200px"
        loisirs.style.left ="-200px"
        contact.style.left ="-200px"
        }
})

//animation au click menu déroulant//

navbar.addEventListener("click",(event)=>{

    if(accueil2.style.left === "-200px"){
        croi1.classList.add('croix1')
        croi2.classList.add('croix2')
        croi3.classList.add('croix3')
        accueil2.style.left ="20px"
        xppro.style.left ="20px"
        formation.style.left ="20px"
        loisirs.style.left ="20px"
        contact.style.left ="20px"
    }
        else{
        croi1.classList.remove('croix1')
        croi2.classList.remove('croix2')
        croi3.classList.remove('croix3')
        accueil2.style.left ="-200px"
        xppro.style.left ="-200px"
        formation.style.left ="-200px"
        loisirs.style.left ="-200px"
        contact.style.left ="-200px"
        }   
})


//PAGE FORMATIONS//

const formcastel = document.querySelector('.formcastel');
const imgcastel = document.querySelector('.castel');
const formcesi = document.querySelector('.formcesi');
const imgcesi = document.querySelector('.cesi');
//apparition des sections au scroll //
window.addEventListener("scroll", ()=>{
    if(window.scrollY >300){
        imgcastel.style.height = "450px";
        formcastel.style.opacity ="1";
    }

    if(window.scrollY >700){
        imgcesi.style.height = "450px";
        formcesi.style.opacity ="1";
    }

})


//PAGE LOISIRS//
const loisir = document.querySelector('.loisir');
//variable texte //
const lecture = document.querySelector('.lecture');
const cuisine = document.querySelector('.cuisine');
const jeuxvideo = document.querySelector('.jeuxvideo');
const escalade = document.querySelector('.escalade');
//variable img//
const imglecture = document.querySelector('.livre');
const imgcuisine = document.querySelector('.logocuisine');
const imgjeuxvideo = document.querySelector('.karmine');
const imgescalade = document.querySelector('.grimpe');

window.addEventListener('scroll',()=>{
    if(window.scrollY>150){
        lecture.style.opacity ="1"
        cuisine.style.opacity ="1"
        jeuxvideo.style.opacity ="1"
        escalade.style.opacity ="1"
    }
})


//PAGE ACCUEIL//DOIT ETRE A LA FIN DU DOC//
const intro = document.querySelector("#intro");
const txt = intro.dataset.label;
const photomoi = document.querySelector('.photomoi');
let i 	= 0 ;

//fonction apparition texte d'intro//
function texteintro()
{
  let timeOut ;
  if(i < txt.length)
	{
	  intro.innerHTML += txt[i];
	  timeOut = setTimeout(texteintro,1)
	  i++
	}
	else
	{
	  clearTimeout(timeOut);
      photomoi.style.opacity ="1"

	}
}

window.addEventListener('scroll',()=>{
    if(window.scrollY>250){
        texteintro();
    }
})