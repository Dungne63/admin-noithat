import { FC, useCallback, useMemo } from "react";
import useProductTable, { Props, ReceivedProps } from "./hook";
import {
  Chip,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
} from "@heroui/react";
import { formatVND } from "@utils/fomart.util";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";

const ProductTableLayout: FC<Props> = ({
  products,
  columns,
  deleteProduct,
  navigateEditProduct,
}) => {
  const renderCell = useCallback((item: any, columnKey: React.Key) => {
    const cellValue = item[columnKey as keyof any];

    switch (columnKey) {
      case "status":
        return (
          <Chip
            color={item.status === "active" ? "success" : "danger"}
            size="sm"
            variant="bordered"
          >
            {item.status === "active" ? "Hoạt động" : "Không hoạt động"}
          </Chip>
        );

      case "price":
        return (
          <div className="flex flex-col">
            <p>{formatVND(item.price)}</p>
          </div>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2 justify-center">
            <Tooltip content="Sửa">
              <span
                onClick={() => navigateEditProduct(item._id)}
                className="text-lg text-default-400 cursor-pointer active:opacity-50"
              >
                <PencilIcon className="size-4 text-success" />
              </span>
            </Tooltip>
            <Tooltip content="Xoá">
              <span
                onClick={() => deleteProduct(item._id)}
                className="text-lg text-default-400 cursor-pointer active:opacity-50"
              >
                <TrashIcon className="size-4 text-danger" />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  //   const setPage = (page: number) => {
  //     dispatch(
  //       EGiftActions.setPagination({
  //         ...pagination,
  //         page,
  //       })
  //     );
  //     dispatch(EGiftActions.getEGifts({ page }));
  //   };

  //   const renderPagination = useMemo(() => {
  //     return (
  //       pagination?.totalPages > 1 && (
  //         <div className="flex w-full justify-center">
  //           <Pagination
  //             showControls
  //             page={pagination?.page}
  //             total={pagination?.totalPages}
  //             onChange={(page) => setPage(page)}
  //           />
  //         </div>
  //       )
  //     );
  //   }, [pagination, setPage]);

  const renderTable = useMemo(() => {
    return (
      <Table
        classNames={{
          wrapper: "shadow-none",
        }}
        isStriped
        aria-label="category table"
        // bottomContent={renderPagination}
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.align as any}
              width={column.width as any}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody
          items={products.map((item: any, index: number) => ({
            ...item,
            indexNumber: index + 1,
          }))}
        >
          {(item: any) => (
            <TableRow key={item?._id}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    );
  }, [products, columns, renderCell]);

  return <div>{renderTable}</div>;
};

const ProductTable: FC<ReceivedProps> = (props) => (
  <ProductTableLayout {...useProductTable(props)} />
);

export default ProductTable;
