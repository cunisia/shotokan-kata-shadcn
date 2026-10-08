import {
  createColumnHelper,
  tableFeatures,
  useTable,
} from "@tanstack/react-table";
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
      return `${side} (left)`;
    case Side.MIGI:
      return `${side} (right)`;
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

export default function TechniquesTables({ motion }: { motion: Motion }) {
  const table = useTable({
    features: techniquesTablefeatures,
    data: motion.techniques ?? [],
    columns: techniquesTableColumns,
  });

  return (
    <Table>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              return (
                <TableHead key={header.id}>
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
                <TableCell className="capitalize" key={cell.id}>
                  <table.FlexRender cell={cell} />
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell
              colSpan={techniquesTableColumns.length}
              className="h-24 text-center"
            >
              No techniques.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
