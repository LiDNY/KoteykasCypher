const cipherMap = {
    'a': ':3:3:3',
    'b': ':3:3:D',
    'c': ':3:3:P',
    'd': ':3:D:3',
    'e': ':3:D:D',
    'f': ':3:D:P',
    'g': ':3:P:3',
    'h': ':3:P:D',
    'i': ':3:P:P',
    'j': ':D:3:3',
    'k': ':D:3:D',
    'l': ':D:3:P',
    'm': ':D:D:3',
    'n': ':D:D:D',
    'o': ':D:D:P',
    'p': ':D:P:3',
    'q': ':D:P:D',
    'r': ':D:P:P',
    's': ':P:3:3',
    't': ':P:3:D',
    'u': ':P:3:P',
    'v': ':P:D:3',
    'w': ':P:D:D',
    'x': ':P:D:P',
    'y': ':P:P:3',
    'z': ':P:P:D',
    ' ': ':P:P:P'
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
    const pattern = /(:3|:D|:P)/g;
    const chunks = inputText.match(pattern);
    if (chunks) {
        for (let i = 0; i < chunks.length; i += 3) {
            const chunk = chunks.slice(i, i + 3).join('');
            outputText += decipherMap[chunk] || '?';
        }
    }
    document.getElementById('outputText').value = outputText;
}
