var searhLetter = document.getElementById('searhLetter')
var searchName = document.getElementById('searhName')
var divRow = document.getElementById('divRow')
var RandomBtn = document.getElementById('RandomBtn')
RandomBtn.classList.add('random-btn-phone')

function getMeal(meals) {
    
  for (var meal of meals) {
    
var divCard = document.createElement('div')
divCard.classList.add('card','col-3','mt-5','mx-3')
divCard.style.width = '18rem'

var image = document.createElement('img')
image.src = meal.strMealThumb

var divCardBody = document.createElement('div')
divCardBody.classList.add('card-body')

var heading = document.createElement('h3')
heading.classList.add('card-title')
heading.textContent = meal.strMeal

var categoryName = document.createElement('p')
categoryName.classList.add('card-text')
categoryName.textContent = `category : ${meal.strCategory}`
categoryName.style.fontSize = '18px'

var AriaName = document.createElement('p')
AriaName.classList.add('card-text')
AriaName.textContent = `Aria : ${meal.strArea}`
AriaName.style.fontSize = '18px'

if (meal.strArea === null) {
    AriaName.textContent = 'Aria : not Available' 
}

var anchorView = document.createElement('a')
anchorView.classList.add('anchor-card','btn')
anchorView.textContent = 'view Details'
anchorView.href = `detailes.html?id=${meal.idMeal}`



var anchorFavourite = document.createElement('a')
anchorFavourite.classList.add()
anchorFavourite.href = ''

var iHeart = document.createElement('i')
iHeart.classList.add('fa-regular','fa-heart','i-heart')
iHeart.style.color = 'hsl(0, 60%, 48%)'

anchorFavourite.appendChild(iHeart)

divCardBody.appendChild(heading)
divCardBody.appendChild(categoryName)
divCardBody.appendChild(AriaName)
divCardBody.appendChild(anchorView)
divCardBody.appendChild(anchorFavourite)

divCard.appendChild(image)
divCard.appendChild(divCardBody)


divRow.appendChild(divCard)
}

}

searchName.addEventListener('keyup',function () {
    searchByName(this.value)
})

searhLetter.addEventListener('keyup',function () {
    searhByLetter(this.value)
})

function searhByLetter(input) {

fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${input}`)
.then(function (response) {
   return response.json()
}).then(function (jsonResponseData) {

  divRow.innerHTML=''

if (jsonResponseData.meals === 'no data found') {
    divRow.textContent = 'there is no meals'
    divRow.style.fontSize = '50px'
    divRow.style.color = 'var(--theme-dark)'
}
else{
  
    getMeal(jsonResponseData.meals)
}


})
}

function searchByName(input) {
    
fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
.then(function (response) {
   return response.json()
}).then(function (jsonResponseData) {

  divRow.innerHTML=''

if (jsonResponseData.meals === null) {
    divRow.textContent = 'there is no meals'
    divRow.style.fontSize = '50px'
}
else{
   
    getMeal(jsonResponseData.meals)
}


})

}

RandomBtn.addEventListener('click',function () {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
.then(function (response) {
    return response.json()
}).then(function (jsonResponseData) {
    divRow.innerHTML = ''
getMeal(jsonResponseData.meals)   
})

}
) 
   











