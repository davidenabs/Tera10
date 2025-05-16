import { createColumnHelper } from "@tanstack/react-table";

// Define the type for fund request data
interface FundRequestData {
  id: number;
  project: string;
  milestone: string;
  status: string;
  requestDate: string;
  amountAccrued: string;
  actions: string;
}

// Sample data extracted from the image
export const fundRequestData: FundRequestData[] = [
  {
    id: 1,
    project: "Greenview Apartments",
    milestone: "Phase 1 ( Project Initiation site....",
    status: "Fund requested",
    requestDate: "07 May, 2025 7:30PM",
    amountAccrued: "12,980,291",
    actions: "View",
  },
  {
    id: 2,
    project: "Metro Living & Business Hub",
    milestone: "Phase 1 ( Project Initiation site....",
    status: "Fund requested",
    requestDate: "07 May, 2025 7:30PM",
    amountAccrued: "7,000,000",
    actions: "View",
  },
  {
    id: 3,
    project: "Harborview Mixed-Use Complex",
    milestone: "Phase 1 ( Project Initiation site....",
    status: "Fund requested",
    requestDate: "07 May, 2025 7:30PM",
    amountAccrued: "7,000,000",
    actions: "View",
  },
  {
    id: 4,
    project: "Unity Square Development",
    milestone: "Phase 1 ( Project Initiation site....",
    status: "Fund requested",
    requestDate: "07 May, 2025 7:30PM",
    amountAccrued: "7,000,000",
    actions: "View",
  },
  {
    id: 5,
    project: "Industrial Gateway Complex",
    milestone: "Phase 1 ( Project Initiation site....",
    status: "Fund requested",
    requestDate: "07 May, 2025 7:30PM",
    amountAccrued: "7,000,000",
    actions: "View",
  },
  {
    id: 6,
    project: "Warehouse District 42",
    milestone: "Phase 1 ( Project Initiation site....",
    status: "Fund requested",
    requestDate: "07 May, 2025 7:30PM",
    amountAccrued: "7,000,000",
    actions: "View",
  },
  {
    id: 7,
    project: "Production Zone Towers",
    milestone: "Phase 1 ( Project Initiation site....",
    status: "Fund requested",
    requestDate: "07 May, 2025 7:30PM",
    amountAccrued: "7,000,000",
    actions: "View",
  },
  {
    id: 8,
    project: "Royal Gardens Estate",
    milestone: "Phase 1 ( Project Initiation site....",
    status: "Fund requested",
    requestDate: "07 May, 2025 7:30PM",
    amountAccrued: "7,000,000",
    actions: "View",
  },
  {
    id: 9,
    project: "Riverside Lifestyle Center",
    milestone: "Phase 1 ( Project Initiation site....",
    status: "Fund requested",
    requestDate: "07 May, 2025 7:30PM",
    amountAccrued: "7,000,000",
    actions: "View",
  },
];

// Create column helper
const columnHelper = createColumnHelper<FundRequestData>();

// Define the columns for the table
export const fundRequestColumns = [
  columnHelper.display({
    id: "select",
    header: ({ table }) => (
      <input
        type="checkbox"
        id="select-all-rows"
        checked={table.getIsAllRowsSelected()}
        onChange={(e) => table.toggleAllRowsSelected(!!e.target.checked)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <input
        type="checkbox"
        id={`row-select-${row.id}`}
        checked={row.getIsSelected()}
        onChange={(e) => row.toggleSelected(!!e.target.checked)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  }),
  columnHelper.accessor("project", {
    header: () => "Project",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("milestone", {
    header: () => "Milestone",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("status", {
    header: () => "Status",
    cell: (info) => {
      const status = info.getValue();
      return (
        <div className="flex items-center">
          <div className="bg-blue-50 rounded-full py-1 px-2">
            <span className="inline-block w-2 h-2 bg-blue-500 mr-2 rounded-full"></span>
            <span className="text-blue-700">{status}</span>
          </div>
        </div>
      );
    },
  }),
  columnHelper.accessor("requestDate", {
    header: () => "Request Date",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("amountAccrued", {
    header: () => "Amount Accrued (NGN)",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("actions", {
    header: () => "Actions",
    cell: (info) => (
      <button className="text-blue-600 hover:underline">
        {info.getValue()}
      </button>
    ),
  }),
];

// For interactive table with open functionality
export const interactiveFundRequestColumns = ({
  onOpen,
}: {
  onOpen: (project: string) => void;
}) => [
  columnHelper.display({
    id: "select",
    header: ({ table }) => (
      <input
        type="checkbox"
        checked={table.getIsAllRowsSelected()}
        onChange={(e) => table.toggleAllRowsSelected(!!e.target.checked)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <input
        type="checkbox"
        checked={row.getIsSelected()}
        onChange={(e) => row.toggleSelected(!!e.target.checked)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  }),
  columnHelper.accessor("project", {
    header: () => "Project",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("milestone", {
    header: () => "Milestone",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("status", {
    header: () => "Status",
    cell: (info) => {
      const status = info.getValue();
      return (
        <span>{status}</span>
        // <div className="flex items-center">
        //   <span className="inline-block w-2 h-2 bg-blue-500 mr-2 rounded-full"></span>
        //   <span>{status}</span>
        // </div>
      );
    },
  }),
  columnHelper.accessor("requestDate", {
    header: () => "Request Date",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("amountAccrued", {
    header: () => "Amount Accrued (NGN)",
    cell: (info) => {
      return <span className="text-[#B17F1B]">{info.getValue()}</span>;
    },
  }),
  columnHelper.accessor("actions", {
    header: () => "Actions",
    cell: (info) => (
      <button
        className="text-blue-600 hover:underline"
        onClick={() => onOpen(info.row.original.project)}
      >
        {info.getValue()}
      </button>
    ),
  }),
];
