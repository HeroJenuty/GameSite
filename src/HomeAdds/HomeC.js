import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'https://live.staticflickr.com/65535/50436794588_b84ca133a1_c.jpg',
    header: 'How the PS5 Event Changes the Next-Gen Discussion',
    caption:'PS5 vs. Xbox Series: Which Is the Better Value? - Next-Gen Console Watch'
  },
  {
    src: 'https://live.staticflickr.com/65535/50363427647_46dfb35f26_c.jpg',
    header:'Warframe | Heart of Deimos Update',
    caption:'New Open World landscape'
  },
  {
    src: 'https://live.staticflickr.com/65535/50437755061_70ffbbc0f0_c.jpg',
    header:'New DLC incoming with second son of Sparda',
    caption:'Rev up your style meater even harder!'
  },
  {src: 'https://live.staticflickr.com/65535/50362766463_cc39b3a5a3_c.jpg',
  header:'The Batman Fan Poster Recreates The Dark Knight Returns Iconic Comic Cover'
}

];

const HomeC = () => <UncontrolledCarousel items={items} />;

export default HomeC;