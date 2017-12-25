    var link = document.querySelector (".login");
    var popup = document.querySelector(".modal-content");
    var close = popup.querySelector (".modal-content-close");
    var login = popup.querySelector("[name=login]");
    var password =popup.querySelector("[name=password]");
    var form = popup.querySelector("form");
    var storage = localStorage.getItem ("login");
    var linkMap = document.querySelector(".js-open-map");
    var popupMap = document.querySelector(".modal-content-map");
    var closeMap = popupMap.querySelector(".modal-content-close");

    link.addEventListener("click", function (event) {
      event.preventDefault();
      popup.classList.add("modal-content-show");
      
      if (storage) {
        login.value = storage;
        password.focus();
      } else {
        login.focus();
      }
    });
    
    close.addEventListener("click", function(event) {
      event.preventDefault();
      popup.classList.remove("modal-content-show");
      popup.classList.remove("modal-error");
    });


    form.addEventListener("submit", function(event) {
      if (!login.value || !password.value) {
        event.preventDefault();
        popup.classList.add("modal-error");
      } else {
        localStorage.setItem ("login", login.value);
      }
    });

    window.addEventListener("keydown", function(event) {
      if (event.keyCode ===27) {
        if (popup.classList.contains ("modal-content-show")){
          popup.classList.remove("modal-content-show");
          popup.classList.remove("modal-error");
        }
       }
    });



    linkMap.addEventListener("click", function(event){
      event.preventDefault();
      popupMap.classList.add("modal-content-map-show");
    });

    closeMap.addEventListener("click", function(event) {
      event.preventDefault();
      popupMap.classList.remove("modal-content-map-show");
    });

    window.addEventListener("keydown", function (event) {
      if (event.keyCode === 27) {
        if (popupMap.classList.contains("modal-content-map-show")) {
          popupMap.classList.remove("modal-content-map-show");
        }
      }
    });


