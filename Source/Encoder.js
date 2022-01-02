function encode() {
    const data = document.getElementById('toEncode').value.split('')
    const encodedP = document.getElementById('encoded')
    let encodedData = []
    
    data.forEach(character => {
        encodedData.push(map.get(character))
    });
    encodedP.innerText = encodedData.join('$')
}

function decode() {
    const data = document.getElementById('encoded').value
    const decodedData = document.getElementById('decoded')
    let decodedChar = []
    let keys = [...map.keys()]
    data.split('$').forEach(encodedChar => {
    
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i]
            if (map.get(key) === encodedChar) {
                decodedChar.push(key)
            }
        }
    })
    decodedData.innerText = decodedChar.join('')
}