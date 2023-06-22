import {
  take,
  takeEvery,
  takeLatest,
  call,
  put,
  fork,
  all,
  delay,
} from "redux-saga/effects";
import {
  loadUsersSuccess,
  loadUsersFailure,
  createUserSuccess,
  createUserFailure,
  deleteUserSuccess,
  deleteUserFailure,
  updateUserSuccess,
  updateUserFailure,
} from "./actions";
import {
  createUserApi,
  loadUsersApi,
  deleteUserApi,
  updateUserApi,
} from "./api";
import {
  CREATE_USER_START,
  DELETE_USER_START,
  LOAD_USERS_START,
  UPDATE_USER_START,
} from "./actionTypes";

function* onLoadUsersStartAsync() {
  try {
    const response = yield call(loadUsersApi);
    console.log("Load response", response);
    if (response.status === 200) {
      yield delay(500);
      yield put(loadUsersSuccess(response.data));
    }
  } catch (error) {
    yield put(loadUsersFailure(error.message));
  }
}

function* onCreateUserStartAsync({ payload }) {
  try {
    const response = yield call(createUserApi, payload);
    console.log("Create response", response);
    if (response.status === 201) {
      yield put(createUserSuccess(response.data));
    }
  } catch (error) {
    yield put(createUserFailure(error.message));
  }
}

function* onDeleteUSerStartAsync(userId) {
  try {
    const response = yield call(deleteUserApi, userId);
    console.log("Delete response", response);
    if (response.status === 200) {
      yield delay(500);
      yield put(deleteUserSuccess(userId));
    }
  } catch (error) {
    yield put(deleteUserFailure(error.message));
  }
}

function* onUpdateUserStartAsync({ payload: { id, formInput } }) {
  try {
    const response = yield call(updateUserApi, id, formInput);
    console.log("Update response", response);
    if (response.status === 200) {
      yield delay(500);
      yield put(updateUserSuccess(response.data));
    }
  } catch (error) {
    yield put(updateUserFailure(error.message));
  }
}

function* onLoadUsers() {
  yield takeEvery(LOAD_USERS_START, onLoadUsersStartAsync);
}

function* onCreateUser() {
  yield takeLatest(CREATE_USER_START, onCreateUserStartAsync);
}

function* onDeleteUser() {
  while (true) {
    const { payload: userId } = yield take(DELETE_USER_START);
    yield call(onDeleteUSerStartAsync, userId);
  }
}

function* onUpdateUser() {
  yield takeLatest(UPDATE_USER_START, onUpdateUserStartAsync);
}

const userSagas = [
  fork(onLoadUsers),
  fork(onCreateUser),
  fork(onDeleteUser),
  fork(onUpdateUser),
];

export default function* rootSaga() {
  yield all([...userSagas]);
}
