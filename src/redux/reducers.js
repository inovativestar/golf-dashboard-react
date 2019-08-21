import Auth from './auth/reducer';
import App from './app/reducer';
import ThemeSwitcher from './themeSwitcher/reducer';
import LanguageSwitcher from './languageSwitcher/reducer';
import DevReducers from '../customApp/redux/reducers';
import Overview from './overview/reducers';
import Community from './community/reducers';
import CoachCommunity from './coachCommunity/reducers';
import StrokesGained from './StrokesGained/reducers';
import Putting from './Putting/reducers';
import Trends from './Trends/reducers';
import Profile from './Profile/saga';
import Friends from './Friends/saga';
import Rounds from './Rounds/saga';

export default {
  Auth,
  App,
  ThemeSwitcher,
  LanguageSwitcher,
  Overview,
  Community,
  StrokesGained,
  Putting,
  Trends,
  Profile,
  Friends,
  Rounds,
  CoachCommunity,
  ...DevReducers,
};
