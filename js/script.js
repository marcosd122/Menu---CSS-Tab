const tabs = document.querySelectorAll('.tab');

tabs.forEach((e) => {
    e.addEventListener('click', () => {
        tabs.forEach(tab => {
            tab.classList.remove('active');
        })
        e.classList.add('active');
    })
})