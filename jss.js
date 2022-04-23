//--------------------------1---------------------------------
//------------------a-------------------------------------
//Tamsiai žaliai nuspalvinti h1 tagą;

const h1 = document.querySelector('h1');
h1.style.color = "#006400";
//-------------------------b----------------------------
//-----------------Tagui i pridėti klasę small;--------------------------------------------------------
const i = document.querySelector('i');
i.classList.add("small");
//-------------------c---------------------------------
//Iš tago h1 pašalinti klasę main;
h1.classList.remove("main");
//-----------------d---------------------------
//Tik tam h2 tagui, kuris iškart eina po h1 tago, pridėti klasę first ir pašalinti klasę main;
const firstH2 = document.querySelector('h1 + h2')
firstH2.classList.add('first');
firstH2.classList.remove('main');


//-----------------------------------------e----------------------------------
//Pirmam span tagui, kuris yra h2 viduje sumažinti fonto dydį iki 10px ir nudažyti pilkai
const firstSpanInsideH2 = document.querySelector('h2> span:first-of-type')
firstSpanInsideH2.style.fontSize= '10px';
firstSpanInsideH2.style.color= 'grey';
    //-------------------------------2---------------------------------
//---------------------------------a------------------------------------
//Suskaičiuoti kiek yra h2 tagų;
  const countH2 = document.querySelectorAll("h2").length;
  console.log(`Isviso <h2> tagu dokumente yra ${countH2}`)
  //---------------------b------------------------------------------------------
  //Suskaičiuoti kiek yra h2 tagų, kurie neturi klasės first
  
   const h2NonFirstClass =  ((countH2) - document.querySelectorAll("h2.first").length)

   console.log(`Isviso <h2> tagu be .first class dokumente yra ${h2NonFirstClass}`)

   //--------------------------------c-------------------------------------
//Visus h2 tagus nuspalvinti šviesiai mėlynai

let allH2tags = document.querySelectorAll('h2')
for(let i=0; i<allH2tags.length-1; i++){
    allH2tags[i].style.color = "#add8e6"
}

//--------------------------d----------------------------------------------------------------
//Tagų, kurie yra div su klase prices, viduje esantiems h2 tagams pridėti klasę price-tag;
const addClassPriceTag = document.querySelectorAll("div.prices>h2");
for(let i = 0; i < addClassPriceTag.length; i++){
    addClassPriceTag[i].classList.add("price-tag")
}
console.log(addClassPriceTag)

//---------------------e---------------------------------------
//-----------------Pabraukti visus tagus su klase new;--------------------------------------------------------

const allTagsWithClassNew = document.getElementsByClassName('new')
console.log(allTagsWithClassNew)

for(let i = 0; i < allTagsWithClassNew.length; i++){
    allTagsWithClassNew[i].style.textDecoration = 'underline'
}
//--------------------f--------------------------------- 
//Suskaičiuoti kiek yra gyvūnų kategorijų ir žirafų (jos yra ul tagai);
const animalCategory = document.querySelectorAll("ul")
console.log(`Is viso gyvunu kategoriju: ${animalCategory.length}`)
const girafes = document.querySelectorAll("ul#zirafos>li:not(:first-child)")
console.log(`Zoo sode is viso yra ${girafes.length} zirafos`)
//---------------g-------------------------------------
//Tagus ul apibraukite rėmeliais ir uždėkite 15px paddingą viršuje ir apačioje ir 50px paddingą kairėje ir dešinėje;

for(let i=0; i<animalCategory.length; i++){
    animalCategory[i].style.border = "1px solid red";
    animalCategory[i].style.padding = "15px 50px 15px 50px";
}
//---------------------------------h----------------------------------------
//Suskaičiuoti kiek yra naujų gyvūnų (su klase new);

const newAnimals = document.querySelectorAll("ul>li.new")
console.log(`Nauju gyvunu: ${newAnimals.length}`)


//-----------------i--------------------------------------------
//Suskaičiuoti atskirai kiek yra naujų gyvūnų kiekvienoje kategorijoje;

const newGirafe = document.querySelectorAll("#zirafos>li.new") 
const newPredators = document.querySelectorAll("#plesrunai>li.new")
const newSnakes = document.querySelectorAll("#gyvates>li.new")
const newHerbivores = document.querySelectorAll("#zoliaedziai>li.new")
console.log(`nauju zirafu zoo sode yra: ${newGirafe.length}`)
console.log(`nauju plesrunu zoo sode yra: ${newPredators.length}`)
console.log(`nauju gyvaciu zoo sode yra: ${newSnakes.length}`)
console.log(`nauju zoliaedziu zoo sode yra: ${newHerbivores.length}`)


//------------------------------------3----------------------------------------
//------------------------------------a-----------------------
//Padaryti tai ką liepia mygtukai Header1 sekcijoje;

const colorButton = document.querySelector('#h1-color');
const fontGreyButton = document.querySelector('#h1-font');

colorButton.addEventListener('click',function(e) {
    h1.style.color = "green";
});
fontGreyButton.addEventListener('click', function(e) {
    h1.style.fontSize = "10px"
    
})


//------------------------------------b-----------------------
//Padaryti, kad paspaudus ant i tago jis pakeistų fonto svorį į bold;

i.addEventListener('click',function(e){
    i.style.fontWeight = "bold"});


//------------------------------------c----------------------
//Padaryti, kad paspaudus ant tago su klase prices, backgroundas pasikeistų į pilką, o paspaudus dar kartą vėl grįžtu į baltą spalvą;
const classPricesTag = document.querySelector('.prices');
classPricesTag.addEventListener('click', function(e) {
    
   if(classPricesTag.style.backgroundColor !== "grey") {
    classPricesTag.style.backgroundColor = 'grey'
   }
   else{
    classPricesTag.style.backgroundColor = 'white'

   } 
})


//------------------------------------d--------------------
//Padaryti, kad paspaudus ant tago su id contacts, tam tagui būtų pridėta css savybė color = orange;

const contactsTag = document.getElementById('contacts');
contactsTag.addEventListener('click', (e) =>
    contactsTag.style.color = "orange")

//------------------------------------e-----------------------
//Padaryti taip, kad paspaudus ant padidinti, esančio tage su id contacts, tagui su id contacts būtų pridėta css savybė fontSize = 20px;
const zoomIn = document.querySelector('#contacts>u');

zoomIn.addEventListener('click', (e) => {
    contactsTag.style.fontSize = "20px"
})

//------------------------------------f-------------------------
//Padaryti taip, kad paspaudus ant X, esančio tage su id contacts, pridėtos tage su id contacts savybės būtų panaikintos https://stackoverflow.com/questions/18691655/remove-style-on-element

const removeStyles = document.querySelector('#contacts>b');

removeStyles.addEventListener('click', (e) => {
    contactsTag.style.removeProperty('color'); //kazko neveikia!!!!
    contactsTag.style.removeProperty('font-size');
})

//------------------------------------g----------------------

//Padaryti tai ką liepia mygtukai Header2 sekcijoje;

const restoreFontColorBtn = document.getElementById('h1-color-back')
const restoreFontSizeBtn = document.getElementById('h1-font-back')

restoreFontColorBtn.addEventListener('click', () => {
    h1.style.removeProperty('color')

})
restoreFontSizeBtn.addEventListener('click', () => {
    h1.style.removeProperty('font-Size')
})

//--------------------------4---------Elementų grupių events-----------------------------------------------
//--------------------------a------------------------------------------------
//Padaryti, kad dukartus paspaudus ant naujų gyvūnų jie nusispalvintu raudonai https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event
const newItems = document.querySelectorAll('li.new')


for(let i = 0; i < newItems.length; i++) {
    newItems[i].addEventListener('dblclick',(e)=>{
        newItems[i].style.color ="red";
    })
    
}
//---------------------------------------------b---------------------------------------------------------------------
//Padaryti, kad paspaudus ant gyvūno jis būtų atvaizduojamas 130% didesniu fonto dydžiu. “PATINKA” tas neturi galioti.

const animalList = document.querySelectorAll('li:not(.like-button)')

for(let i=0; i<animalList.length; i++){
    animalList[i].addEventListener('click', function(e){
        animalList[i].style.fontSize ="130%"
    })
    
}

//---------------------------------------------c------------------------------------------------------------------------
//Padaryti, kad paspaudus ant “PATINKA”, atitinkamai (tėvinei) sekcijai būtų priskirta klasė like;
const likeLi = document.querySelectorAll('li.like-button')
for(let i = 0; i < likeLi.length; i++) {
    likeLi[i].addEventListener('click', (e) =>{
        likeLi[i].parentNode.classList.add('like')
    })
}

console.log(likeLi)

//--------------------5---Dinaminis elementų kūrimas (su createElement)---------------------------------------------
//--------------------------a---------------------------------------------------
//Dinamiškai su JS pridėti naują kainą “Senjorai tik: 1.99 eur”;
const forSenjorai = document.createElement('h2');
forSenjorai.innerText = "Senjorai tik: 1.99 eur"
document.querySelector('.prices').appendChild(forSenjorai);

//---------------------------------------------b-------------------------------------------------------
//Dinamiškai su JS Pridėti naują kainą “Senjorų grupė iki 10: tik 5.99 eur” Padaryti, kad pridėtas elementas turėtų klasę new ir ant jo paklikinus jis pasidarytų žalias;

const senjoruGroup = document.createElement('h2')
senjoruGroup.innerText ="Senjorų grupė iki 10: tik 5.99 eur"
senjoruGroup.classList.add('new')
senjoruGroup.addEventListener('click', (e) => {
    senjoruGroup.style.color = "green";
})
document.querySelector('.prices').appendChild(senjoruGroup);


//-----------------------------------------------c---------------------------------------------------------------------------
//Dinamiškai su JS kiekvienoje gyvūnų kategorijoje po “PATINKA” pridėkite dar vieną li elementą “NEPATINKA”, kurį paspaudus atitinkamoje sekcijoje būtų nuimta klasė like

const disLike1 = document.createElement('li.dislike-button')
disLike1.innerText = 'NEPATINKA';
disLike1.style.cursor = 'pointer';
disLike1.addEventListener('click', (e)=>{
disLike1.parentElement.classList.remove('like')
})
const disLike2 = document.createElement('li.dislike-button')
disLike2.innerText = 'NEPATINKA';
disLike2.style.cursor = 'pointer';
disLike2.addEventListener('click', (e)=>{
disLike2.parentElement.classList.remove('like')
})
const disLike3 = document.createElement('li.dislike-button')
disLike3.innerText = 'NEPATINKA';
disLike3.style.cursor = 'pointer';
disLike3.addEventListener('click', (e)=>{
disLike3.parentElement.classList.remove('like')
})
const disLike4 = document.createElement('li.dislike-button')
disLike4.innerText = 'NEPATINKA';
disLike4.style.cursor = 'pointer';
disLike4.addEventListener('click', (e)=>{
disLike4.parentElement.classList.remove('like')
})


let aCategory1 = document.querySelector('ul:first-child .like-button');
let aCategory2 = document.querySelector('ul:nth-child(3) .like-button')
let aCategory3 = document.querySelector('ul:nth-child(5) li')
let aCategory4 = document.querySelector('ul:last-child li')

aCategory1.parentNode.insertBefore(disLike1, aCategory1.nextSibling)
aCategory2.parentNode.insertBefore(disLike2, aCategory2.nextSibling)
aCategory3.parentNode.insertBefore(disLike3, aCategory3.nextSibling)
aCategory4.parentNode.insertBefore(disLike4, aCategory4.nextSibling)





//--------------------------------------------------------------------d------------------------------------------------------------------------------
//Dinamiškai su JS sukurkite naują mygtukų grupę HEADER 3 naudojant analogišką html tagų struktūrą kaip ir HEADER 1 ir HEADER 2. Pirmas mygtukas vadintųsi, “Pabraukti H1 tagą”, o antras “Nepabraukti H1 tagą”. Mygtukai turi daryti tai kas ant jų parašyta


const header3 = document.createElement('fieldset');
const legendForHeader3 = document.createElement('legend');
legendForHeader3.innerText="HEADER 3"

const buttonPabraukti = document.createElement('button');
buttonPabraukti.setAttribute('id','h1-underline');
buttonPabraukti.innerText="Pabraukti H1 tagą";
buttonPabraukti.addEventListener('click', (e)=>{
    h1.style.textDecoration = 'underline';
})

const buttonNePabraukti = document.createElement('button');
buttonNePabraukti.setAttribute('id','h1-noUnderline');
buttonNePabraukti.innerText="Nepabraukti H1 tagą";
buttonNePabraukti.addEventListener('click', (e)=>{
    h1.style.textDecoration = 'none';
})
header3.append(legendForHeader3, buttonPabraukti,buttonNePabraukti)
const fieldset3 = document.querySelector('fieldset:last-of-type');
document.body.insertBefore(header3,fieldset3.nextSibling);


