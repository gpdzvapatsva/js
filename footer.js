let footer = document.querySelector('#footer')

// create elements for footer
let fterEl = document.createElement('footer')
let fterDivEl = document.createElement('div')
let fterDivEl1 = document.createElement('div')
let fterDivEl2 = document.createElement('div')
let fterDivEl3 = document.createElement('div')
let fterDivEl4 = document.createElement('div')
let fterDivEl5 = document.createElement('div')
let footerDivEl = document.createElement('div')

// issue classes , id and content
fterEl.classList.add('footer')
fterDivEl.classList.add('box1')
footerDivEl.classList.add('copywrite')

// first array
let ftrarr1 = [' Help ',' Email ',' FAQ ',' Product Care ', ' Stores ']
ftrarr1.forEach((footlink)=>{
    return fterDivEl1.innerHTML += `<p>${footlink}</p>`
})

// second array
let ftrarr2 = [' Services ',' Repairs ',' Persionalisation ',' Recomended Dry-cleaners ']
ftrarr2.forEach((footlink)=>{
    return fterDivEl2.innerHTML += `<p>${footlink}</p>`
})

// third array
let ftrarr3 = [' About Store ',' Fasion Shows ',' Arts and Culture ',' Latest News ', ' Careers ']
ftrarr3.forEach((footlink)=>{
    return fterDivEl3.innerHTML += `<p>${footlink}</p>`
})

// fourth array
let ftrarr4 = [' Connect ',' Follow Us ']
ftrarr4.forEach((footlink)=>{
    return fterDivEl4.innerHTML += `<p>${footlink}</p>`
})

// copywrite claim
footerDivEl.innerHTML += `<p><span id="currentYear"></span>&copy; Modern Muse</p>`


// footer append
footer.append(fterEl)
fterEl.appendChild(fterDivEl)
fterEl.appendChild(footerDivEl)
fterDivEl.appendChild(fterDivEl1)
fterDivEl.appendChild(fterDivEl2)
fterDivEl.appendChild(fterDivEl3)
fterDivEl.appendChild(fterDivEl4)
document.body.appendChild(footer)

// copywrite year function 
document.getElementById("currentYear").textContent = new Date().getUTCFullYear()

