import { Button } from "@/components/ui/button";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";

interface AppTablePaginationProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  table: any;
}

const AppTablePagination = ({ table }: AppTablePaginationProps) => {
  return (
    <div className="flex items-center justify-end space-x-2 py-4 px-">
      <div className="text-[#9FA2B4] text-sm">
        Showing{" "}
        {table.getState().pagination.pageIndex *
          table.getState().pagination.pageSize +
          1}
        -
        {Math.min(
          (table.getState().pagination.pageIndex + 1) *
            table.getState().pagination.pageSize,
          table.getCoreRowModel().rows.length
        )}{" "}
        entries of {table.getCoreRowModel().rows.length}
      </div>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        <ArrowLeft2 size={32} color="#9FA2B4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        <ArrowRight2 size={32} color="#9FA2B4" />
      </Button>
    </div>
  );
};

export default AppTablePagination;
