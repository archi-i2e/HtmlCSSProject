function toggleContent(index) {
    const content = document.querySelectorAll('.hidden-content')[index];
    if (content.style.display === 'block') {
        content.style.display = 'none';
    } else {
        content.style.display = 'block';
    }
}