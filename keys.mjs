const keysNames = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal',
  'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash',
  'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
  'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'Space']

const letters = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'BackSpace',
  'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'Slash',
  'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
  'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Slash', 'Up',
  'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Left', 'Bottom', 'Right', 'Ctrl']

const CharCodes = [1105, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61,
  1081, 1094, 1091, 1082, 1077, 1085, 1075, 1096, 1097, 1079, 1093, 1098, 92,
  1092, 1099, 1074, 1072, 1087, 1088, 1086, 1083, 1076, 1078, 1101, 13,
  1103, 1095, 1089, 1084, 1080, 1090, 1100, 1073, 1102, 46,
  32]

const keys = [
  // 1
  { code: 'Backquote', ru: 'ё', ruShift: 'Ё', en: '`', enShift: '~' },
  { code: 'Digit1', ru: '1', ruShift: '!', en: '1', enShift: '!' },
  { code: 'Digit2', ru: '2', ruShift: '"', en: '2', enShift: '@' },
  { code: 'Digit3', ru: '3', ruShift: '№', en: '3', enShift: '#' },
  { code: 'Digit4', ru: '4', ruShift: ';', en: '4', enShift: '$' },
  { code: 'Digit5', ru: '5', ruShift: '%', en: '5', enShift: '%' },
  { code: 'Digit6', ru: '6', ruShift: ':', en: '6', enShift: '^' },
  { code: 'Digit7', ru: '7', ruShift: '?', en: '7', enShift: '&' },
  { code: 'Digit8', ru: '8', ruShift: '*', en: '8', enShift: '*' },
  { code: 'Digit9', ru: '9', ruShift: '(', en: '9', enShift: '(' },
  { code: 'Digit0', ru: '0', ruShift: ')', en: '0', enShift: ')' },
  { code: 'Minus', ru: '-', ruShift: '_', en: '-', enShift: '_' },
  { code: 'Equal', ru: '=', ruShift: '+', en: '=', enShift: '+' },
  { code: 'Backspace', ru: 'Backspace', ruShift: 'Backspace', en: 'Backspace', enShift: 'Backspace' },

  //2
  { code: 'Tab', ru: 'Tab', ruShift: 'Tab', en: 'Tab', enShift: 'Tab' },
  { code: 'KeyQ', ru: 'й', ruShift: 'Й', en: 'q', enShift: 'Q' },
  { code: 'KeyW', ru: 'ц', ruShift: 'Ц', en: 'w', enShift: 'W' },
  { code: 'KeyE', ru: 'у', ruShift: 'У', en: 'e', enShift: 'E' },
  { code: 'KeyR', ru: 'к', ruShift: 'К', en: 'r', enShift: 'R' },
  { code: 'KeyT', ru: 'е', ruShift: 'Е', en: 't', enShift: 'T' },
  { code: 'KeyY', ru: 'н', ruShift: 'Н', en: 'y', enShift: 'Y' },
  { code: 'KeyU', ru: 'г', ruShift: 'Г', en: 'u', enShift: 'U' },
  { code: 'KeyI', ru: 'ш', ruShift: 'Ш', en: 'i', enShift: 'I' },
  { code: 'KeyO', ru: 'щ', ruShift: 'Щ', en: 'o', enShift: 'O' },
  { code: 'KeyP', ru: 'з', ruShift: 'З', en: 'p', enShift: 'P' },
  { code: 'BracketLeft', ru: 'х', ruShift: 'Х', en: '[', enShift: '{' },
  { code: 'BracketRight', ru: 'ъ', ruShift: 'Ъ', en: ']', enShift: '}' },
  { code: 'Backslash', ru: '/', ruShift: '/', en: '/', enShift: '|' },
  { code: 'Delete', ru: 'Delete', ruShift: 'Delete', en: 'Delete', enShift: 'Delete' },

  //3
  { code: 'CapsLock', ru: 'CapsLock', ruShift: 'CapsLock', en: 'CapsLock', enShift: 'CapsLock' },
  { code: 'KeyA', ru: 'ф', ruShift: 'Ф', en: 'a', enShift: 'A' },
  { code: 'KeyS', ru: 'ы', ruShift: 'Ы', en: 's', enShift: 'S' },
  { code: 'KeyD', ru: 'в', ruShift: 'В', en: 'd', enShift: 'D' },
  { code: 'KeyF', ru: 'а', ruShift: 'А', en: 'f', enShift: 'F' },
  { code: 'KeyG', ru: 'п', ruShift: 'П', en: 'g', enShift: 'G' },
  { code: 'KeyH', ru: 'р', ruShift: 'Р', en: 'h', enShift: 'H' },
  { code: 'KeyJ', ru: 'о', ruShift: 'О', en: 'j', enShift: 'J' },
  { code: 'KeyK', ru: 'л', ruShift: 'Л', en: 'k', enShift: 'K' },
  { code: 'KeyL', ru: 'д', ruShift: 'Д', en: 'l', enShift: 'L' },
  { code: 'Semicolon', ru: 'ж', ruShift: 'Ж', en: ';', enShift: ':' },
  { code: 'Quote', ru: 'э', ruShift: 'Э', en: '"', enShift: '"' },
  { code: 'Enter', ru: 'Enter', ruShift: 'Enter', en: 'Enter', enShift: 'Enter' },

  //4
  { code: 'ShiftLeft', ru: 'Shift', ruShift: 'Shift', en: 'Shift', enShift: 'Shift' },
  { code: 'KeyZ', ru: 'я', ruShift: 'Я', en: 'z', enShift: 'Z' },
  { code: 'KeyX', ru: 'ч', ruShift: 'Ч', en: 'x', enShift: 'X' },
  { code: 'KeyC', ru: 'с', ruShift: 'С', en: 'c', enShift: 'C' },
  { code: 'KeyV', ru: 'м', ruShift: 'М', en: 'v', enShift: 'V' },
  { code: 'KeyB', ru: 'и', ruShift: 'И', en: 'b', enShift: 'B' },
  { code: 'KeyN', ru: 'т', ruShift: 'Т', en: 'n', enShift: 'N' },
  { code: 'KeyM', ru: 'ь', ruShift: 'Ь', en: 'm', enShift: 'M' },
  { code: 'Comma', ru: 'б', ruShift: 'Б', en: ',', enShift: '<' },
  { code: 'Period', ru: 'ю', ruShift: 'Ю', en: '.', enShift: '>' },
  { code: 'Slash', ru: '.', ruShift: ',', en: '/', enShift: '?' },
  { code: 'ArrowUp', ru: '▲', ruShift: '▲', en: '▲', enShift: '▲' },
  { code: 'ShiftRight', ru: 'Shift', ruShift: 'Shift', en: 'Shift', enShift: 'Shift' },

  //5
  { code: 'ControlLeft', ru: 'Ctrl', ruShift: 'Ctrl', en: 'Ctrl', enShift: 'Ctrl' },
  { code: 'MetaLeft', ru: 'Win', ruShift: 'Win', en: 'Win', enShift: 'Win' },
  { code: 'AltLeft', ru: 'Alt', ruShift: 'Alt', en: 'Alt', enShift: 'Alt' },
  { code: 'Space', ru: '', ruShift: '', en: '', enShift: '' },
  { code: 'AltRight', ru: 'Alt', ruShift: 'Alt', en: 'Alt', enShift: 'Alt' },
  { code: 'ArrowLeft', ru: '◄', ruShift: '◄', en: '◄', enShift: '◄' },
  { code: 'ArrowDown', ru: '▼', ruShift: '▼', en: '▼', enShift: '▼' },
  { code: 'ArrowRight', ru: '►', ruShift: '►', en: '►', enShift: '►' },
  { code: 'ControlRight', ru: 'Ctrl', ruShift: 'Ctrl', en: 'Ctrl', enShift: 'Ctrl' },
];

export default keys;