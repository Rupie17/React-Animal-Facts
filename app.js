import { animals } from './animals';
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);

const title = '';
const realTitle = 'Click and animal for a fun fact';
const background = <img className='background' alt='ocean' src="images/ocean.jpg" />;

// help to display random facts of the chosen animal from the animals array.
function displayFact(e) {
    //grab name of animal
  const animal = e.target.alt;
  // generate random index for the facts array.
  const index = Math.floor(Math.random() * animals[animal].facts.length);
  const funFact = animals[animal].facts[index];

  // grab the p element where we want to display the fact
  const p = document.getElementById('fact');
  // assign the html to the fun fact chosen in the array.
  p.innerHTML = funFact;
}

const showBackground = true;

const images = [];
for (const animal in animals) {
  const image = (
    <img 
      key={animal}
      className='animal'
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role='button'
      onClick={displayFact}
    />
  );
  images.push(image);
}


const animalFacts = (
          <div>
            {/* if the title is empty then show real title, else show the title.  since an empty string is boolean false. */}
          <h1>{title || realTitle}</h1>
            {/* if show background is true, show the background, otherwise show nothing */}
          {showBackground && background}
          <div className='animals'>{images}</div>
          <p id='fact'></p>
          </div>
);


root.render(animalFacts);