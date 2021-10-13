import './css/base.scss'
import './css/destination-cards.scss'
import './css/selector.scss'
import './css/tabs.scss'

import bgImg from '../client/assets/background-image.jpg';
import france from '../client/assets/france.jpg'
import spain from '../client/assets/spain.jpg'
import thailand from '../client/assets/thailand.jpg'
import japan from '../client/assets/japan.jpg'

import { handleTabs } from './js/handleTabs';
import { handleInput } from './js/handleInput'
import { handleImages } from './js/handleImages'
handleImages(bgImg, france, spain, thailand, japan )

//handleTabs()

const submitBtn = document.querySelector('#submit');

submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    handleInput()
})

export {
    handleTabs
}