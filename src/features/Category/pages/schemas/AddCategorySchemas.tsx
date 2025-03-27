import * as yup from "yup";

export const addCategorySchema = yup
  .object({
    name: yup
      .string()
      .min(5, "Tên danh mục phải có ít nhất 5 ký tự")
      .max(20, "Tên danh mục có nhiều nhất 30 ký tự")
      .required("Không được bỏ trống Tên danh mục"),
    parentId: yup.string().nullable(),
    description: yup.string().required("Không được bỏ trống Mô tả"),
    isActive: yup.boolean().required("Không được bỏ trống Trạng thái"),
  })
  .required();
