import keys from './keys.mjs';

// document.addEventListener('keypress', function (event) {
//   console.log(event)
// })

const BODY = document.querySelector('body');
BODY.innerHTML = `
<div class="wrapper"> 
  <textarea class="textarea" rows="10" cols="50"></textarea>
  <div class="keyboard"> 
    <div class="row"></div>
    <div class="row"></div>
    <div class="row"></div>
    <div class="row"></div>
    <div class="row"></div>
  </div>
</div>`;

BODY.innerHTML += '<div style="font-size:50px">Прямо сейчас я работаю над таском. <br> Проверьте, пожалуйста, чуть позже. </div>'


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
          <span class="caps hidden">${keys[start].ruCaps}</span>
          <span class="ShiftCaps hidden">${keys[start].ruShiftCaps}</span>
        </span>
        <span class="eng hidden">
          <span class="caseDown">${keys[start].en}</span>
          <span class="caseUp hidden">${keys[start].enShift}</span>
          <span class="caps hidden">${keys[start].enCaps}</span>
          <span class="ShiftCaps hidden">${keys[start].enShiftCaps}</span>
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

const TEXTAREA = document.querySelector('.textarea');
const KEYBOARD = document.querySelector('.keyboard');
const ALL_KEYS = document.querySelectorAll('.key');
const CAPS = document.querySelector('.CapsLock');
const L_CTRL = document.querySelector('.ControlLeft');
const R_CTRL = document.querySelector('.ControlRight');
const L_ALT = document.querySelector('.AltLeft');
const R_ALT = document.querySelector('.AltRight');
const L_SHIFT = document.querySelector('.ShiftLeft');
const R_SHIFT = document.querySelector('.ShiftRight');
let isCaps = false;
let isCapsActive = false;
let isCtrl = false;
let isAlt = false;
let isShift = false;
let isEng = false;

function specialKeysCheck() {
  (CAPS.classList.contains('active')) ? isCaps = true : isCaps = false;
  (L_CTRL.classList.contains('active') || R_CTRL.classList.contains('active')) ? isCtrl = true : isCtrl = false;
  (L_ALT.classList.contains('active') || R_ALT.classList.contains('active')) ? isAlt = true : isAlt = false;
  (L_SHIFT.classList.contains('active') || R_SHIFT.classList.contains('active')) ? isShift = true : isShift = false;
}

function caseCheck() {
  if (isShift && isCaps) {
    ALL_KEYS.forEach((key) => {
      key.querySelectorAll('.ShiftCaps').forEach((elem) => elem.classList.remove('hidden'));
      key.querySelectorAll('.caseUp').forEach((elem) => elem.classList.add('hidden'));
      key.querySelectorAll('.caseDown').forEach((elem) => elem.classList.add('hidden'));
      key.querySelectorAll('.caps').forEach((elem) => elem.classList.add('hidden'));
    });
  }
  else if (isShift) {
    ALL_KEYS.forEach((key) => {
      key.querySelectorAll('.caseUp').forEach((elem) => elem.classList.remove('hidden'));
      key.querySelectorAll('.caseDown').forEach((elem) => elem.classList.add('hidden'));
      key.querySelectorAll('.caps').forEach((elem) => elem.classList.add('hidden'));
      key.querySelectorAll('.ShiftCaps').forEach((elem) => elem.classList.add('hidden'));
    });
  }
  else if (isCaps) {
    ALL_KEYS.forEach((key) => {
      key.querySelectorAll('.caps').forEach((elem) => elem.classList.remove('hidden'));
      key.querySelectorAll('.caseDown').forEach((elem) => elem.classList.add('hidden'));
      key.querySelectorAll('.caseUp').forEach((elem) => elem.classList.add('hidden'));
      key.querySelectorAll('.ShiftCaps').forEach((elem) => elem.classList.add('hidden'));
    });
  }
  else {
    ALL_KEYS.forEach((key) => {
      key.querySelectorAll('.caseDown').forEach((elem) => elem.classList.remove('hidden'));
      key.querySelectorAll('.ShiftCaps').forEach((elem) => elem.classList.add('hidden'));
      key.querySelectorAll('.caseUp').forEach((elem) => elem.classList.add('hidden'));
      key.querySelectorAll('.caps').forEach((elem) => elem.classList.add('hidden'));
    });
  };
};


document.addEventListener('keydown', function (event) {
  let key = document.querySelector(`.${event.code}`);
  if (key.classList.contains('CapsLock')) key.classList.toggle('active')
  else key.classList.add('active');
  if (key.classList.contains('Tab')) event.preventDefault()

  TEXTAREA.focus();

  specialKeysCheck();
  caseCheck();

  if (isCtrl && isAlt) isEng = !isEng;
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
  };
});

document.addEventListener('keyup', function (event) {
  let key = document.querySelector(`.${event.code}`);
  if (!key.classList.contains('CapsLock')) key.classList.remove('active');
  specialKeysCheck();
  caseCheck();
});

const specialKeysNames = ['Backspace', 'Tab', 'Delete', 'CapsLock', 'Enter', 'Shift', 'Ctrl', 'Win', 'Space', 'Alt']
let clickTarget;

KEYBOARD.addEventListener('mousedown', function (event) {
  if (event.target.closest('.key')) {
    clickTarget = event.target.closest('.key');

    let rusOrEng = clickTarget.querySelector('.rus:not(.hidden), .eng:not(.hidden)');
    let clickedLetter = Array.from(rusOrEng.children).find(child => !child.classList.contains('hidden')).innerText;


    // TODO : CURSOR 

    // let cursor = TEXTAREA.selectionStart;
    // let cursor2 = TEXTAREA.selectionEnd;
    // if (!specialKeysNames.includes(clickedLetter)) {
    //   let prev = TEXTAREA.value.slice(0, cursor)
    //   let post = TEXTAREA.value.slice(cursor)
    //   TEXTAREA.value = prev + clickedLetter + post;
    //   console.log(cursor, cursor2)
    // }

    
    if (!specialKeysNames.includes(clickedLetter)) TEXTAREA.value += clickedLetter;
    if (clickedLetter === 'Backspace') TEXTAREA.value = TEXTAREA.value.slice(0, -1);
    if (clickedLetter === '') TEXTAREA.value += ' ';
    if (clickedLetter === 'Tab') TEXTAREA.value += '    ';

    if (clickTarget.classList.contains('CapsLock')) clickTarget.classList.toggle('active')
    else clickTarget.classList.add('active');

    specialKeysCheck();
    caseCheck();
  };
});
KEYBOARD.addEventListener('mouseup', function (event) {
  if (!clickTarget.classList.contains('CapsLock')) clickTarget.classList.remove('active');
  specialKeysCheck();
  caseCheck();
});

let hoverTarget;
document.addEventListener('mouseover', function (event) {
  if (event.target.closest('.key')) {
    hoverTarget = event.target.closest('.key');
    hoverTarget.classList.add('hover-effect');
  }
})
document.addEventListener('mouseout', function (event) {
  if (event.target.closest('.key')) {
    hoverTarget.classList.remove('hover-effect');
  }
})