const RolePaths: { [key: string]: string[] } = {
  admin: [
    "/",
    "/voucher",
    "/product",
    "/order",
    "/user",
    "/blog",
    "/banner",
    "/category",
    "/category/add",
    "/category/edit/:id",
    "/product",
    "/product/add",
    "/product/edit/:id",
    "/logout",
  ],
  manager: [],
  guest: ["/login", "/register"],
  onlyGuest: ["/login", "/register"],
};

export default RolePaths;
