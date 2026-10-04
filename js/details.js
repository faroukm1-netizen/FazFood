var search = window.location.search
var params = new URLSearchParams(search)
var id = params.get('id')

fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
.then(function (response) {
   return response.json()
}).then(function (jsonResponseData) {
  getMealById(jsonResponseData.meals)  
})



var containerElement = document.getElementById('containerElement')
var divElement = document.createElement('div')
divElement.classList.add('row','gap-2')

function getMealById(meals) {
    
for (var meal of meals) {
    
var divWrapper = document.createElement('div')
divWrapper.classList.add('d-flex', 'align-items-center' ,'justify-content-center' ,'gap-5','details-tablet')

var divImage =  document.createElement('div')

var image = document.createElement('img')
image.src = meal.strMealThumb
image.alt = 'there is not a picture'

var divRow = document.createElement('div')
divRow.classList.add('row', 'my-3')

var mealName = document.createElement('h2')
mealName.classList.add('col-4')
mealName.textContent = `meal : ${meal.strMeal}`

var mealCategory = document.createElement('h2')
mealCategory.classList.add('col-4')
mealCategory.textContent = `category : ${meal.strCategory}`

var mealArea = document.createElement('h2')
mealArea.classList.add('col-4')
mealArea.textContent = `Area : ${meal.strArea}`

var Instructions = document.createElement('p')
Instructions.classList.add('lead', 'mt-3', 'col-12')
Instructions.textContent = `Instructions : ${meal.strInstructions}`


for(var i = 1; i <= 20; i++) {
    var ingredients = document.createElement('h5')
    ingredients.classList.add('col-3')
    ingredients.textContent = `${meal[`strIngredient${i}`]}`

    divElement.appendChild(ingredients)
}

var textIngreident = document.createElement('h3')
textIngreident.textContent='ingredients :'
textIngreident.classList.add('my-5')

var anchor = document.createElement('a')
anchor.classList.add('btn', 'anchor-card', 'ms-2')
anchor.textContent = 'youtube video'
anchor.style.width = '8rem'
anchor.href = meal.strYoutube

var anchorSource = document.createElement('a')
anchorSource.classList.add('btn', 'anchor-card', 'ms-2')
anchorSource.textContent = 'source'
anchorSource.style.width = '8rem'
anchorSource.href = meal.strSource

divRow.appendChild(mealName)
divRow.appendChild(mealCategory)
divRow.appendChild(mealArea)
divRow.appendChild(Instructions)
divRow.appendChild(textIngreident)
divRow.appendChild(divElement)
divRow.appendChild(anchor)
divRow.appendChild(anchorSource)
divRow.style.color = 'var(--theme-dark)'

divImage.appendChild(image)

divWrapper.appendChild(divImage)
divWrapper.appendChild(divRow)

containerElement.appendChild(divWrapper)
}
}

let xExit = document.getElementById('xExit')
xExit.style.color = 'var(--theme-dark)'

xExit.addEventListener('click',function () {
  window.location.href = './index.html'
})

