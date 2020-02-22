// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// const topics = document.querySelector('.topics')

// axios.get('https://lambda-times-backend.herokuapp.com/topics')
// .then(response => {
//     const dataArray = response.data.topics;
//     dataArray.map(subject => {
//         const newTab = Tab(subject);
//         topics.append(newTab);
//     })
// })
// .catch(error => {
//     console.log("Found an error")
// })

// function Tabs(topic) {
//     // Create element
//     const tab = document.createElement('div');

//     // Add class
//     tab.classList.add('tab');

//     // Create text content
//     tab.textContent = topic;

//     return tab;
// }

axios.get('https://lambda-times-backend.herokuapp.com/topics') 

.then((response) => {
  response.data.topics.forEach((tab) => { 
    tabCreator(tab);
 });
})

.catch((error) => {
    console.log(error);
});

const topics = document.querySelector('.topics');
const tab = document.querySelector('.tab')

function tabCreator(topic) {
    const nextTopic = document.createElement('div');
    nextTopic.classList.add('tab');
    nextTopic.textContent = topic;
    topics.appendChild(nextTopic);
     return nextTopic;
    }
