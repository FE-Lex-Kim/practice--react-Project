import { createAction, handleActions } from 'redux-actions';

//액션 함수
const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

// 액션 생성함수
export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form,
    key,
    value,
  }),
);

export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);

// 초기값
const initalState = {
  register: {
    username: '',
    password: '',
    passwordConfirm: '',
  },
  login: {
    username: '',
    password: '',
  },
};

// 리듀서
const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload }) => ({
      ...state,
      [payload.form]: {
        ...state[payload.form],
        [payload.key]: payload.value,
      },
    }),
    [INITIALIZE_FORM]: (state, payload) => ({
      ...state,
      [payload.form]: initalState[payload.form],
    }),
  },
  initalState,
);

export default auth;
