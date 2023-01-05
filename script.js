const discountedGamesSwiper = document.querySelector(".discountedGamesSwiper")
const cardBox = document.querySelector(".cardBox")


const gamesOnSale = [
  {
      
      price: "10",
      discountPercentage: "50",
      discountPrice: "5",
      imgSrc: "https://cdn.cloudflare.steamstatic.com/steam/apps/1938090/capsule_616x353.jpg?t=1671472823"

  }, 
  {
    
      price: "10",
      discountPercentage: "50",
      discountPrice: "5",
      imgSrc: "https://cdn1.epicgames.com/b30b6d1b4dfd4dcc93b5490be5e094e5/offer/RDR2476298253_Epic_Games_Wishlist_RDR2_2560x1440_V01-2560x1440-2a9ebe1f7ee202102555be202d5632ec.jpg"

  }, 
  {
      
      price: "10",
      discountPercentage: "50",
      discountPrice: "5",
      imgSrc: "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1663663573"

  }
]

const popularGames = [
  {
      title: "pippo",
      price: "10",
      imgSrc: "https://cdn.cloudflare.steamstatic.com/steam/apps/1938090/capsule_616x353.jpg?t=1671472823",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum dapibus faucibus. Pellentesque nisl diam, consequat quis convallis non, venenatis a enim. Donec sollicitudin imperdiet magna in facilisis. Nullam sollicitudin, ante a sagittis mattis, massa magna tincidunt nunc, id mattis nisi magna a erat. Phasellus vulputate cursus enim, ac dictum nisi pellentesque ultricies. Praesent a nulla ac libero lobortis semper. Praesent neque purus, pulvinar id diam at, gravida aliquam mi. Cras eleifend quam sed erat posuere aliquam."
  }, 
  {
      title: "baudo",
      price: "10",
      imgSrc: "https://cdn1.epicgames.com/b30b6d1b4dfd4dcc93b5490be5e094e5/offer/RDR2476298253_Epic_Games_Wishlist_RDR2_2560x1440_V01-2560x1440-2a9ebe1f7ee202102555be202d5632ec.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum dapibus faucibus. Pellentesque nisl diam, consequat quis convallis non, venenatis a enim. Donec sollicitudin imperdiet magna in facilisis. Nullam sollicitudin, ante a sagittis mattis, massa magna tincidunt nunc, id mattis nisi magna a erat. Phasellus vulputate cursus enim, ac dictum nisi pellentesque ultricies. Praesent a nulla ac libero lobortis semper. Praesent neque purus, pulvinar id diam at, gravida aliquam mi. Cras eleifend quam sed erat posuere aliquam."

  }, 
  {
      title: "god",
      price: "10",
      imgSrc: "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1663663573",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum dapibus faucibus. Pellentesque nisl diam, consequat quis convallis non, venenatis a enim. Donec sollicitudin imperdiet magna in facilisis. Nullam sollicitudin, ante a sagittis mattis, massa magna tincidunt nunc, id mattis nisi magna a erat. Phasellus vulputate cursus enim, ac dictum nisi pellentesque ultricies. Praesent a nulla ac libero lobortis semper. Praesent neque purus, pulvinar id diam at, gravida aliquam mi. Cras eleifend quam sed erat posuere aliquam."

  }, 
  {
      title: "god",
      price: "10",
      imgSrc: "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1663663573",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum dapibus faucibus. Pellentesque nisl diam, consequat quis convallis non, venenatis a enim. Donec sollicitudin imperdiet magna in facilisis. Nullam sollicitudin, ante a sagittis mattis, massa magna tincidunt nunc, id mattis nisi magna a erat. Phasellus vulputate cursus enim, ac dictum nisi pellentesque ultricies. Praesent a nulla ac libero lobortis semper. Praesent neque purus, pulvinar id diam at, gravida aliquam mi. Cras eleifend quam sed erat posuere aliquam."

  }, 
  {
      title: "god",
      price: "10",
      imgSrc: "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1663663573",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum dapibus faucibus. Pellentesque nisl diam, consequat quis convallis non, venenatis a enim. Donec sollicitudin imperdiet magna in facilisis. Nullam sollicitudin, ante a sagittis mattis, massa magna tincidunt nunc, id mattis nisi magna a erat. Phasellus vulputate cursus enim, ac dictum nisi pellentesque ultricies. Praesent a nulla ac libero lobortis semper. Praesent neque purus, pulvinar id diam at, gravida aliquam mi. Cras eleifend quam sed erat posuere aliquam."

  }, 
  {
      title: "god",
      price: "10",
      imgSrc: "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1663663573",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum dapibus faucibus. Pellentesque nisl diam, consequat quis convallis non, venenatis a enim. Donec sollicitudin imperdiet magna in facilisis. Nullam sollicitudin, ante a sagittis mattis, massa magna tincidunt nunc, id mattis nisi magna a erat. Phasellus vulputate cursus enim, ac dictum nisi pellentesque ultricies. Praesent a nulla ac libero lobortis semper. Praesent neque purus, pulvinar id diam at, gravida aliquam mi. Cras eleifend quam sed erat posuere aliquam."

  }, 
  {
      title: "god",
      price: "10",
      imgSrc: "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1663663573",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum dapibus faucibus. Pellentesque nisl diam, consequat quis convallis non, venenatis a enim. Donec sollicitudin imperdiet magna in facilisis. Nullam sollicitudin, ante a sagittis mattis, massa magna tincidunt nunc, id mattis nisi magna a erat. Phasellus vulputate cursus enim, ac dictum nisi pellentesque ultricies. Praesent a nulla ac libero lobortis semper. Praesent neque purus, pulvinar id diam at, gravida aliquam mi. Cras eleifend quam sed erat posuere aliquam."

  }, 
  {
      title: "god",
      price: "10",
      imgSrc: "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1663663573",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum dapibus faucibus. Pellentesque nisl diam, consequat quis convallis non, venenatis a enim. Donec sollicitudin imperdiet magna in facilisis. Nullam sollicitudin, ante a sagittis mattis, massa magna tincidunt nunc, id mattis nisi magna a erat. Phasellus vulputate cursus enim, ac dictum nisi pellentesque ultricies. Praesent a nulla ac libero lobortis semper. Praesent neque purus, pulvinar id diam at, gravida aliquam mi. Cras eleifend quam sed erat posuere aliquam."

  }
]

gamesOnSale.forEach(element => {
  const swiperElement = document.createElement('div')
  const swiperElementImg = document.createElement('img')
  const swiperElementPrice = document.createElement('div')
  swiperElementImg.src= element.imgSrc
  swiperElementPrice.classList.add("swiper-title")
  swiperElement.classList.add("swiper-slide")
  swiperElementPrice.innerHTML = `<div><span class='discount-percentege'>-${element.discountPercentage}%</span><del class='original-price'>${element.price}$</del><span class='current-price'>${element.discountPrice}$</span>`
  swiperElement.appendChild(swiperElementImg)
  swiperElement.appendChild(swiperElementPrice)
  discountedGamesSwiper.appendChild(swiperElement)
})


popularGames.forEach(element => {
  const cardRoot = document.createElement('div') 
  cardRoot.classList.add("col")
  const cardContent = document.createElement('div') 
  cardContent.classList.add("card")
  cardContent.classList.add("h-100")
  const cardBody = document.createElement('div') 
  cardBody.classList.add("card-body")
  const cardImage = document.createElement('img') 
  cardBody.classList.add("card-img-top")
  const cardTitle = document.createElement('h5') 
  cardRoot.classList.add("card-title")
  const cardText = document.createElement('p') 
  cardRoot.classList.add("card-text")
  cardImage.src = element.imgSrc
  cardTitle.textContent = element.title
  cardText.textContent = element.description
  cardRoot.appendChild(cardContent)
  cardContent.appendChild(cardImage)
  cardContent.appendChild(cardBody)
  cardBody.appendChild(cardTitle)
  cardBody.appendChild(cardText) 
  cardBox.appendChild(cardRoot)
})





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



  