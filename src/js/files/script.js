// Подключение функционала "Чертогов Фрилансера"
import { isMobile, menuClose} from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


const formImages = document.querySelectorAll('.form__item input');

formImages.forEach( (formImage) => {
  formImage.addEventListener('change', () => {
    uploadFile(formImage, formImage.files[0]);
    formImage.parentElement.addEventListener("click", () => {
      resetPhoto(formImage);
      formImage.value = '';
    })
    // const submits = document.querySelectorAll(".form__submit");
    // submits.forEach(submit => {
    //   submit.addEventListener ("click", () => {
    //     resetPhoto(formImage);
    //   })
    // });
    
  })

})

function resetPhoto (formImage) {
  formImage.parentElement.classList.remove("form__item_ok");
  formImage.parentElement.classList.add("form__item_add");
  formImage.nextElementSibling.innerHTML = ``;
}



function uploadFile(formImage, file) {
  // console.log(formImage.value);
  if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
    alert('Допустимые форматы изображений: jpeg, png, gif');
    formImage.value = '';
    return;
  }
  // if (file.size > 2 * 1024 * 1024) {
  //   alert('Файл должен быть менее 2 МБ');
  //   return;
  // }

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

const header = document.querySelector(".header");
const headerAnchors = header.querySelectorAll('a[href^="#"');
headerAnchors.forEach(anchor => {
  anchor.addEventListener( "click", () => {
    menuClose();
  })
});
