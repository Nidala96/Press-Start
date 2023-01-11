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

  }, 
  {
      
      price: "10",
      discountPercentage: "50",
      discountPrice: "5",
      imgSrc: "https://cdn.cloudflare.steamstatic.com/steam/apps/368260/capsule_616x353.jpg?t=1671733540"

  }, 
  {
      
      price: "10",
      discountPercentage: "50",
      discountPrice: "5",
      imgSrc: "https://cdn.cloudflare.steamstatic.com/steam/apps/1085660/capsule_616x353_italian.jpg?t=1671639469"

  }, 
  {
      
      price: "10",
      discountPercentage: "50",
      discountPrice: "5",
      imgSrc: "https://cdn.cloudflare.steamstatic.com/steam/apps/252490/capsule_616x353.jpg?t=1671160999"

  }
]

const popularGames = [
  {
      title: "Civilization VI",
      price: "10",
      imgSrc: "https://cdn.cloudflare.steamstatic.com/steam/apps/289070/capsule_616x353.jpg?t=1671048172",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum dapibus faucibus. Pellentesque nisl diam, consequat quis convallis non, venenatis a enim. Donec sollicitudin imperdiet magna in facilisis. Nullam sollicitudin, ante a sagittis mattis, massa magna tincidunt nunc, id mattis nisi magna a erat. Phasellus vulputate cursus enim, ac dictum nisi pellentesque ultricies. Praesent a nulla ac libero lobortis semper. Praesent neque purus, pulvinar id diam at, gravida aliquam mi. Cras eleifend quam sed erat posuere aliquam."
  }, 
  {
      title: "Flight Simulator",
      price: "10",
      imgSrc: "https://cdn.cloudflare.steamstatic.com/steam/apps/1250410/capsule_616x353.jpg?t=1668186331",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum dapibus faucibus. Pellentesque nisl diam, consequat quis convallis non, venenatis a enim. Donec sollicitudin imperdiet magna in facilisis. Nullam sollicitudin, ante a sagittis mattis, massa magna tincidunt nunc, id mattis nisi magna a erat. Phasellus vulputate cursus enim, ac dictum nisi pellentesque ultricies. Praesent a nulla ac libero lobortis semper. Praesent neque purus, pulvinar id diam at, gravida aliquam mi. Cras eleifend quam sed erat posuere aliquam."

  }, 
  {
      title: "Tom Clancy's Rainbow Six Siege",
      price: "10",
      imgSrc: "https://cdn.cloudflare.steamstatic.com/steam/apps/359550/capsule_616x353.jpg?t=1671482386",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum dapibus faucibus. Pellentesque nisl diam, consequat quis convallis non, venenatis a enim. Donec sollicitudin imperdiet magna in facilisis. Nullam sollicitudin, ante a sagittis mattis, massa magna tincidunt nunc, id mattis nisi magna a erat. Phasellus vulputate cursus enim, ac dictum nisi pellentesque ultricies. Praesent a nulla ac libero lobortis semper. Praesent neque purus, pulvinar id diam at, gravida aliquam mi. Cras eleifend quam sed erat posuere aliquam."

  }, 
  {
      title: "Football Manager 2023",
      price: "10",
      imgSrc: "https://cdn.cloudflare.steamstatic.com/steam/apps/1904540/capsule_616x353.jpg?t=1668082258",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum dapibus faucibus. Pellentesque nisl diam, consequat quis convallis non, venenatis a enim. Donec sollicitudin imperdiet magna in facilisis. Nullam sollicitudin, ante a sagittis mattis, massa magna tincidunt nunc, id mattis nisi magna a erat. Phasellus vulputate cursus enim, ac dictum nisi pellentesque ultricies. Praesent a nulla ac libero lobortis semper. Praesent neque purus, pulvinar id diam at, gravida aliquam mi. Cras eleifend quam sed erat posuere aliquam."

  }, 
  {
      title: "Fifa 23",
      price: "10",
      imgSrc: "https://cdn.cloudflare.steamstatic.com/steam/apps/1811260/capsule_616x353.jpg?t=1672758344",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum dapibus faucibus. Pellentesque nisl diam, consequat quis convallis non, venenatis a enim. Donec sollicitudin imperdiet magna in facilisis. Nullam sollicitudin, ante a sagittis mattis, massa magna tincidunt nunc, id mattis nisi magna a erat. Phasellus vulputate cursus enim, ac dictum nisi pellentesque ultricies. Praesent a nulla ac libero lobortis semper. Praesent neque purus, pulvinar id diam at, gravida aliquam mi. Cras eleifend quam sed erat posuere aliquam."

  }, 
  {
      title: "War Thunder Apex Predators",
      price: "10",
      imgSrc: "https://cdn.cloudflare.steamstatic.com/steam/apps/236390/capsule_616x353.jpg?t=1671733778",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum dapibus faucibus. Pellentesque nisl diam, consequat quis convallis non, venenatis a enim. Donec sollicitudin imperdiet magna in facilisis. Nullam sollicitudin, ante a sagittis mattis, massa magna tincidunt nunc, id mattis nisi magna a erat. Phasellus vulputate cursus enim, ac dictum nisi pellentesque ultricies. Praesent a nulla ac libero lobortis semper. Praesent neque purus, pulvinar id diam at, gravida aliquam mi. Cras eleifend quam sed erat posuere aliquam."

  }, 
  {
      title: "Hogwarts Legacy",
      price: "10",
      imgSrc: "https://cdn.cloudflare.steamstatic.com/steam/apps/990080/capsule_616x353.jpg?t=1668268562",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum dapibus faucibus. Pellentesque nisl diam, consequat quis convallis non, venenatis a enim. Donec sollicitudin imperdiet magna in facilisis. Nullam sollicitudin, ante a sagittis mattis, massa magna tincidunt nunc, id mattis nisi magna a erat. Phasellus vulputate cursus enim, ac dictum nisi pellentesque ultricies. Praesent a nulla ac libero lobortis semper. Praesent neque purus, pulvinar id diam at, gravida aliquam mi. Cras eleifend quam sed erat posuere aliquam."

  }, 
  {
      title: "High On Life",
      price: "10",
      imgSrc: "https://cdn.cloudflare.steamstatic.com/steam/apps/1583230/capsule_616x353.jpg?t=1671088821",
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
  cardImage.classList.add("card-img")
  cardBody.classList.add("card-img-top")
  const cardTitle = document.createElement('h2') 
  cardRoot.classList.add("card-title")
  const cardText = document.createElement('p') 
  cardText.classList.add("card-text-2")
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



  