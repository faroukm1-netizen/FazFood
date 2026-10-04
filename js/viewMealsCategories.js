let searh = location.search
let params = new URLSearchParams(searh)
let category = params.get('category')

fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
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

var anchorView = document.createElement('a')
anchorView.classList.add('anchor-card','btn')
anchorView.textContent = 'view Details'
anchorView.href = `detailes.html?id=${meal.idMeal}`

divCardBody.appendChild(heading)

divCardBody.appendChild(anchorView)

divCard.appendChild(image)
divCard.appendChild(divCardBody)


divRow.appendChild(divCard)
}

}