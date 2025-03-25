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
    "/logout",
  ],
  manager: [],
  guest: ["/login", "/register"],
  onlyGuest: ["/login", "/register"],
};

export default RolePaths;
