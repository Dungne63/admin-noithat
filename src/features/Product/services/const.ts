import { ProductType } from "./dto";

export const statusProduct = [
  { key: "active", label: "Hoạt động" },
  { key: "inactive", label: "Không hoạt động" },
];
export const defaultAddProductForm: ProductType = {
  name: "",
  categories: [],
  quantity: 1,
  price: 1000,
  sku: "",
  size: "",
  material: "",
  description: "",
  status: statusProduct[0].key,
  warranty: "",
  shippingInfo: "",
  images: ["image"],
};

export const defaultPagination = {
  page: 1,
  limit: 99,
};
