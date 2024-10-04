document.getElementById('language-form').addEventListener('change', function (event) {
    if (event.target.value === 'japanese') {
        window.location.href = './index.html';
    } else if (event.target.value === 'english') {
        window.location.href = '/path-to-english';
    }
});
