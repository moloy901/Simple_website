document.addEventListener('DOMContentLoaded',function(){
  const btn = document.getElementById('sayHello');
  const nameEl = document.getElementById('name');
  const yearEl = document.getElementById('year');
  yearEl.textContent = new Date().getFullYear();

  btn.addEventListener('click',function(){
    const name = nameEl.textContent.trim() || 'friend';
    alert(`Hello ${name}! Welcome to my personal profile page.`);
  });
});
