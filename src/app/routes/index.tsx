import { lazy, Suspense } from "react";
import { RouteObject, BrowserRouter as Router, useRoutes } from "react-router";
import { ROUTE_PATHS } from "@constants/route.const";
import AuthLayout from "@layouts/AuthLayout";
import MainLayout from "@layouts/MainLayout";
import { useAuth } from "@hooks/useAuth";
import { RouteWrapper } from "./RouteWrapper";
import GlobalLoading from "@components/GlobalLoading";

const DashboardPage = lazy(() => import("@features/Dashboard/pages/Dashboard"));
const LoginPage = lazy(() => import("@features/Auth/pages/Login"));
const NotFoundPage = lazy(() => import("@features/NotFound"));
const PermissionDeniedPage = lazy(() => import("@features/PermissionDenied"));
const UserPage = lazy(() => import("@features/User/pages/User"));

const CategoryPage = lazy(() => import("@features/Category/pages/Category"));
const AddCategoryPage = lazy(
  () => import("@features/Category/pages/AddCategory")
);
const EditCategoryPage = lazy(
  () => import("@features/Category/pages/EditCategory")
);

const ProductPage = lazy(() => import("@features/Product/pages/Product"));
const AddProductPage = lazy(() => import("@features/Product/pages/AddProduct"));
const EditProductPage = lazy(
  () => import("@features/Product/pages/EditProduct")
);

const VoucherPage = lazy(() => import("@features/Voucher/pages/Voucher"));
const AddVoucherPage = lazy(() => import("@features/Voucher/pages/AddVoucher"));
const EditVoucherPage = lazy(
  () => import("@features/Voucher/pages/EditVoucher")
);

const BlogPage = lazy(() => import("@features/Blog/pages/Blog"));
const AddBlogPage = lazy(() => import("@features/Blog/pages/AddBlog"));
const EditBlogPage = lazy(() => import("@features/Blog/pages/EditBlog"));

const OrderPage = lazy(() => import("@features/Order/pages/Order"));
const EditOrderPage = lazy(() => import("@features/Order/pages/EditOrder"));

const BannerPage = lazy(() => import("@features/Banner/pages/Banner"));
const LogoutPage = lazy(() => import("@features/Logout"));

export interface RoutesRendererProps {
  routes: RouteObject[];
}

export function RoutesRenderer({ routes }: RoutesRendererProps) {
  const renderedRoutes = useRoutes(routes);
  return renderedRoutes;
}

function AppRouter() {
  useAuth();

  const getRoutes = () => [
    {
      path: ROUTE_PATHS.DEFAULT,
      element: <RouteWrapper />,
      title: "",
      children: [
        {
          path: ROUTE_PATHS.DEFAULT,
          element: <AuthLayout />,
          title: "",
          children: [
            {
              path: ROUTE_PATHS.LOGIN,
              element: <LoginPage />,
              title: "",
            },
          ],
        },
        {
          path: ROUTE_PATHS.DEFAULT,
          element: <MainLayout />,
          title: "",
          children: [
            {
              path: ROUTE_PATHS.DEFAULT,
              index: true,
              element: <DashboardPage />,
              title: "Trang chủ",
            },
            {
              path: ROUTE_PATHS.VOUCHER,
              element: <VoucherPage />,
              title: "Voucher",
            },
            {
              path: ROUTE_PATHS.USER,
              element: <UserPage />,
              title: "Người dùng",
            },
            {
              path: ROUTE_PATHS.ORDER,
              element: <OrderPage />,
              title: "Đơn hàng",
            },
            {
              path: ROUTE_PATHS.EDIT_ORDER,
              element: <EditOrderPage />,
              title: "Chi tiết đơn hàng",
            },
            {
              path: ROUTE_PATHS.CATEGORY,
              element: <CategoryPage />,
              title: "Danh mục sản phẩm",
            },
            {
              path: ROUTE_PATHS.ADD_CATEGORY,
              element: <AddCategoryPage />,
              title: "Thêm danh mục sản phẩm",
            },
            {
              path: ROUTE_PATHS.EDIT_CATEGORY,
              element: <EditCategoryPage />,
              title: "Sửa danh mục sản phẩm",
            },
            {
              path: ROUTE_PATHS.PRODUCT,
              element: <ProductPage />,
              title: "Sản phẩm",
            },
            {
              path: ROUTE_PATHS.ADD_PRODUCT,
              element: <AddProductPage />,
              title: "Thêm sản phẩm",
            },
            {
              path: ROUTE_PATHS.EDIT_PRODUCT,
              element: <EditProductPage />,
              title: "Sửa sản phẩm",
            },
            {
              path: ROUTE_PATHS.VOUCHER,
              element: <VoucherPage />,
              title: "Voucher",
            },
            {
              path: ROUTE_PATHS.ADD_VOUCHER,
              element: <AddVoucherPage />,
              title: "Thêm voucher",
            },
            {
              path: ROUTE_PATHS.EDIT_VOUCHER,
              element: <EditVoucherPage />,
              title: "Sửa voucher",
            },
            {
              path: ROUTE_PATHS.BLOG,
              element: <BlogPage />,
              title: "Blog",
            },
            {
              path: ROUTE_PATHS.ADD_BLOG,
              element: <AddBlogPage />,
              title: "Thêm voucher",
            },
            {
              path: ROUTE_PATHS.EDIT_BLOG,
              element: <EditBlogPage />,
              title: "Sửa voucher",
            },
            {
              path: ROUTE_PATHS.BANNER,
              element: <BannerPage />,
              title: "Banner",
            },
            {
              path: ROUTE_PATHS.LOGOUT,
              element: <LogoutPage />,
              title: "Đăng xuất",
            },
          ],
        },
      ],
    },

    { path: "*", title: "", element: <NotFoundPage /> },
    {
      path: ROUTE_PATHS.PERMISSION_DENIED,
      title: "Không có quyền truy cập",
      element: <PermissionDeniedPage />,
    },
  ];

  return (
    <Router>
      <Suspense fallback={<GlobalLoading />}>
        <RoutesRenderer routes={getRoutes()} />
      </Suspense>
    </Router>
  );
}

export default AppRouter;
