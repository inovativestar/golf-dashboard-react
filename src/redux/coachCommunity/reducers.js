import clone from 'clone';
import actions from './actions';
const initState = {
    groups: [],
    students: []
};

export default function coachCommunityReducer(state = initState, { type, ...action }) {
    switch (type) {
        case actions.UPDATE_GROUP: {
            return {
              ...state,
              groups: action.groups,
            };
          }
        case actions.UPDATE_STUDENT: {
            return {
              ...state,
              students: action.students,
            };
          }
        default:
            return state;
    }
}