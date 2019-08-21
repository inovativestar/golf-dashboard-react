import { all, takeEvery, put } from 'redux-saga/effects';
import actions from './actions';
import { createDemoGroups, createDemoStudents } from '../../containers/Coach/Community/config';
export function* getGroup() {
  yield put({
    type: actions.UPDATE_GROUP,
    groups: createDemoGroups()
  });
}
export function* getStudent() {
  yield put({
    type: actions.UPDATE_STUDENT,
    students: createDemoStudents()
  });
}

export default function* rootSaga() {
  yield all([
    yield takeEvery(actions.GET_GROUP, getGroup),
    yield takeEvery(actions.GET_STUDENT, getStudent),
  ]);
}
