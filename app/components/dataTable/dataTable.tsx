import type { ReactNode } from "react";

type DataTableProps = {
  entries: Record<string, CellValueProps>[];
  headerDisplay?: Record<string, string>;
};

type CellValueProps = string | number | ReactNode;

export const DataTable = ({ entries, headerDisplay = {} }: DataTableProps) => {

  if (!entries.length) return <div className="p-4 text-muted-foreground text-sm">No data</div>;

  const keys = Object.keys(entries[0]);
  if (!keys.every((key) => entries.every((entry) => key in entry))) {
    throw new Error("All entries must have the same keys");
  }

  const headerKeys = Object.keys(entries[0]);

  return (
    <div className="overflow-auto">
      <table className="w-full text-left">
        <thead className="">
          <tr>
            {headerKeys.map((key) => (
              <th key={key} className="px-4 py-2 font-light dark:text-gray-400">
                {headerDisplay[key] ?? key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {entries.map((row, i) => (
            <tr key={i} className="">
              {headerKeys.map((key) => (
                <td key={key} className="px-4 py-2 border-t">
                  {row[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};