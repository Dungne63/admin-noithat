import { defaultPagination } from "@features/Product/services/const";
import {
  ProductActions,
  ProductSelectors,
} from "@features/Product/services/slice";
import { useAppDispatch, useAppSelector } from "@services/store";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";

export type ReceivedProps = Record<string, any>;

const useProduct = (props: ReceivedProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const products = useAppSelector(ProductSelectors.products);
  const [pagination, setPagination] = useState(defaultPagination);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(ProductActions.getProducts({ pagination }));
  }, [dispatch, pagination.page]);

  const onSearch = useCallback(() => {
    dispatch(ProductActions.getProducts({ pagination, search }));
  }, [search, pagination]);

  return {
    products,
    navigate,
    pagination,
    onSearch,
    setSearch,
    search,
    ...props,
  };
};

export type Props = ReturnType<typeof useProduct>;

export default useProduct;
