import keys from './keys.mjs';

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
  <p class="info"> Клавиатура создана в операционной системе Windows </p>
  <p class="info"> Для переключения языка комбинация:  ctrl + alt </p>
</div>`;

const ROWS = document.querySelectorAll('.row');
ROWS[0].innerHTML = insertCode(0, 14);
ROWS[1].innerHTML = insertCode(14, 29);
ROWS[2].innerHTML = insertCode(29, 42);
ROWS[3].innerHTML = insertCode(42, 55);
ROWS[4].innerHTML = insertCode(55, 64);


const specialKeysNames = ['Backspace', 'Tab', 'Delete', 'CapsLock', 'Enter', 'Shift', 'Ctrl', 'Win', 'Space', 'Alt'];
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
let isCtrl = false;
let isAlt = false;
let isShift = false;

function insertCode(start, end) {
  let out = '';
  for (start; start < end; start++) {
    out += `
      <div class="key ${keys[start].code}">
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

function addLetter(target) {
  let rusOrEng = target.querySelector('.rus:not(.hidden), .eng:not(.hidden)');
  let clickedLetter = Array.from(rusOrEng.children).find(child => !child.classList.contains('hidden')).innerText;
  let startPos = TEXTAREA.selectionStart;
  let endPos = TEXTAREA.selectionEnd;
  let prev = TEXTAREA.value.slice(0, startPos);
  let post = TEXTAREA.value.slice(startPos);

  if (!specialKeysNames.includes(clickedLetter)) {
    TEXTAREA.value = prev + clickedLetter + post;
    TEXTAREA.selectionStart = prev.length + 1;
    TEXTAREA.selectionEnd = prev.length + 1;
  }
  if (clickedLetter === '') {
    TEXTAREA.value = prev + ' ' + post;
    TEXTAREA.selectionStart = prev.length + 1;
    TEXTAREA.selectionEnd = prev.length + 1;
  }
  if (clickedLetter === 'Backspace') {
    if (startPos != endPos) {
      TEXTAREA.value = TEXTAREA.value.slice(0, startPos) + TEXTAREA.value.slice(endPos);
      TEXTAREA.selectionStart = startPos;
      TEXTAREA.selectionEnd = startPos;
    } else if (startPos !== 0) {
      TEXTAREA.value = TEXTAREA.value.slice(0, startPos - 1) + TEXTAREA.value.slice(endPos);
      TEXTAREA.selectionStart = startPos - 1;
      TEXTAREA.selectionEnd = startPos - 1;
    }
  }
  if (clickedLetter === 'Delete') {
    if (startPos != endPos) {
      TEXTAREA.value = TEXTAREA.value.slice(0, startPos) + TEXTAREA.value.slice(endPos);
      TEXTAREA.selectionStart = startPos;
      TEXTAREA.selectionEnd = startPos;
    } else if (startPos !== TEXTAREA.value.length) {
      TEXTAREA.value = TEXTAREA.value.slice(0, startPos) + TEXTAREA.value.slice(endPos + 1, TEXTAREA.value.length);
      TEXTAREA.selectionStart = startPos;
      TEXTAREA.selectionEnd = startPos;
    }
  }
  if (clickedLetter === 'Tab') {
    TEXTAREA.value = prev + '    ' + post;
    TEXTAREA.selectionStart = prev.length + 4;
    TEXTAREA.selectionEnd = prev.length + 4;
  }
  if (clickedLetter === 'Enter') {
    TEXTAREA.value = prev + '\n' + post;
    TEXTAREA.selectionStart = prev.length + 1;
    TEXTAREA.selectionEnd = prev.length + 1;
  }
  if (target.classList.contains('CapsLock')) target.classList.toggle('active')
  else target.classList.add('active');
}

function LangCheck() {
  if (isCtrl && isAlt) {
    localStorage.getItem('lang') === 'ru' ? localStorage.setItem('lang', 'en') : localStorage.setItem('lang', 'ru');
    console.log(localStorage.getItem('lang'))
  }
  if (localStorage.getItem('lang') === 'en') {
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
}

LangCheck();

let pressTarget;
document.addEventListener('keydown', function (event) {
  pressTarget = document.querySelector(`.${event.code}`);
  event.preventDefault();
  TEXTAREA.focus();
  addLetter(pressTarget);
  specialKeysCheck();
  caseCheck();
  LangCheck();
});
document.addEventListener('keyup', function (event) {
  let key = document.querySelector(`.${event.code}`);
  if (!key.classList.contains('CapsLock')) key.classList.remove('active');
  specialKeysCheck();
  caseCheck();
});

let clickTarget;
KEYBOARD.addEventListener('mousedown', function (event) {
  if (event.target.closest('.key')) {
    clickTarget = event.target.closest('.key');
    addLetter(clickTarget);
    specialKeysCheck();
    caseCheck();
    LangCheck();
  };
});
KEYBOARD.addEventListener('mouseup', function (event) {
  if (!clickTarget.classList.contains('CapsLock')) clickTarget.classList.remove('active');
  specialKeysCheck();
  caseCheck();
});
document.addEventListener('click', function () {
  TEXTAREA.focus();
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