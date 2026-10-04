let themeSwitch = document.getElementById('themeSwitch')


themeSwitch.addEventListener('change',function () {
    
    let html = document.querySelector('html')

if (this.checked) {
    
    html.removeAttribute('theme')
    html.setAttribute('theme','dark')
      localStorage.setItem('theme', 'dark')
}else{
   
    html.removeAttribute('theme')
    html.setAttribute('theme','light')
      localStorage.setItem('theme','light')
}



})


let theme = localStorage.getItem('theme')
let html = document.querySelector('html')

if (theme === 'dark') {
     html.removeAttribute('theme')
    html.setAttribute('theme', 'dark')
    themeSwitch.checked = true
} else {
    html.removeAttribute('theme')
     html.setAttribute('theme','light')
    themeSwitch.checked = false
}
