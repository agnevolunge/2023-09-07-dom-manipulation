// console.log(document.querySelector('p')) //document yra objektas

let paragraph = document.querySelector('p')

paragraph.textContent = 'sveikas' //galima pakeisti teksta is html, nes js uzkrauna veliausiai

paragraph.innerHTML = 'Labas <span style="color: red">vakaras</span>' //jeigu nereikia innerHTML naudojam textContent

// console.dir(paragraph.textContent)

// sukurti html elementa

let spanElement = document.createElement('span')
spanElement.textContent = '!'

//Apend - prideda su JS sukurta HTML elementa (node) i kito elemento pabaiga

paragraph.append(spanElement)

//Prepend - prideda su JS sukurta HTML elementa (node) i kito elemento pradzia

paragraph.prepend(spanElement)

//After - prideda su JS sukurta HTML elementa (node) po kitu elementu (salia kito elemento)

paragraph.after(spanElement)

//Before - prideda su JS sukurta HTML elementa (node) pries kita elementu (salia kito elemento)

paragraph.before(spanElement)

//Remove - pasalina HTML elementa

spanElement.remove()

//sukuriam nauja paragrafa

let newParagraph = document.createElement('p')
newParagraph.textContent ='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia praesentium esse tempora omnis possimus. Nisi!'

paragraph.after(newParagraph)

// budas pakeisti HTML elemento klases


newParagraph.className = 'pirma-klase antra-klase'

newParagraph.className = newParagraph.className + ' trecia-klase'
// newParagraph.className = 'trecia-klase'
console.log(newParagraph.className)


//prideda klase prie HTML elemento

newParagraph.classList.add('ketvirta-klase')

//pasalina klase is HTML elemento
newParagraph.classList.remove('pirma-klase', 'trecia-klase')

//pakeicia klase HTML elemente

newParagraph.classList.replace('antra-klase', 'astunta-klase')

//prideda klase prie HTML elemento, jeigu tokios klases dar neturi ir pasalina jeigu tokia klase jau turi

newParagraph.classList.toggle('toggle-klase') //prideda
newParagraph.classList.toggle('toggle-klase') //pasalina
newParagraph.classList.toggle('toggle-klase') //prideda

// console.log(newParagraph.className)
// console.log(newParagraph.className.includes('klase'))

//geresnis variantas klasiu patikrinimui ne 'includes', o 'contains'

//patikrina ar HTML elementas turi nurodyta klase (grazina true arba false)
console.log(newParagraph.className)
console.log(newParagraph.classList.contains('trecia-klase'))
console.log(newParagraph.classList.contains('ketvirta-klase'))
console.log(newParagraph.classList.contains('klase'))

// keicia (arba prideda) HTML elemento ID
newParagraph.id = 'patagrafo-id'

let link = document.createElement('a')
link.textContent = 'nuoroda'
newParagraph.after(link)

// link.href = 'https://www.google.com'
// link.target = '_blank'

link.setAttribute('href' , 'https://www.google.com')
link.setAttribute('href' , '_blank')
link.setAttribute('title' , 'cia yra nuoroda i google')
link.setAttribute('class' , 'nuorodos-klase')
link.setAttribute('class' , 'nauja-klase')
link.setAttribute('id' , 'nuorodos-id')

console.log(link.className)
link.removeAttribute('class')
console.log(link.className)

link.removeAttribute('title')


console.dir(link)

link.style.border = '2px solid black'
link.style.padding = '5px 10px'
link.style.fontSize = '25px'
link.style.display = 'inline-block'

link.style = `color: red;
              border: 2px solid black;
              padding: 5px 10px;
              font-size: 25px;
              display: inline-block;
              text-decoration: none;
              text-transform: uppercase;`

//link.style yra stipresnis uz link.style.border ir pan., tad jei jis parasytas apacioje, stilius bus pagal ji, ir pries tai nurodyti link.style.border ar link.style.padding - dings