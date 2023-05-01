import keys from './keys.mjs';

// document.addEventListener('keypress', function (event) {
//   console.log(event)
// })

const body = document.querySelector('body');
body.innerHTML = `
<div class="wrapper"> 
  <div class="keyboard"> 
    <div class="row"></div>
    <div class="row"></div>
    <div class="row"></div>
    <div class="row"></div>
    <div class="row"></div>
  </div>
</div>`;

body.innerHTML += '<div style="font-size:50px">Прямо сейчас я работаю над таском. <br> Проверьте, пожалуйста, чуть позже. </div>'


const ROWS = document.querySelectorAll('.row');

function init() {
  function insertCode(start, end) {
    let out = '';
    for (start; start < end; start++) {
      out += `
      <div class="keyboard--key key ${keys[start].code}">
        <span class="rus">
          <span class="caseDown">${keys[start].ru}</span>
          <span class="caseUp hidden">${keys[start].ruShift}</span>
        </span>
        <span class="eng hidden">
          <span class="caseDown">${keys[start].en}</span>
          <span class="caseUp hidden">${keys[start].enShift}</span>
        </span>
      </div>
      `;
    };
    return out;
  }

  ROWS[0].innerHTML = insertCode(0, 14);
  ROWS[1].innerHTML = insertCode(14, 29);
  ROWS[2].innerHTML = insertCode(29, 42);
  ROWS[3].innerHTML = insertCode(42, 55);
  ROWS[4].innerHTML = insertCode(55, 64);
}

init();

const ALL_KEYS = document.querySelectorAll('.key');
const CAPS = document.querySelector('.CapsLock');
const L_CTRL = document.querySelector('.ControlLeft');
const R_CTRL = document.querySelector('.ControlRight');
const L_ALT = document.querySelector('.AltLeft');
const R_ALT = document.querySelector('.AltRight');
let isCaps = false;
let isEng = false;

document.addEventListener('keydown', function (event) {
  let key = document.querySelector(`.${event.code}`);
  key.classList.add('active');

  if ((L_CTRL.classList.contains('active') || R_CTRL.classList.contains('active')) &&
    (L_ALT.classList.contains('active') || R_ALT.classList.contains('active'))) {
      isEng = !isEng;
  }

  if (isEng) {
    ALL_KEYS.forEach((key) => {
      key.querySelector('.rus').classList.add('hidden');
      key.querySelector('.eng').classList.remove('hidden');
    });
  } 
  else {
    ALL_KEYS.forEach((key) => {
      key.querySelector('.rus').classList.remove('hidden');
      key.querySelector('.eng').classList.add('hidden');
    }); 
  }

  if (isEng) stateChange(1)
  else stateChange(0);

  function stateChange(n) {
    if (key.classList.contains('ShiftLeft') || key.classList.contains('ShiftRight')) {
      ALL_KEYS.forEach((key) => {
        key.querySelectorAll('.caseDown')[n].classList.add('hidden');
        key.querySelectorAll('.caseUp')[n].classList.remove('hidden');
      });
    };

    if (key.classList.contains('CapsLock')) {
      if (isCaps === false) {
        CAPS.classList.add('active');
        ALL_KEYS.forEach((key) => {
          key.querySelectorAll('.caseDown')[n].classList.add('hidden');
          key.querySelectorAll('.caseUp')[n].classList.remove('hidden');
        });
        isCaps = true;
      } else {
        CAPS.classList.remove('active');
        ALL_KEYS.forEach((key) => {
          key.querySelectorAll('.caseDown')[n].classList.remove('hidden');
          key.querySelectorAll('.caseUp')[n].classList.add('hidden');
        });
        isCaps = false;
      };
    };
  };
});

document.addEventListener('keyup', function (event) {
  let key = document.querySelector(`.${event.code}`);
  key.classList.remove('active');

  if (isCaps === false) CAPS.classList.remove('active');
  else CAPS.classList.add('active');

  if (key.classList.contains('ShiftLeft') || key.classList.contains('ShiftRight')) {
    ALL_KEYS.forEach((key) => {
      key.querySelectorAll('.caseDown')[0].classList.remove('hidden');
      key.querySelectorAll('.caseUp')[0].classList.add('hidden');
    });
  };
});


// document.addEventListener('keydown', function(event) {
//   console.log('down')
//   console.log(event.charCode)
//   console.log(event.key)
// });
// document.addEventListener('keyup', function(event) {
//   console.log('up')
//   console.log(event.charCode)
//   console.log(event.key)
// });
// document.addEventListener('keypress', function(event) {
//   console.log('press')
//   console.log(event.charCode)
//   console.log(event.key)
// });
