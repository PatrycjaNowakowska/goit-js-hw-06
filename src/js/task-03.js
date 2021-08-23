const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const ul = document.querySelector("ul");
//console.log(ul);


  //let item = document.createElement("li");
  //ul.insertAdjacentHTML("afterbegin",item);

const items = images
    .map((image) => `<li><img class="img-small" src="${image.url}" alt="${image.alt}"></li>`)
    .join("");
ul.insertAdjacentHTML("afterbegin",items);
  
  //let img = document.createElement("img");
  //img.src = image.url;
  //img.alt = image.alt;
  //item.append(img);
  

//console.log(ul)