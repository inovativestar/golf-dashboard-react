import { all } from 'redux-saga/effects';
import authSagas from './auth/saga';
import devSagas from '../customApp/redux/sagas';
import overview from './overview/saga';
import community from './community/saga';
import coachCommunity from './coachCommunity/saga';
import strokesGained from './StrokesGained/saga';
import putting from './Putting/saga';
import trends from './Trends/saga';
import profile from './Profile/saga';
import friends from './Friends/saga';
import rounds from './Rounds/saga';

export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    devSagas(),
    overview(),
    community(),
    strokesGained(),
    putting(),
    trends(),
    profile(),
    friends(),
    rounds(),
    coachCommunity()
  ]);
}
