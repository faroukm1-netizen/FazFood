
var search =location.search
var params = new URLSearchParams(search)
var area = params.get('area')


fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
.then(function (response) {
    return response.json()
}).then(function (jsonResponseData) {
    getMealByArea(jsonResponseData.meals)
})

var divRow = document.getElementById('divRow')

function getMealByArea(meals) {
    

    if (meals===null) {
   alert('there is no meals')
   location.href='./Areas.html'

}else{
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

var countryName = document.createElement('p')
countryName.classList.add('card-text')
countryName.textContent = `country : ${meal.strCountry}`
countryName.style.fontSize = '18px'

var AriaName = document.createElement('p')
AriaName.classList.add('card-text')
AriaName.textContent = `Aria : ${meal.strArea}`
AriaName.style.fontSize = '18px'


divCardBody.appendChild(heading)
divCardBody.appendChild(countryName)
divCardBody.appendChild(AriaName)


divCard.appendChild(image)
divCard.appendChild(divCardBody)


divRow.appendChild(divCard)
}


}
}

