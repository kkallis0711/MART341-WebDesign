var c = document.getElementByld("myCanvas");
var ctx = c.getContext("2d");
var cty = c.getContext("2d"); 

//fill text
ctx.font = '30pt Bodoni':
ctx.strokeText(Picture This', 100, 600);

//Author
ctx.font = '20pt Bodoni';
ctx.fillStyle = 'black';
ctx.fillText('by Alaina Urquhart', 200, 600);

// Fetch book details from an API
fetch('https://www.goodreads.com/en/book/show/60672388')
.then(response => response.json())
.then(data => {

// Display book information
document.getElementById('book-title').innerText = data.title;
document.getElementById('book-author').innerText = data.author;
document.getElementById('book-rating').innerText = data.rating;
document.getElementById('book-review').innerText = data.review;
  })
.catch(error => {
  console.error('Error fetching book details:', error);
  });
