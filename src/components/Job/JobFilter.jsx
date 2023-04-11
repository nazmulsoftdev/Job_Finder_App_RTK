import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchAc } from "../../features/filter/filterSlice";
import { sortFilterAc } from "../../features/filter/filterSlice";

function JobFilter() {
  const [salaryRange, setSalaryRange] = useState("");
  const dispatch = useDispatch();
  const { searchFilter } = useSelector((state) => state.filters);

  //  Search Handler
  const handleSearch = (e) => {
    dispatch(searchAc(e.target.value));
  };

  // Sort by salary low to high

  const sortPriceHandler = (e) => {
    setSalaryRange(e.target.value);
    console.log(e.target.value);
    dispatch(sortFilterAc(e.target.value));
  };

  return (
    <div>
      <h1 className="lws-section-title">All Available Jobs</h1>
      <div className="flex gap-4">
        <div className="search-field group flex-1">
          <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
          <input
            type="text"
            placeholder="Search Job"
            className="search-input"
            id="lws-searchJob"
            value={searchFilter}
            onChange={handleSearch}
          />
        </div>
        <select
          id="lws-sort"
          name="sort"
          autocomplete="sort"
          className="flex-1"
          value={salaryRange}
          onChange={sortPriceHandler}
        >
          <option value="Default">Default</option>
          <option value="lowto_High">Salary (Low to High)</option>
          <option value="highto_Low">Salary (High to Low)</option>
        </select>
      </div>
    </div>
  );
}

export default JobFilter;
