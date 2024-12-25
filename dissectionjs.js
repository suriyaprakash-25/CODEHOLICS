let selectedImage = null;

function showText(imageNumber) {
    selectedImage = imageNumber;
    const inputText = document.getElementById("inputText").value;

    if (selectedImage === 1) {
        typeText(document.getElementById("text1"), inputText);
    } else if (selectedImage === 2) {
        typeText(document.getElementById("text2"), inputText);
    } else if (selectedImage === 3) {
        typeText(document.getElementById("text3"), inputText);
    }
}

function typeText(element, text) {
    element.textContent = ''; // Clear previous text
    let i = 0;

    function typingEffect() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typingEffect, 100);
        }
    }

    typingEffect();
}
