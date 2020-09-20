import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'https://live.staticflickr.com/65535/50363429371_203dc5296d_c.jpg',
    header: 'How the PS5 Event Changes the Next-Gen Discussion',
    caption:'PS5 vs. Xbox Series: Which Is the Better Value? - Next-Gen Console Watch'
  },
  {
    src: 'https://live.staticflickr.com/65535/50363427647_46dfb35f26_c.jpg',
    header:'Warframe | Heart of Deimos Update',
    caption:'New Open World landscape'
  },
  {
    src: 'https://live.staticflickr.com/65535/50363612567_70b04d39fc_c.jpg',
    header:'Devil May Cry 5: Special Edition',
    caption:'Rev up your style meater even harder!'
  },
  {src: 'https://live.staticflickr.com/65535/50362766463_cc39b3a5a3_c.jpg',
  header:'The Batman Fan Poster Recreates The Dark Knight Returns Iconic Comic Cover'
}

];

const HomeC = () => <UncontrolledCarousel items={items} />;

export default HomeC;