// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const Header = () => {
    // Create div and inner elements
    const parentDiv = document.createElement('div');
    const pageDate = document.createElement('span');
    const headline = document.createElement('h1');
    const temp = document.createElement('span');

    // Add classes to elements
    parentDiv.classList.add('header');
    pageDate.classList.add('date');
    temp.classList.add('temp');

    // Add text content to elements
    pageDate.textContent = 'MARCH 28, 2019';
    headline.textContent = 'Lambda Times';
    temp.textConent = '98°';

    // Create component structure
    parentDiv.appendChild(pageDate);
    parentDiv.appendChild(headline);
    parentDiv.appendChild(temp);

    // Return component
    return parentDiv;
};

const headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(Header());
