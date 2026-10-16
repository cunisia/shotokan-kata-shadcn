import {
  createColumnHelper,
  tableFeatures,
  useTable,
} from "@tanstack/react-table";
import { cn } from "cn";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { type Motion, Side, type Technique } from "@/type";

const techniquesTablefeatures = tableFeatures({});

type TechniquesTableFeatures = typeof techniquesTablefeatures;

const columnHelper = createColumnHelper<TechniquesTableFeatures, Technique>();

const getSideName = (side: Side | undefined) => {
  if (!side) {
    return "";
  }
  switch (side) {
    case Side.HIDARI:
      return `left`;
    case Side.MIGI:
      return `right`;
  }
};

export const techniquesTableColumns = columnHelper.columns([
  columnHelper.accessor("side", {
    header: "Side",
    cell: (info) => getSideName(info.getValue()),
  }),
  columnHelper.accessor("name", {
    header: "Technique",
  }),
  columnHelper.accessor("target", {
    header: "Target",
  }),
]);

// Side and target are short words (left/right, jodan/chudan/gedan): fixed
// widths leave the remaining room to the technique name, which wraps.
const columnClassNames: Record<string, string> = {
  side: "w-16",
  target: "w-20",
};

export default function TechniquesTables({ motion }: { motion: Motion }) {
  const table = useTable({
    features: techniquesTablefeatures,
    data: motion.techniques ?? [],
    columns: techniquesTableColumns,
  });

  return (
    // The table is fixed to the card width, so the overflow-x-auto container
    // of the shadcn table never needs to scroll.
    <div className="flex-none *:data-[slot=table-container]:overflow-x-visible">
      <Table className="table-fixed">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    key={header.id}
                    className={cn(
                      "text-muted-foreground whitespace-normal wrap-break-word",
                      columnClassNames[header.column.id],
                    )}
                  >
                    {header.isPlaceholder ? null : (
                      <table.FlexRender header={header} />
                    )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getAllCells().map((cell) => (
                  <TableCell
                    className="capitalize whitespace-normal wrap-break-word"
                    key={cell.id}
                  >
                    <table.FlexRender cell={cell} />
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={techniquesTableColumns.length}
                className="h-24 text-center whitespace-normal"
              >
                No techniques.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
