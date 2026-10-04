// Categories 

fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
.then(function (response) {
   return response.json()
}).then(function (jsonResponseData) {


    getCategory(jsonResponseData.categories)
})


var divRowCategories = document.getElementById('divRowCategories');

function getCategory(categories) {
    
for (var category of categories) {
    
var divCard = document.createElement('div')
divCard.classList.add('card','mt-5','col-6','mx-2')
divCard.style.width = '32rem'

var image = document.createElement('img')
image.src = category.strCategoryThumb
image.alt = 'there is no picture'

var divCardBody = document.createElement('div')
divCardBody.classList.add('card-body')

var categoryName = document.createElement('h4')
categoryName.classList.add('card-title')
categoryName.textContent = `category : ${category.strCategory}`

var categoryInstructions = document.createElement('p')
categoryInstructions.classList.add('card-text')
categoryInstructions.style.fontSize = '18px'
categoryInstructions.textContent = category.strCategoryDescription

var anchor = document.createElement('a')
anchor.classList.add('btn', 'anchor-card', 'ms-2')
anchor.textContent = 'view meals'
anchor.style.width = '8rem'
anchor.href = `viewMealsCategories.html?category=${category.strCategory}`




divCardBody.appendChild(categoryName)
divCardBody.appendChild(categoryInstructions)
divCardBody.appendChild(anchor)

divCard.appendChild(image)
divCard.appendChild(divCardBody)


divRowCategories.appendChild(divCard)

}
}
