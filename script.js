const cipherMap = {
    'a': ':3:3:3',
    'b': ':3:3:D',
    'c': ':3:3:P',
    'd': ':3:3:O',
    'e': ':3:D:3',
    'f': ':3:D:D',
    'g': ':3:D:P',
    'h': ':3:D:O',
    'i': ':3:P:3',
    'j': ':3:P:D',
    'k': ':3:P:P',
    'l': ':3:P:O',
    'm': ':3:O:3',
    'n': ':3:O:D',
    'o': ':3:O:P',
    'p': ':3:O:O',
    'q': ':D:3:3',
    'r': ':D:3:D',
    's': ':D:3:P',
    't': ':D:3:O',
    'u': ':D:D:3',
    'v': ':D:D:D',
    'w': ':D:D:P',
    'x': ':D:D:O',
    'y': ':D:P:3',
    'z': ':D:P:D',
    ' ': ':D:P:P',
    '!': ':D:P:O',
    '?': ':D:O:3',
    ',': ':D:O:D',
    '.': ':D:O:P',
    ';': ':D:O:O',
    ':': ':P:3:3',
    "'": ':P:3:D',
    '"': ':P:3:P',
    '(': ':P:3:O',
    ')': ':P:D:3',
    '[': ':P:D:D',
    ']': ':P:D:P',
    '{': ':P:D:O',
    '}': ':P:P:3',
    '@': ':P:P:D',
    '#': ':P:P:P',
    '$': ':P:P:O',
    '%': ':P:O:3',
    '&': ':P:O:D',
    '*': ':P:O:P',
    '+': ':P:O:O',
    '-': ':O:3:3',
    '/': ':O:3:D',
    '\\': ':O:3:P',
    '=': ':O:3:O',
    '<': ':O:D:3',
    '>': ':O:D:D',
    '^': ':O:D:P',
    '~': ':O:D:O',
    '0': ':O:P:3',
    '1': ':O:P:D',
    '2': ':O:P:P',
    '3': ':O:P:O',
    '4': ':O:O:3',
    '5': ':O:O:D',
    '6': ':O:O:P',
    '7': ':O:O:O',
    '8': ':3:3:3:3',
    '9': ':D:D:D:D',
    'а': ':3:3:D',
    'б': ':3:D:3',
    'в': ':3:D:D',
    'г': ':3:D:P',
    'д': ':3:D:O',
    'е': ':3:P:3',
    'ё': ':3:P:D',
    'ж': ':3:P:P',
    'з': ':3:P:O',
    'и': ':3:O:3',
    'й': ':3:O:D',
    'к': ':3:O:P',
    'л': ':3:O:O',
    'м': ':D:3:3',
    'н': ':D:3:D',
    'о': ':D:3:P',
    'п': ':D:3:O',
    'р': ':D:D:3',
    'с': ':D:D:D',
    'т': ':D:D:P',
    'у': ':D:D:O',
    'ф': ':D:P:3',
    'х': ':D:P:D',
    'ц': ':D:P:P',
    'ч': ':D:P:O',
    'ш': ':D:O:3',
    'щ': ':D:O:D',
    'ъ': ':D:O:P',
    'ы': ':D:O:O',
    'ь': ':P:3:3',
    'э': ':P:3:D',
    'ю': ':P:3:P',
    'я': ':P:3:O'
};

const decipherMap = {};
for (const key in cipherMap) {
    decipherMap[cipherMap[key]] = key;
}

function cypher() {
    const inputText = document.getElementById('inputText').value.toLowerCase();
    let outputText = '';
    for (let i = 0; i < inputText.length; i++) {
        outputText += cipherMap[inputText[i]] || inputText[i];
    }
    document.getElementById('outputText').value = outputText;
}

function decypher() {
    const inputText = document.getElementById('inputText').value;
    let outputText = '';
    const pattern = /(:3:3:3|:3:3:D|:3:3:P|:3:3:O|:3:D:3|:3:D:D|:3:D:P|:3:D:O|:3:P:3|:3:P:D|:3:P:P|:3:P:O|:3:O:3|:3:O:D|:3:O:P|:3:O:O|:D:3:3|:D:3:D|:D:3:P|:D:3:O|:D:D:3|:D:D:D|:D:D:P|:D:D:O|:D:P:3|:D:P:D|:D:P:P|:D:P:O|:D:O:3|:D:O:D|:D:O:P|:D:O:O|:P:3:3|:P:3:D|:P:3:P|:P:3:O|:P:D:3|:P:D:D|:P:D:P|:P:D:O|:P:P:3|:P:P:D|:P:P:P|:P:P:O|:P:O:3|:P:O:D|:P:O:P|:P:O:O|:O:3:3|:O:3:D|:O:3:P|:O:3:O|:O:D:3|:O:D:D|:O:D:P|:O:D:O|:O:P:3|:O:P:D|:O:P:P|:O:P:O|:O:O:3|:O:O:D|:O:O:P|:O:O:O|:3:3:3:3|:D:D:D:D|:3:3:D|:3:D:3|:3:D:D|:3:D:P|:3:D:O|:3:P:3|:3:P:D|:3:P:P|:3:P:O|:3:O:3|:3:O:D|:3:O:P|:3:O:O|:D:3:3|:D:3:D|:D:3:P|:D:3:O|:D:D:3|:D:D:D|:D:D:P|:D:D:O|:D:P:3|:D:P:D|:D:P:P|:D:P:O|:D:O:3|:D:O:D|:D:O:P|:D:O:O|:P:3:3|:P:3:D|:P:3:P|:P:3:O|:P:D:3|:P:D:D|:P:D:P|:P:D:O|:P:P:3|:P:P:D|:P:P:P|:P:P:O|:P:O:3|:P:O:D|:P:O:P|:P:O:O|:O:3:3|:O:3:D|:O:3:P|:O:3:O|:O:D:3|:O:D:D|:O:D:P|:O:D:O|:O:P:3|:O:P:D|:O:P:P|:O:P:O|:O:O:3|:O:O:D|:O:O:P|:O:O:O)/g;
    let match;
    while ((match = pattern.exec(inputText)) !== null) {
        outputText += decipherMap[match[0]] || '?';
    }
    document.getElementById('outputText').value = outputText;
}

function copyText() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('Cypher copied to clipboard!');
}
