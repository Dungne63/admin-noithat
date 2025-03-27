import { put, delay, takeLatest } from "redux-saga/effects";
import { OrderActions } from "./slice";
import SysFetch from "@services/axios";
import { AppActions } from "@app/slice";

export function* OrderSaga() {
  yield takeLatest(OrderActions.getOrders, getOrders);
}

export function* getOrders({ payload: { onSuccess } }: any) {
  try {
    yield put(AppActions.setIsLoading(true));
    yield delay(50);

    const rs: { [x: string]: any } = yield SysFetch.get(`/order`);
    yield put(AppActions.setIsLoading(false));
    if (rs.statusCode === 200) {
      yield put(OrderActions.setOrders(rs.data));
      onSuccess?.(rs.data);
    }
  } catch (error) {
    yield put(AppActions.setIsLoading(false));
  }
}
