import * as t from './actionTypes';

export const initialState = {
  avatarId: '1',
  avatarIdPrev: '1',
  duration: 25,
  leftValue: 25,
  visibleModal: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case t.CLOSE_MODAL:
      return {
        ...state,
        visibleModal: false,
        avatarId: state.avatarIdPrev
      };
    case t.OPEN_MODAL:
      return {
        ...state,
        visibleModal: true
      };
    case t.REDUCE_VALUE_BY_1SECOND: {
      return {
        ...state,
        leftValue: state.leftValue - 0.1
      };
    }
    case t.SAVE_MODAL_EDIT:
      return {
        ...state,
        visibleModal: false,
        avatarIdPrev: state.avatarId
      };
    case t.SET_AVATAR_ID:
      return {
        ...state,
        avatarId: action.id
      };
    default:
      return state;
  }
};
