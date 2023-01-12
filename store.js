const tableContent = document.querySelector('.table-content')

const allGames = [
  { title: 'Civilization VI', platforms: 'Windows', released: '2016', price: '5.99' },
  { title: 'Elden Ring', platforms: 'Windows', released: '2022', price: '59,99' },
  { title: 'Football Manager 2023', platforms: 'Windows', released: '2022', price: '59.99' },
  { title: 'Stardew Valley', platforms: 'Windows', released: '2016', price: '13,99' },
  { title: 'Cuphead', platforms: 'Windows, macOS', released: '2017', price: '19,99' },
  { title: "Assassin's Creed Valhalla", platforms: 'Windows', released: '2022', price: '59,99' },
  { title: 'Dead Space', platforms: 'Windows', released: '2023', price: '59,99' },
  { title: 'Monster Hunter Rise', platforms: 'Windows', released: '2022', price: '39,99' },
  { title: 'Hitman 3', platforms: 'Windows', released: '2022', price: '39,99' },
  { title: 'Graveyard Keeper', platforms: 'Windows, macOS', released: '2018', price: '16,79' },
  { title: 'Days Gone', platforms: 'Windows', released: '2021', price: '49,99' },
  { title: 'Outer Wilds', platforms: 'Windows', released: '2020', price: '20,99' },
  { title: 'Tiberborn', platforms: 'Windows, macOS', released: '2021', price: '20,99' },
  { title: 'Hollow Knight', platforms: 'Windows', released: '2017', price: '14,99' },
  { title: 'Rust', platforms: 'Windows, macOS', released: '2021', price: '39,99' },
  { title: 'New World', platforms: 'Windows', released: '2021', price: '38,99' }
]

allGames.forEach(element => {
    const tableRow = document.createElement('tr')
    const title = document.createElement('th')
    const platforms = document.createElement('td')
    const released = document.createElement('td')
    const price = document.createElement('td')
    title.textContent = element.title
    platforms.textContent = element.platforms
    released .textContent = element.released
    price.textContent = element.price + "$"
    tableRow.appendChild(title)
    tableRow.appendChild(platforms)
    tableRow.appendChild(released)
    tableRow.appendChild(price)
    tableContent.appendChild(tableRow)
})