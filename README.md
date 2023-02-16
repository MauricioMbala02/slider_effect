# Slide Lezard Crew

Esse Slide foi criado com Html, CSS e JavaScript, biblioteca utilizada `SwiperJs`

O slide foi criado por mim `Maurício Mbala`, veja meu perfil.: https://github.com/MauricioMbala02

<br><br>

## Visualização do Slide

![Screenshot](slider.png)
<br>

## Visualização em vídeo

<video src="apresentar.webm" width="100%" loop autoplay muted></video>

<br><br>

Links da biblioteca .:

<br>

 <ul><li>CSS ----> <a href="style/swiper-bundle.min.css" download="swiper-bundle.min.css">swiper-bundle.min.css</a></li></ul>
<ul><li>JavaScript ----> <a href="js/swiper-bundle.min.js" download="swiper-bundle.min.js">swiper-bundle.min.js</a></li></ul>

<br>

### Meu código JavaScript

```javascript

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      950: {
        slidesPerView: 3,
      }
    },
  });

/** © Maurício Mbala - My Code JavaScript **/

```

<br><br>

#### E é tudo, muito obrigado por visitar meu repositório e volte sempre para programarmos juntos!😎️

<br>

<img src="programador.webp" style="width: 500px; border-radius: 8px;">

<br><br><br>

## &copy; Maurício Mbala - My Project
