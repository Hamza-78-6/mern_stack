function encrypted_character(temp) {
    let temp_char_number = temp.charCodeAt(0);
    temp_char_number = temp_char_number + 4;
    return String.fromCharCode(temp_char_number);
}

function decrypted_character(temp) {
    let temp_char_number = temp.charCodeAt(0);
    temp_char_number = temp_char_number - 4;
    return String.fromCharCode(temp_char_number);
}

function encrypted_string(text) {
    let encrypted_text = '';
    for (let i = 0; i < text.length; i++) {
        encrypted_text += encrypted_character(text[i]);
    }
    return encrypted_text;
}

function decrypted_string(text) {
    let decrypted_text = '';
    for (let i = 0; i < text.length; i++) {
        decrypted_text += decrypted_character(text[i]);
    }
    return decrypted_text;
}

function shuffle_text(text) {
    let temp = text.split('');
    let head = 0;
    let tail = text.length - 1;
    while (head < tail) {
        let tempChar = temp[head];
        temp[head] = temp[tail];
        temp[tail] = tempChar;
        head++;
        tail--;
    }
    return temp.join('');
}

function unshuffle_text(text) {
    let temp = text.split('');
    let head = 0;
    let tail = text.length - 1;
    while (head < tail) {
        let tempChar = temp[head];
        temp[head] = temp[tail];
        temp[tail] = tempChar;
        head++;
        tail--;
    }
    return temp.join('');
}

function text_to_hex(text) {
    let hex = '';
    for (let i = 0; i < text.length; i++) {
        hex += text.charCodeAt(i).toString(16);
    }
    return hex;
}

function hex_to_text(hex) {
    let text = '';
    for (let i = 0; i < hex.length; i += 2) {
        text += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    }
    return text;
}

function scramble_text(temp) {
    let encrypted_1_text = encrypted_string(temp);
    let encrypted_2_text = shuffle_text(encrypted_1_text);
    let encrypted_3_text = text_to_hex(encrypted_2_text);
    return encrypted_3_text;
}

function unscramble_text(temp) {
    // Convert hex to text
    let hex_text = hex_to_text(temp);

    // Unshuffle text
    let unshuffled_text = unshuffle_text(hex_text);

    // Decrypt text
    let decrypted_text = decrypted_string(unshuffled_text);
    
    return decrypted_text;
}

window.onload = () => {
    let encrypt = document.getElementById("encrypt");
    let decrypt = document.getElementById("decrypt");
    let input = document.getElementById("text");
    let output = document.getElementById("output");

    encrypt.addEventListener("click", () => {
        output.innerText = scramble_text(input.value);
    });

    decrypt.addEventListener("click", () => {
        output.innerText = unscramble_text(input.value);
    });
}
