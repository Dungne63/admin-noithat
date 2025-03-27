import AppReducer from "@app/slice";
import CategoryReducer from "@features/Category/services/slice";
import OrderReducer from "@features/Order/services/slice";
import ProductReducer from "@features/Product/services/slice";
import UserReducer from "@features/User/services/slice";

export const reducers = {
  app: AppReducer,
  user: UserReducer,
  order: OrderReducer,
  category: CategoryReducer,
  product: ProductReducer,
};
