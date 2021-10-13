import './css/base.scss'
import './css/destination-cards.scss'
import './css/selector.scss'
import './css/tabs.scss'

import bgImg from '../client/assets/background-image.jpg';
import france from '../client/assets/france.jpg'
import spain from '../client/assets/spain.jpg'
import thailand from '../client/assets/thailand.jpg'
import japan from '../client/assets/japan.jpg'

import { handleImages } from './js/handleImages'



handleImages(bgImg, france, spain, thailand, japan)