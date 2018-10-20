import * as t from './actionTypes';

export const closeModal = () => ({
  type: t.CLOSE_MODAL
});

export const openModal = () => ({
  type: t.OPEN_MODAL
});

export const reduceValueBy1Second = () => ({
  type: t.REDUCE_VALUE_BY_1SECOND
});

export const saveModalEdit = () => ({
  type: t.SAVE_MODAL_EDIT
});

export const setAvatarId = id => ({
  type: t.SET_AVATAR_ID,
  id
});
