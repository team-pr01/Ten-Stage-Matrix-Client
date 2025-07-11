/* eslint-disable @typescript-eslint/no-explicit-any */
import Loader from "../../Shared/Loader/Loader";

type TableProps = {
  title?: any | string;
  tableHeaders: string[];
  data: any[];
  isLoading: boolean;
  classNames?: string;
};

const Table = ({ title, tableHeaders, data, isLoading, classNames }: TableProps) => {
  return (
    <div
      style={{
        boxShadow: "inset 4px 4px 33.2px 0px rgba(255, 255, 255, 0.20)",
        backdropFilter: "blur(5.05px)",
      }}
      className={`min-h-[350px] rounded-[28px] border-2 border-neutral-155 bg-neutral-155 flex flex-col p-5 xl:p-[30px] font-Outfit w-full h-full overflow-y-auto custom-scrollbar ${classNames}`}
    >
      {
        title &&
        <h1 className="text-2xl font-medium text-white">{title}</h1>
      }

      <div className="flex flex-col gap-[26px] mt-6">
        {isLoading ? (
          <Loader size="size-10 mt-5" />
        ) : (
          <div className="overflow-x-auto custom-scrollbar">
            <table className="min-w-[600px] w-full text-white">
              <thead>
                <tr className="border-b border-neutral-90 text-left">
                  {tableHeaders.map((header, idx) => (
                    <th key={idx} className="p-3 whitespace-nowrap capitalize">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data?.length < 1 ? (
                  <tr>
                    <td colSpan={tableHeaders.length} className="text-white mt-4 p-4 text-center">
                      No data found
                    </td>
                  </tr>
                ) : (
                  data.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b border-neutral-90 text-neutral-55"
                    >
                      {tableHeaders.map((header, i) => {
                        const key = header
                          .toLowerCase()
                          .replace(/\s+/g, "_")
                          .replace(/[^a-z0-9_]/gi, "");
                        return (
                          <td key={i} className="p-3 whitespace-nowrap">
                            {key === "serial_no" ? index + 1 : item?.[key] ?? "--"}
                          </td>
                        );
                      })}
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Table;
