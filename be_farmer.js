document.getElementById('showTips').addEventListener('click', function () {
    const tipsList = document.getElementById('tipsList');
    if (tipsList.classList.contains('hidden')) {
        tipsList.classList.remove('hidden');
        this.textContent = 'Hide Tips';
    } else {
        tipsList.classList.add('hidden');
        this.textContent = 'Show Tips';
    }
});
