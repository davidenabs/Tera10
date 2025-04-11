/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { flexRender } from "@tanstack/react-table";
import {
  ComponentType,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
} from "react";

interface AppTableProps {
  table: any;
  className?: string;
  noResultsMessage?: string;
  tableCellClassName?: string;
  tableHeadClassName?: string;
}

const AppTable = ({
  table,
  className,
  noResultsMessage = "No results.",
  tableCellClassName,
  tableHeadClassName,
}: AppTableProps) => {
  return (
    <Table className={className}>
      <TableHeader className="bg-background">
        {table
          .getHeaderGroups()
          .map(
            (headerGroup: { id: Key | null | undefined; headers: any[] }) => (
              <TableRow key={headerGroup.id} className="bg-[#F9FAFB]">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className={`text-start px-5 py-4 ${tableHeadClassName}`}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            )
          )}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows?.length ? (
          table
            .getRowModel()
            .rows.map(
              (row: {
                id: Key | null | undefined;
                getIsSelected: () => any;
                getVisibleCells: () => {
                  id: Key | null | undefined;
                  column: {
                    columnDef: {
                      cell:
                        | string
                        | number
                        | bigint
                        | boolean
                        | ComponentType<any>
                        | ReactElement<
                            unknown,
                            string | JSXElementConstructor<any>
                          >
                        | Iterable<ReactNode>
                        | ReactPortal
                        | Promise<
                            | string
                            | number
                            | bigint
                            | boolean
                            | ReactPortal
                            | ReactElement<
                                unknown,
                                string | JSXElementConstructor<any>
                              >
                            | Iterable<ReactNode>
                            | null
                            | undefined
                          >
                        | null
                        | undefined;
                    };
                  };
                  getContext: () => any;
                }[];
              }) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row
                    .getVisibleCells()
                    .map(
                      (cell: {
                        id: Key | null | undefined;
                        column: {
                          columnDef: {
                            cell:
                              | string
                              | number
                              | bigint
                              | boolean
                              | ComponentType<any>
                              | ReactElement<
                                  unknown,
                                  string | JSXElementConstructor<any>
                                >
                              | Iterable<ReactNode>
                              | ReactPortal
                              | Promise<
                                  | string
                                  | number
                                  | bigint
                                  | boolean
                                  | ReactPortal
                                  | ReactElement<
                                      unknown,
                                      string | JSXElementConstructor<any>
                                    >
                                  | Iterable<ReactNode>
                                  | null
                                  | undefined
                                >
                              | null
                              | undefined;
                          };
                        };
                        getContext: () => any;
                      }) => (
                        <TableCell
                          key={cell.id}
                          className={`px-5 py-3  text-[13px] ${tableCellClassName}`}
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      )
                    )}
                </TableRow>
              )
            )
        ) : (
          <TableRow>
            <TableCell
              colSpan={table.getAllColumns().length}
              className="h-24 text-center"
            >
              {noResultsMessage}
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default AppTable;
