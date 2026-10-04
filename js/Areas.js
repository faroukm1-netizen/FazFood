
fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
.then(function (response) {
    return response.json()
}).then(function (jsonResponseData) {
   Areas = jsonResponseData.meals
   getArea(Areas)
})

var divRowAreas = document.getElementById('divRowAreas')

 function getArea(meals) {
    
for (var Area of meals) {
    
var divCard = document.createElement('div')
divCard.classList.add('card','mt-5','mx-2')
divCard.style.width = '18rem'

var divCardBody = document.createElement('div')
divCardBody.classList.add('card-body','d-flex','gap-5')

var strAreaName = document.createElement('h5')
strAreaName.classList.add('card-title')
strAreaName.textContent = Area.strArea



var anchor = document.createElement('a')
anchor.classList.add('anchor-card','btn')
anchor.href = `viewMeals.html?area=${Area.strArea}`
anchor.textContent = 'view meals'

divCardBody.appendChild(strAreaName)

divCardBody.appendChild(anchor)

divCard.appendChild(divCardBody)
divRowAreas.appendChild(divCard)

}
}

function searchArea(input) {
    
var filteredAreas = Areas.filter(function (area) {
    return area.strArea.toLowerCase().includes(input.toLowerCase())
})

divRowAreas.innerHTML = ''

getArea(filteredAreas)
}