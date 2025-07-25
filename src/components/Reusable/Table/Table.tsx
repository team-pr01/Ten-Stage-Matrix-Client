/* eslint-disable @typescript-eslint/no-explicit-any */
import Loader from "../../Shared/Loader/Loader";

type TableProps = {
  title?: any | string;
  tableHeaders: string[];
  data: any[];
  isLoading: boolean;
  isFetching: boolean;
  classNames?: string;
  AllData?: any;
  page: number;
  setPage?: any;
};

const Table = ({
  title,
  tableHeaders,
  data,
  isLoading,
  isFetching,
  classNames,
  AllData,
  page,
  setPage,
}: TableProps) => {
  return (
    <div
      style={{
        boxShadow: "inset 4px 4px 33.2px 0px rgba(255, 255, 255, 0.20)",
        backdropFilter: "blur(5.05px)",
      }}
      className={`max-w-full lg:max-w-[1000px] xl:max-w-[920px] 2xl:max-w-[1100px] min-h-[350px] rounded-[28px] border-2 border-neutral-155 bg-neutral-155 flex flex-col p-5 xl:p-[30px] font-Outfit w-full h-full overflow-y-auto custom-scrollbar ${classNames}`}
    >
      {title && <h1 className="text-2xl font-medium text-white">{title}</h1>}

      <div className="flex flex-col gap-[26px] mt-6">
        {isLoading || isFetching ? (
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
                    <td
                      colSpan={tableHeaders.length}
                      className="text-white mt-4 p-4 text-center"
                    >
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
                            {item?.[key] ?? "--"}
                          </td>
                        );
                      })}
                    </tr>
                  ))
                )}
              </tbody>
            </table>

            {AllData?.data?.pagination?.totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-6 flex-wrap">
                {/* Previous */}
                <button
                  onClick={() =>
                    setPage((prev: number) => Math.max(prev - 1, 1))
                  }
                  disabled={page === 1}
                  className="px-3 py-1 bg-neutral-25/10 shadow-custom-dropdown cursor-pointer text-white rounded disabled:opacity-50"
                >
                  Previous
                </button>

                {/* Dynamic Page Buttons */}
                {(() => {
                  const totalPages = AllData?.data?.pagination?.totalPages || 1;
                  const pagesToShow: (number | "...")[] = [];

                  if (totalPages <= 10) {
                    for (let i = 1; i <= totalPages; i++) pagesToShow.push(i);
                  } else {
                    pagesToShow.push(1); // First page

                    if (page > 4) pagesToShow.push("...");

                    const start = Math.max(2, page - 2);
                    const end = Math.min(totalPages - 1, page + 2);

                    for (let i = start; i <= end; i++) {
                      pagesToShow.push(i);
                    }

                    if (page < totalPages - 3) pagesToShow.push("...");

                    pagesToShow.push(totalPages); // Last page
                  }

                  return pagesToShow.map((p, idx) =>
                    p === "..." ? (
                      <span
                        key={`ellipsis-${idx}`}
                        className="px-3 py-1 text-white"
                      >
                        ...
                      </span>
                    ) : (
                      <button
                        key={p}
                        onClick={() => setPage(p)}
                        className={`px-3 py-1 shadow-custom-dropdown cursor-pointer rounded disabled:opacity-50 ${
                          page === p
                            ? "bg-primary-10 text-white"
                            : "bg-neutral-25/10 text-white"
                        }`}
                      >
                        {p}
                      </button>
                    )
                  );
                })()}

                {/* Next */}
                <button
                  onClick={() =>
                    setPage((prev: number) =>
                      Math.min(prev + 1, AllData?.data?.pagination?.totalPages)
                    )
                  }
                  disabled={page === AllData?.data?.pagination?.totalPages}
                  className="px-3 py-1 bg-neutral-25/10 shadow-custom-dropdown cursor-pointer text-white rounded disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Table;
