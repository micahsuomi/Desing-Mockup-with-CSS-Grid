const designButton = document.querySelector('.design-label');
const productionButton = document.querySelector('.production-label');
const designContent = document.querySelector('.design-content');
const productionContent = document.querySelector('.production-content');

productionButton.addEventListener('click', () => {
    designContent.classList.add('hide');
    productionContent.classList.remove('hide');
    productionButton.style.backgroundColor= "white";
    designButton.style.backgroundColor= "#efefef";

})

designButton.addEventListener('click', () => {
    productionContent.classList.add('hide');
    designContent.classList.remove('hide');
    designButton.style.backgroundColor= "white";
    productionButton.style.backgroundColor= "#efefef";
    
})