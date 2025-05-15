import React from "react";

export interface Column<T> {
  key: keyof T | string;
  header: string;
  render?: (item: T) => React.ReactNode;
  className?: string;
};

interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  rowKey: (item: T) => string | number;
  className?: string;
};

function Table<T>({ data, columns, rowKey, className = "" }: TableProps<T>) {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="min-w-full rounded-lg">
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.key.toString()}
                className={`text-left px-4 py-2 text-sm font-semibold text-gray-700 bg-blue-50 border-4 border-white rounded-xl ${col.className ?? ""}`}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((item) => (
            <tr key={rowKey(item)} className="hover:bg-gray-50 transition-colors">
              {columns.map((col) => (
                <td key={col.key.toString()} className={`px-4 py-2 text-sm text-gray-800 ${col.className ?? ""}`}>
                  {col.render ? col.render(item) : ((item[col.key as keyof T] as React.ReactNode)??"-") }
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Table