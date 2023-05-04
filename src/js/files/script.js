// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


const formImages = document.querySelectorAll('.form__item input');

console.log(formImages);
formImages.forEach( (formImage) => {
  formImage.addEventListener('change', () => {
    uploadFile(formImage, formImage.files[0]);
    formImage.parentElement.addEventListener("click", () => {
      formImage.parentElement.classList.remove("form__item_ok");
      formImage.parentElement.classList.add("form__item_add");
      formImage.nextElementSibling.innerHTML = ``;
      formImage.value = '';
    })

    
  })

})


function uploadFile(formImage, file) {
  // console.log(formImage.value);
  if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
    alert('Это не изображение');
    formImage.value = '';
    return;
  }
  if (file.size > 2 * 1024 * 1024) {
    alert('Файл должен быть менее 2 МБ');
    return;
  }

  let reader = new FileReader();
  reader.onload = function(e) {
    formImage.nextElementSibling.innerHTML = `<img src="${e.target.result}" alt="Превью">`;
    formImage.parentElement.classList.remove("form__item_add");
    formImage.parentElement.classList.add("form__item_ok");
  }
  reader.onerror = function (e) {
    alert("Файл не выбран")
  }
  reader.readAsDataURL(file);
}