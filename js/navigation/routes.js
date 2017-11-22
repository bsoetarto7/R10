import {
  createRouter
} from '@expo/ex-navigation';

import { AboutContainer } from '../scenes/About';
import { ScheduleContainer } from '../scenes/Schedule';
import { FaveContainer } from '../scenes/Favourites';

import Layout from './NavigationLayout';

const Router = createRouter(() => ({
  layout: () => Layout,
  schedule: () => ScheduleContainer,
  about: () => AboutContainer,
  favourite: () => FaveContainer
}));

export default Router