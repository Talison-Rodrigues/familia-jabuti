const titles = document.querySelectorAll('.banner-title-js'),
      cards = document.querySelectorAll('.all-attrs');

// API IntersectionObserver, observa os elementos alvos e faz algo, no caso, faz
// um transform/translateY
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active')
      observer.unobserve(entry.target)
    }
    else {
      entry.target.classList.remove('active')
    }
  })
}, {threshold: 1})

// Elementos observados
titles.forEach((title) => {
  observer.observe(title)
})

// Efeito de máquina de escrever
function typeWriter() {
  const text = titles[0].textContent
  let newText = ''
  let j = 0
  titles[0].textContent = ''
  let titleTimeout = setTimeout(function typeStarter() {
    newText += text[j]
    titles[0].textContent = newText;
    titleTimeout = setTimeout(typeStarter, 75)
    j++
    if (typeof text[j] === 'undefined') {
      clearTimeout(titleTimeout)
    }
  }, 100)
  
}

typeWriter()