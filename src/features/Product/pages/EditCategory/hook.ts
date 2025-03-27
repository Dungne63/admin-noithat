import {
  ProductActions,
  ProductSelectors,
} from "@features/Product/services/slice";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch, useAppSelector } from "@services/store";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { addProductSchema } from "../schemas/AddProductSchemas";
import { defaultAddProductForm } from "@features/Product/services/const";
import { useEffect } from "react";

export type ReceivedProps = Record<string, any>;

const useEditProduct = (props: ReceivedProps) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: defaultAddProductForm,
    resolver: yupResolver(addProductSchema),
  });
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const products = useAppSelector(ProductSelectors.products);

  const onSubmit = (data: any) => {
    dispatch(
      ProductActions.editProduct({
        id,
        body: data,
        onSuccess: () => {
          reset();
          navigate("/category");
        },
      })
    );
  };

  useEffect(() => {
    dispatch(ProductActions.getCategories({}));
    if (id) {
      dispatch(
        ProductActions.getDetailProduct({
          id,
          onSuccess: ({ description, isActive, parentId, name }: any) =>
            reset({ description, isActive, parentId, name }),
        })
      );
    }
  }, [dispatch, id, reset]);

  return {
    ...props,
    onSubmit,
    register,
    handleSubmit,
    errors,
    control,
    navigate,
    products,
    id,
  };
};

export type Props = ReturnType<typeof useEditProduct>;

export default useEditProduct;
