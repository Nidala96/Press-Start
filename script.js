const discountedGamesSwiper = document.querySelector(".discountedGamesSwiper")

const swiperElement = document.createElement('div')
const swiperElementImg = document.createElement('img')
const swiperElementPrice = document.createElement('div')
swiperElementImg.src= "https://cdn.cloudflare.steamstatic.com/steam/bundles/11358/x08aat3rzzoid3mp/header_ratio.jpg?t=1562691890"
swiperElementPrice.classList.add("swiper-title")
swiperElement.classList.add("swiper-slide")
swiperElementPrice.innerHTML = "<div><span class='discount-percentege'>-50%</span> <del class='original-price'>30$</del><span class='current-price'> 15$</p></span>" 
swiperElement.appendChild(swiperElementImg)
swiperElement.appendChild(swiperElementPrice)




discountedGamesSwiper.appendChild(swiperElement)


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



  const gamesOnSales = [
    {
        
        price: "10",
        discount: "50",
        imgSrc: "https://cdn.cloudflare.steamstatic.com/steam/bundles/11358/x08aat3rzzoid3mp/header_ratio.jpg?t=1562691890"

    }, 
    {
      
        price: "10",
        discount: "50",
        imgSrc: "https://cdn.cloudflare.steamstatic.com/steam/bundles/11358/x08aat3rzzoid3mp/header_ratio.jpg?t=1562691890"

    }, 
    {
        
        price: "10",
        discount: "50",
        imgSrc: "https://cdn.cloudflare.steamstatic.com/steam/bundles/11358/x08aat3rzzoid3mp/header_ratio.jpg?t=1562691890"

    }
  ]

  