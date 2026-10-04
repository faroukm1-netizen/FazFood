
// View Cards 

fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
.then(function (response) {
    return response.json()
}).then(function (jsonResponseData) {
     getMeal(jsonResponseData.meals)
})

var divRow = document.getElementById('divRow')


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


var iHeart = document.createElement('i')
iHeart.classList.add('fa-regular','fa-heart','i-heart')
iHeart.style.color = 'hsl(0, 60%, 48%)'


anchorFavourite.appendChild(iHeart)

anchorFavourite.addEventListener('click',function (e) {
    
e.preventDefault()

var heart = this.querySelector('i')

if (heart.classList.contains('fa-regular')) {
    heart.classList.remove('fa-regular')
    heart.classList.add('fa-solid')


}else {
    heart.classList.remove('fa-solid')
    heart.classList.add('fa-regular')
}

})

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







