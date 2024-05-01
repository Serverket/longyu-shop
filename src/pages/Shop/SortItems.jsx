import { useId } from "react";
import { useSearchParams } from "react-router-dom";

export function SortItems({ onChange }) {
  const selectId = useId();
  const [searchParams, setSearchParams] = useSearchParams();
  const inputValue = searchParams.get("sort") || "";

  return (
    <div>
      <span className="inline-block mr-2">Sort by</span>
      <select
        name={selectId}
        id={selectId}
        className="px-2 py-1 text-base transition-colors ease-in-out border rounded cursor-pointer border-slate-300 bg-slate-50 hover:border-slate-400"
        value={inputValue}
        onChange={(e) => {
          searchParams.delete("page");

          if (e.target.value !== "") {
            searchParams.set("sort", e.target.value);
          } else {
            searchParams.delete("sort");
          }
          setSearchParams(searchParams);

          onChange();
        }}
      >
        <option value="">Popularidad</option>
        <option value="regularPrice.asc">Precio Bajo a Alto</option>
        <option value="regularPrice.dsc">Precio Alto a Bajo</option>
        <option value="name.asc">A - Z</option>
        <option value="name.dsc">Z - A</option>
      </select>
    </div>
  );
}
