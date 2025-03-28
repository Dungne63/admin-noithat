import {
  ClipboardDocumentListIcon,
  CubeIcon,
  CubeTransparentIcon,
  HomeIcon,
  Square3Stack3DIcon,
  UserIcon,
  NewspaperIcon,
  ReceiptPercentIcon,
} from "@heroicons/react/24/solid";

export const SITE_NAME =
  import.meta.env.VITE_APP_SITE_NAME || "{empty-site-name}";

export const SITE_DESCRIPTION = "Nội thất Kadi House - đẳng cấp là mãi mãi!";

export const SITE_CONTACT = {
  ADDRESS: "Đường 123 - Hà Nội",
  PHONE: "0123456789",
  EMAIL: "dankkap@gmail.com",
};

export const SITE_MENU = [
  {
    label: "Thống kê",
    path: "/",
    icon: HomeIcon,
  },
  {
    label: "Người dùng",
    path: "/user",
    icon: UserIcon,
  },
  {
    label: "Đơn hàng",
    path: "/order",
    icon: ClipboardDocumentListIcon,
  },
  {
    label: "Danh mục sản phẩm",
    path: "/category",
    icon: Square3Stack3DIcon,
  },
  {
    label: "Sản phẩm",
    path: "/product",
    icon: CubeIcon,
  },
  {
    label: "Voucher",
    path: "/voucher",
    icon: ReceiptPercentIcon,
  },
  {
    label: "Bài đăng",
    path: "/blog",
    icon: NewspaperIcon,
  },
  // {
  //   label: "Banner",
  //   path: "/banner",
  //   icon: NewspaperIcon,
  // },
];
