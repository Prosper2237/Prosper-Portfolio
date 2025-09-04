const display = document.getElementById('display');
const keys = document.querySelector('.keys');

keys.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn) return; 

    if (btn.id === 'clear') {
        display.value = '';
        return;
    }
    if (btn.id === 'back') {
        display.value = display.value.slice(0, -1);
        return;
    }
    if (btn.id === 'eq') {
        try{
            // evaluate sagfely (basic)
            // eslint-disable-next-line no-eval
            const result =  eval(display.value);
            display.value = (result !== undefined) ? result : '';
        } catch {
            display.value = 'Error';
        }
        return;
    }
    const val = btn.dataset.val;
    if (val !== undefined) {
        display.value += val;
    }
});