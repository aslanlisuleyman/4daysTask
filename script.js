
const left = document.getElementById("left");
const images = document.getElementById("sliders_img");
const right = document.getElementById("right");
let slideIndex = 0;
const slides = [
    "https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/01/asus-rog-strix-scar-2022-gaming-laptop-1.jpg",
    "https://i.ytimg.com/vi/3CA1FLZAE18/maxresdefault.jpg",
    "https://press.razer.com/wp-content/uploads/2023/11/Razer-8KHz-PR-KV-980x500-1.jpg",
    "https://i.ytimg.com/vi/weU1pYsMnRk/maxresdefault.jpg",
    "https://robots.net/wp-content/uploads/2023/09/15-best-msi-gaming-pc-for-2023-1694674877.jpeg"
];

left.addEventListener("click", (e) => {
    slideIndex--;
    renderUI(slideIndex);
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
        renderUI(slideIndex);
    }
});

right.addEventListener("click", (e) => {
    slideIndex++;
    renderUI(slideIndex);
    if (slideIndex > slides.length - 1) {
        slideIndex = 0;
        renderUI(slideIndex);
    }
});

function renderUI(slideIndex) {
    images.src = slides[slideIndex];
}

setInterval(() => {
    slideIndex++;
    renderUI(slideIndex);
    if (slideIndex > slides.length - 1) {
        slideIndex = 0;
        renderUI(slideIndex);
    }
}, 3500);

const cards = [
    {
      image: 'https://gamenotebaku.az/cdn/storage/product_images/qKXTHatKKCJbSxrEH/fullHD/qKXTHatKKCJbSxrEH.png',
      label: 'Yeni',
      name: 'ASUS ROG Strix G18 (RTX4050)',
      price: '3419 azn',
      kargo: 'Azerbaijan, Bakı ünvanına 0azn qiymətinə çatdırılır'
    },
    {
      image: 'https://gamenotebaku.az/cdn/storage/product_images/ybzxYdgwbGF8k7g9b/fullHD/ybzxYdgwbGF8k7g9b.png',
      label: 'Yeni',
      name: 'ASUS ROG G16',
      price: '2999 azn',
      kargo: 'Azerbaijan, Bakı ünvanına 0azn qiymətinə çatdırılır'
    },
    {
        image: 'https://gamenotebaku.az/cdn/storage/product_images/ZY8ZKJFB7P9HHw6ou/fullHD/ZY8ZKJFB7P9HHw6ou.png',
        label: 'Yeni',
        name: 'ASUS ROG Strix G16 (RTX4060)',
        price: '3199 azn',
        kargo: 'Azerbaijan, Bakı ünvanına 0azn qiymətinə çatdırılır'
      },
      {
        image: 'https://gamenotebaku.az/cdn/storage/product_images/TDuS96HAGeGTSMaZf/fullHD/TDuS96HAGeGTSMaZf.png',
        label: 'Yeni',
        name: 'ASUS ROG G16 (RTX4050)',
        price: '2799 azn',
        kargo: 'Azerbaijan, Bakı ünvanına 0azn qiymətinə çatdırılır'
      },
      {
        image: 'https://gamenotebaku.az/cdn/storage/product_images/g3udQn3K6LNTMzd7n/fullHD/g3udQn3K6LNTMzd7n.png',
        label: 'Yeni',
        name: 'ASUS TUF Gaming F15 (2023)',
        price: '2399 azn',
        kargo: 'Azerbaijan, Bakı ünvanına 0azn qiymətinə çatdırılır'
      },
      {
        image: 'https://gamenotebaku.az/cdn/storage/product_images/tseDAiTNdQm4FmWmY/fullHD/tseDAiTNdQm4FmWmY.png',
        label: 'Yeni',
        name: 'ASUS ROG Strix G17 (RTX4060)',
        price: '3899 azn',
        kargo: 'Azerbaijan, Bakı ünvanına 0azn qiymətinə çatdırılır'
      },
      {
        image: 'https://gamenotebaku.az/cdn/storage/product_images/tggSkcsbMTuaWTY3g/fullHD/tggSkcsbMTuaWTY3g.png',
        label: 'Yeni',
        name: 'ASUS ROG Zephyrus M16 (RTX3070Ti)',
        price: '3999 azn',
        kargo: 'Azerbaijan, Bakı ünvanına 0azn qiymətinə çatdırılır'
      },
      {
        image: 'https://gamenotebaku.az/cdn/storage/product_images/MqdbDTW7xNiD35x2W/fullHD/MqdbDTW7xNiD35x2W.png',
        label: 'Yeni',
        name: 'ASUS ROG Strix G18 (2023)',
        price: '4699 azn',
        kargo: 'Azerbaijan, Bakı ünvanına 0azn qiymətinə çatdırılır'
      },
      {
        image: 'https://gamenotebaku.az/cdn/storage/product_images/YpvwkQptvmtLr3wLy/fullHD/YpvwkQptvmtLr3wLy.png',
        label: 'Yeni',
        name: 'ASUS ROG Strix G16 (RTX4070)',
        price: '4499 azn',
        kargo: 'Azerbaijan, Bakı ünvanına 0azn qiymətinə çatdırılır'
      },
      {
        image: 'https://gamenotebaku.az/cdn/storage/product_images/Lmzdrcewbv5T4zJa9/fullHD/Lmzdrcewbv5T4zJa9.png',
        label: 'Yeni',
        name: 'ASUS ROG Strix G16 (2023)',
        price: '3399 azn',
        kargo: 'Azerbaijan, Bakı ünvanına 0azn qiymətinə çatdırılır'
      },
      {
        image: 'https://gamenotebaku.az/cdn/storage/product_images/BNoJkf53gt8RCYjB5/fullHD/BNoJkf53gt8RCYjB5.png',
        label: 'Yeni',
        name: 'ACER Nitro 5 (RTX3070)',
        price: '2199 azn',
        kargo: 'Azerbaijan, Bakı ünvanına 0azn qiymətinə çatdırılır'
      },
      {
        image: 'https://gamenotebaku.az/cdn/storage/product_images/g3udQn3K6LNTMzd7n/fullHD/g3udQn3K6LNTMzd7n.png',
        label: 'Yeni',
        name: 'ASUS TUF DASH F15 2022 White Ed.',
        price: '2299 azn',
        kargo: 'Azerbaijan, Bakı ünvanına 0azn qiymətinə çatdırılır'
      },
    
  ];

  function createCard(card) {
    const cardContainer = document.createElement('div');
    cardContainer.className = 'card';
    cardContainer.style.width="300px"
    cardContainer.style.border="none"
    cardContainer.style.color="white"
    cardContainer.style.marginTop="50px"
  
    cardContainer.innerHTML = `
      <img src="${card.image}" alt="${card.name}">
      <span class="label">${card.label}</span>
      <h3>${card.name}</h3>
      <p style="color: red;">${card.price}</p>
    `;
    return cardContainer;
  }

  const brends=[
    {
      image:'https://gamenotebaku.az/cdn/storage/manufacturer_images/ciyKFcgR7D6GBAFem/HD/ciyKFcgR7D6GBAFem.png'
    },
    {
      image:'https://gamenotebaku.az/cdn/storage/manufacturer_images/FzC4WTmsodWECm3pX/HD/FzC4WTmsodWECm3pX.png'
    },
    {
      image:'https://gamenotebaku.az/cdn/storage/manufacturer_images/LsjQFouS3syCwPL7Q/HD/LsjQFouS3syCwPL7Q.png'
    },
    {
      image:'https://gamenotebaku.az/cdn/storage/manufacturer_images/wDhKwyocBrwx6gBnJ/HD/wDhKwyocBrwx6gBnJ.png'
    },
    {
      image:'https://gamenotebaku.az/cdn/storage/manufacturer_images/XCWGGfWfziWZBrRZN/HD/XCWGGfWfziWZBrRZN.png'
    },
    {
      image:'https://gamenotebaku.az/cdn/storage/manufacturer_images/PvvJDcCkyHRnHmE23/HD/PvvJDcCkyHRnHmE23.png'
    },
  ];


  function createBrend(marka){
    const brendContainer=document.createElement('div');
    brendContainer.className='marka';

    brendContainer.innerHTML = `
    <img src="${marka.image}">
    `;


    return brendContainer;
  }

const innovations=[
  {
    image:'https://gamenotebaku.az/cdn/storage/product_images/R2BCKS94ma4PPAhes/HD/R2BCKS94ma4PPAhes.png',
    label:'Yeni',
    name:'Lenovo Legion Pro5',
    price:'3999 azn'
  },
  {
    image:'https://gamenotebaku.az/cdn/storage/product_images/dXF9C5fSCTvBEWhLb/HD/dXF9C5fSCTvBEWhLb.png',
    label:'Yeni',
    name:'ASUS TUF Gaming A15 ',
    price:'2499 azn',
    kargo: 'Azerbaijan, Bakı ünvanına 0azn qiymətinə çatdırılır'
  },
  {
    image:'https://gamenotebaku.az/cdn/storage/product_images/A7L9XaYy2zP35jSnw/HD/A7L9XaYy2zP35jSnw.png',
    label:'Yeni',
    name:'Acer Nitro 16 (2023)',
    price:'2499 azn' ,
    kargo: 'Azerbaijan, Bakı ünvanına 0azn qiymətinə çatdırılır'
  },
  {
    
    image:'https://gamenotebaku.az/cdn/storage/product_images/BQeQsaFQrHYBKTW2D/HD/BQeQsaFQrHYBKTW2D.png',
    label:'Yeni',
    name:'MSI Cyborg 15 (RTX4050)',
    price:'2099 azn' ,
    kargo: 'Azerbaijan, Bakı ünvanına 0azn qiymətinə çatdırılır'
  },
  {
    image:'https://gamenotebaku.az/cdn/storage/product_images/qKXTHatKKCJbSxrEH/HD/qKXTHatKKCJbSxrEH.png',
    label:'Yeni',
    name:'ASUS ROG Strix G18 ',
    price:'3419 azn',
    kargo: 'Azerbaijan, Bakı ünvanına 0azn qiymətinə çatdırılır'
  },
  {
    image:'https://gamenotebaku.az/cdn/storage/product_images/dindv2ubEvGZGrmFs/HD/dindv2ubEvGZGrmFs.png',
    label:'Yeni',
    name:'ASUS TUF Gaming F15',
    price:'2399 azn',
    kargo: 'Azerbaijan, Bakı ünvanına 0azn qiymətinə çatdırılır'
  },
  {
    image:'https://gamenotebaku.az/cdn/storage/product_images/5uDEFp5zxFtyLyer5/HD/5uDEFp5zxFtyLyer5.png',
    label:'Yeni',
    name:'ASUS ROG Strix G17 ',
    price:'4399 azn',
    kargo: 'Azerbaijan, Bakı ünvanına 0azn qiymətinə çatdırılır'
  },
  {
    image:'https://gamenotebaku.az/cdn/storage/product_images/DyHjP6Y7Cs4566FP7/HD/DyHjP6Y7Cs4566FP7.png',
    label:'Yeni Premium',
    name:'ASUS ROG Strix G18',
    price:'5999 azn',
    kargo: 'Azerbaijan, Bakı ünvanına 0azn qiymətinə çatdırılır'
  },
  {
    image:'https://gamenotebaku.az/cdn/storage/product_images/WAdrjTiGp4DucK7TH/HD/WAdrjTiGp4DucK7TH.png',
    label:'Yeni Premium',
    name:'MSI Stealth 16 Studio',
    price:'3799 azn',
    kargo: 'Azerbaijan, Bakı ünvanına 0azn qiymətinə çatdırılır'
  },
  {
    image:'https://gamenotebaku.az/cdn/storage/product_images/DHrCojWRYq2oLKN3h/HD/DHrCojWRYq2oLKN3h.png',
    label:'Yeni Premium',
    name:'Alienware m18 R1',
    price:'6499 azn',
    kargo: 'Azerbaijan, Bakı ünvanına 0azn qiymətinə çatdırılır'
  },
  {
    image:'https://gamenotebaku.az/cdn/storage/product_images/tggSkcsbMTuaWTY3g/HD/tggSkcsbMTuaWTY3g.png',
    label:'Yeni',
    name:'ASUS ROG Zephyrus',
    price:'3999 azn',
    kargo: 'Azerbaijan, Bakı ünvanına 0azn qiymətinə çatdırılır'
  }
]  

function createNew(innovations){
  const newContainer=document.createElement('div');
  newContainer.className = 'new';
    newContainer.style.width="300px"
    newContainer.style.border="none"
    newContainer.style.color="white"
    newContainer.style.marginTop="50px"
  
    newContainer.innerHTML = `
      <img src="${innovations.image}" alt="${innovations.name}">
      <span class="label">${innovations.label}</span>
      <h3>${innovations.name}</h3>
      <p style="color: red;">${innovations.price}</p>
    `;
    return newContainer;
}

const premiums=[
  {
    image:'https://gamenotebaku.az/cdn/storage/product_images/DyHjP6Y7Cs4566FP7/HD/DyHjP6Y7Cs4566FP7.png',
    label:'Yeni Premium',
    name:'ASUS ROG Strix G18',
    price:'5999 azn',
    kargo: 'Azerbaijan, Bakı ünvanına 0azn qiymətinə çatdırılır'
  },
  {
    image:'https://gamenotebaku.az/cdn/storage/product_images/WAdrjTiGp4DucK7TH/HD/WAdrjTiGp4DucK7TH.png',
    label:'Yeni Premium',
    name:'MSI Stealth 16 Studio',
    price:'3799 azn',
    kargo: 'Azerbaijan, Bakı ünvanına 0azn qiymətinə çatdırılır'
  },
  {
    image:'https://gamenotebaku.az/cdn/storage/product_images/DHrCojWRYq2oLKN3h/HD/DHrCojWRYq2oLKN3h.png',
    label:'Yeni Premium',
    name:'Alienware m18 R1',
    price:'6499 azn',
    kargo: 'Azerbaijan, Bakı ünvanına 0azn qiymətinə çatdırılır'
  },
  {
    image:'https://gamenotebaku.az/cdn/storage/product_images/DyHjP6Y7Cs4566FP7/HD/DyHjP6Y7Cs4566FP7.png',
    label:'Yeni Premium',
    name:'ASUS ROG Strix G18',
    price:'3599 azn',
    kargo: 'Azerbaijan, Bakı ünvanına 0azn qiymətinə çatdırılır'
  },
  {
    image:'https://gamenotebaku.az/cdn/storage/product_images/jbmW3btL29copAnRR/HD/jbmW3btL29copAnRR.png',
    label:'Yeni Premium',
    name:'Predator Helios Neo 16',
    price:'2999 azn',
    kargo: 'Azerbaijan, Bakı ünvanına 0azn qiymətinə çatdırılır'
  }
]
  
function createPremium(premium){
  const premiumContainer=document.createElement('div');
  premiumContainer.className="premium"
  premiumContainer.style.width="300px";
  premiumContainer.style.border="none";
  premiumContainer.style.color="white"
  premiumContainer.style.marginTop="50px"

  premiumContainer.innerHTML = `
    <img src="${premium.image}" alt="${premium.name}">
    <span class="label">${premium.label}</span>
    <h3>${premium.name}</h3>
    <p>${premium.price}</p>
  `;
  return premiumContainer;
}

function appendMain() {
    const mainSection = document.querySelector('main');
    mainSection.style.backgroundColor="#101010"
    let currentRow;
    let brendRow;
    let newRow;
    let premiumRow;
    
    cards.forEach((card, index) => {
      if (index % 4 === 0) {
        currentRow = document.createElement('div');
        currentRow.className = 'card-row';
        mainSection.appendChild(currentRow);
      }
      const cardElement = createCard(card);
      currentRow.appendChild(cardElement);
    });
    
    const centerButton = document.createElement('button');
        centerButton.style.width="140px"
        centerButton.style.height="50px"
        centerButton.style.fontSize="20px"
        centerButton.innerHTML = '<span>Hamısı</span>';
        centerButton.addEventListener('mouseenter', function() {
          centerButton.style.backgroundColor="#76b400"
            centerButton.querySelector('span').innerHTML = '<span class=""><i class="fa-solid fa-arrow-right"></i></span>';
        });
        centerButton.addEventListener('mouseleave', function() {
            centerButton.style.backgroundColor="#76b400"
            centerButton.querySelector('span').innerText = 'Hamısı'; 
        });
        centerButton.addEventListener('click', function() {
            alert('Button clicked!');
        });
        mainSection.appendChild(centerButton);

    const p=document.createElement('p')
    p.className='p'
    p.innerHTML=`<span> Top Brendlər</span>`;
    mainSection.appendChild(p)

    brends.forEach((marka, index) => {
      if (index % 6 === 0) {
        brendRow = document.createElement('div');
        brendRow.className = 'brend-row';
        mainSection.appendChild(brendRow);
      }
      const brendElement = createBrend(marka);
      brendRow.appendChild(brendElement);
    });

    const centerButton1 = document.createElement('button');
        centerButton1.style.width="140px"
        centerButton1.style.height="50px"
        centerButton1.style.fontSize="20px"
        centerButton1.innerHTML = '<span>Hamısı</span>';
        centerButton1.addEventListener('mouseenter', function() {
          centerButton1.style.backgroundColor="#76b400"
            centerButton1.querySelector('span').innerHTML = '<span class=""><i class="fa-solid fa-arrow-right"></i></span>';
        });
        centerButton1.addEventListener('mouseleave', function() {
            centerButton1.style.backgroundColor="#76b400"
            centerButton1.querySelector('span').innerText = 'Hamısı'; 
        });
        centerButton1.addEventListener('click', function() {
            alert('Button clicked!');
        });
        mainSection.appendChild(centerButton1);

    const p1=document.createElement('p')
    p1.className='p'
    p1.innerHTML=`<span>Yeniliklər</span>`;
    mainSection.appendChild(p1)

    innovations.forEach((innovations, index) => {
      if (index % 4 === 0) {
        newRow = document.createElement('div');
        newRow.className = 'new-row';
        mainSection.appendChild(newRow);
      }
      const cardElement = createNew(innovations);
      newRow.appendChild(cardElement);
    });

    const centerButton2 = document.createElement('button');
        centerButton2.style.width="140px"
        centerButton2.style.height="50px"
        centerButton2.style.fontSize="20px"
        centerButton2.innerHTML = '<span>Hamısı</span>';
        centerButton2.addEventListener('mouseenter', function() {
          centerButton2.style.backgroundColor="#76b400"
            centerButton2.querySelector('span').innerHTML = '<span class=""><i class="fa-solid fa-arrow-right"></i></span>';
        });
        centerButton2.addEventListener('mouseleave', function() {
            centerButton2.style.backgroundColor="#76b400"
            centerButton2.querySelector('span').innerText = 'Hamısı'; 
        });
        centerButton2.addEventListener('click', function() {
            alert('Button clicked!');
        });
        mainSection.appendChild(centerButton2);
        const p2=document.createElement('p')
        p2.className='p'
        p2.innerHTML=`<span>Premium</span>`;
        mainSection.appendChild(p2)    
        premiums.forEach((premium, index) => {
          if (index % 4 === 0) {
            premiumRow = document.createElement('div');
            premiumRow.className = 'new-row';
            mainSection.appendChild(premiumRow);
          }
          const cardElement = createNew(premium);
          premiumRow.appendChild(cardElement);
        });

        const centerButton3 = document.createElement('button');
        centerButton3.className="bttn"
        centerButton3.style.width="140px"
        centerButton3.style.height="50px"
        centerButton3.style.fontSize="20px"
        centerButton3.style.marginBottom="40px"
        centerButton3.innerHTML = '<span>Hamısı</span>';
        centerButton3.addEventListener('mouseenter', function() {
          centerButton3.style.backgroundColor="#76b400"
            centerButton3.querySelector('span').innerHTML = '<span class=""><i class="fa-solid fa-arrow-right"></i></span>';
        });
        centerButton3.addEventListener('mouseleave', function() {
            centerButton3.style.backgroundColor="#76b400"
            centerButton3.querySelector('span').innerText = 'Hamısı'; 
        });
        centerButton3.addEventListener('click', function() {
            alert('Button clicked!');
        });
        mainSection.appendChild(centerButton3);
  }
  appendMain();

const cardContainers = document.querySelectorAll('.card');
cardContainers.forEach((card, index) => {
    card.addEventListener('click', function () {
        const selectedCard = cards[index];
        localStorage.setItem('selectedCard', JSON.stringify(selectedCard));
        window.open('details.html');
    });
});

const cardInnovation = document.querySelectorAll('.new');

cardInnovation.forEach((card, index) => {
    card.addEventListener('click', function () {
        const selectedInnovation = innovations[index];
        localStorage.setItem('selectedInnovation', JSON.stringify(selectedInnovation));
        window.open('details.html');
    });
});



