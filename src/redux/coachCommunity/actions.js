const actions = {
    GET_GROUP: 'GET_GROUP',
    UPDATE_GROUP: 'UPDATE_GROUP',
    GET_STUDENT: 'GET_STUDENT',
    UPDATE_STUDENT: 'UPDATE_STUDENT',
    getGroup: () => ({ type: actions.GET_GROUP }),
    getStudent: () => ({ type: actions.GET_STUDENT }),
    deleteGroup: selected => {

    }
}
export default actions;