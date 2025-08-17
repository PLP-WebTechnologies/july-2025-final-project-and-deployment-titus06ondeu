// Lightbox popup logic with accessibility + close behaviors
const popup = document.getElementById('popup');
const titleEl = document.getElementById('popup-title');
const descEl = document.getElementById('popup-description');

function showDetails(title, description){
  titleEl.textContent = title;
  descEl.textContent = description;
  popup.classList.add('show');
  popup.setAttribute('aria-hidden','false');
  // focus the close button for accessibility
  const closeBtn = popup.querySelector('.popup-close');
  setTimeout(()=> closeBtn && closeBtn.focus(), 50);
}
function closePopup(){
  popup.classList.remove('show');
  popup.setAttribute('aria-hidden','true');
}

// Close when clicking backdrop (but not inner content)
popup.addEventListener('click', (e)=>{
  if(e.target === popup){ closePopup(); }
});

// Close on Escape key
document.addEventListener('keydown', (e)=>{
  if(e.key === 'Escape' && popup.classList.contains('show')){
    closePopup();
  }
});


// ✅ This only APPENDS — no interference with existing JS
const footer = document.createElement('footer');
footer.style.background = "#2e7d32";
footer.style.color = "white";
footer.style.textAlign = "center";
footer.style.padding = "10px";
footer.style.marginTop = "20px";
footer.innerHTML = `Last updated: ${new Date().toLocaleDateString()} — Welcome to Tsavo National Park`;

document.body.appendChild(footer);
