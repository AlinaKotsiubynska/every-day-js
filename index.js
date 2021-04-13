// const EVENT_PHASES = {
//   NONE: 0,
//   CAPTURE: 1,
//   TARGET: 2,
//   BUBBLE: 3
// };

/*

  1. Протестировать основные принципы распространения 
  (event propagation) и всплытия (event bubbling) событий

  см. в index.html

*/

// const itemDivs = document.querySelectorAll(".itemDiv");

// // аналог DOMContentLoaded
// window.onload = () => {
//   // itemDivs.forEach(item => {
//   //   item.addEventListener("click", clickedDiv);
//   // });

//   itemDivs[2].addEventListener("click", test);
// };

// const clickedDiv = e => {
//   e.stopPropagation();
//   console.log(e.eventPhase);
//   if (e.eventPhase === EVENT_PHASES.TARGET) {
//     clearStyles();
//     e.target.classList.add("selected");
//   }
// };

// const clearStyles = () => {
//   itemDivs.forEach(item => {
//     if (item.classList.contains("selected")) {
//       item.classList.remove("selected");
//     }
//   });
// };

// const test = e => {
//   e.stopPropagation();
//   console.log(e.target.id);
//   console.log(e.currentTarget.id);
//   if (e.target.id === e.currentTarget.id) {
//     //
//   }
// };

/* 

  2. Используя делегирование событий обработать 
  нажатие любой кнопки внутри #container
  окрасив квадрат #square в соответствующий цвет. 
  Кнопка после нажатия должна стать активной,
  после второго нажатия активный стиль нужно удалить 
  и вернуть квадрат в исходный вид

  см. в index.html

*/
const containerEl = document.getElementById('container')
const squareEl = document.getElementById('square')
const buttons = [...containerEl.children];

containerEl.addEventListener('click', handlerOnBtnClick)

function changeSquareCollor(currentBtn) {
  currentBtn.classList.toggle('activeBtn')
  squareEl.style.backgroundColor = currentBtn.classList.contains('activeBtn') ? currentBtn.textContent.toLowerCase() : '';
}

function disablePreviousBtn(currentBtn) {
  const activeButtons = buttons.filter(btn => btn.classList.contains('activeBtn'))
  
  if (!activeButtons.length) return;
  activeButtons.forEach(button => {
    if (currentBtn !== button) button.classList.remove('activeBtn');
  })
}

function handlerOnBtnClick(evt) {
  const currentBtn = evt.target;
  disablePreviousBtn(currentBtn)
  changeSquareCollor(currentBtn)
}
console.log(containerEl);
console.log(squareEl.style.color);


/* 

  3. Посмотреть на примере как работают 
  throttle и debounce (использовать lodash)
     В каких случиях их использовать.

*/

// let counter = 0;

// window.addEventListener(
//   "scroll",
//   _.throttle(() => {
//     // document.getElementById("statContainer").innerHTML = counter++;
//   }, 1500)
// );

// const input = document.getElementById("chattyInput");

// input.addEventListener(
//   "input",
//   _.debounce(() => {
//     document.getElementById("statContainer").innerHTML = counter++;
//   }, 1000)
// );

/* 

  4. Используя IntersectionObserver посмотреть 
  на примере принцип работы данного функционала.
     Так же использовать pollyfil

*/

// if ("IntersectionObserver" in window) {
//   const options = {
//     root: null,
//     rootMargin: "5px",
//     // threshold: 0.5
//     threshold: [0.2, 0.4, 0.6, 0.8, 1]
//   };

//   const callback = (entries, observer) => {
//     console.log(entries);
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         console.log(entry.intersectionRatio);
//         entry.target.style.backgroundColor = "red";
//         entry.target.style.opacity = entry.intersectionRatio;
//         // observer.unobserve(entry.target);
//       }
//     });
//   };

//   const observer = new IntersectionObserver(callback, options);

//   const targetElem = document.querySelectorAll(".addScroll");

//   targetElem.forEach(target => {
//     observer.observe(target);
//   });
// }

/* 

  5. Написать LazyLoad картинок с помощью 
  IntersectionObserver

*/

const options = {
  threshold: 0.4
};

const callback = (entries, obsrv) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src;
      obsrv.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(callback, options);

const images = document.querySelectorAll(".lazy");

images.forEach(image => {
  observer.observe(image);
});
