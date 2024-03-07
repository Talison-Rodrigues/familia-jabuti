const titles = document.querySelectorAll('.banner-title-js'),
      cards = document.querySelectorAll('.all-attrs'),
      menu = document.querySelector('.menu'),
      menuBtn = document.querySelector('.menu-button');

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

menuBtn.addEventListener('click', () => {
  if (!menu.classList.contains('active')) {
    menu.classList.add('active');
    menuBtn.classList.add('button-active')
  }
  else {
    menu.classList.remove('active')
    menuBtn.classList.remove('button-active');
  }
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
    titleTimeout = setTimeout(typeStarter, 125)
    j++
    if (typeof text[j] === 'undefined') {
      clearTimeout(titleTimeout)
    }
  }, 0)
  
}

typeWriter()