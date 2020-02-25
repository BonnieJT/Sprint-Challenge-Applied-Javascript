// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


const container = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then((response) => {
    const bootstrapData = response.data.articles.bootstrap;
    bootstrapData.map((article) => {
        const newCardMaker = CardMaker(article)
        container.appendChild(newCardMaker);
    });

    const javaSciptData = response.data.articles.javascript
    javaSciptData.map((article) => {
         const newCardMaker = CardMaker(article)
         container.appendChild(newCardMaker);
    });

    const technologyData = response.data.articles.technology
    technologyData.map((article) => {
         const newCardMaker = CardMaker(article)
         container.appendChild(newCardMaker);
    });

    const jqueryData = response.data.articles.jquery
    jqueryData.map((article) => {
        const newCardMaker = CardMaker(article)
        container.appendChild(newCardMaker);
    });

    })
    .catch((error) => {
        console.log('Error found');
    })
    

function CardMaker(topic) {
    // Create elements
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const authorDiv = document.createElement('div');
    const imgDiv = document.createElement('div');
    const image = document.createElement('img');
    const authorName = document.createElement('span');

    // Add classes
    card.classList.add('card');
    headline.classList.add('headline');
    authorDiv.classList.add('author');
    imgDiv.classList.add('img-container');

    //add text cvpmtemt
    headline.textContent = topic.headline;
    image.textContent = topic.authorPhoto;
    authorName.textContent = topic.authorName;

    // Create czrd structure
    card.appendChild(headline);
    card.appendChild(authorDiv);
    authorDiv.appendChild(imgDiv);
    imgDiv.appendChild(image);
    authorDiv.appendChild(authorName);

    return card;

}