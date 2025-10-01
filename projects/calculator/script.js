const display = document.getElementById('display');
const keys = document.querySelector('.keys');

keys.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if(!btn) return;
    const val = btn.dataset.val;
    if(btn.id === 'clear'){ display.value = ''; return; }
    if(btn.id === 'equals'){ try{ display.value = eval(display.value || '0');} catch{ display.value='Error';} return; }
    if(val) display.value += val;
});

document.addEventListener('keydown', (e) =>{
    if(/[\d+\-*/.]/.test(e.key)) display.value += e.key;
    if(e.key === 'Enter') document.getElementById('equals').click();
    if(e.key === 'Backspace') display.value = display.value.slice(0,-1);
});



