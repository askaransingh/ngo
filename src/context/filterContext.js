// src/context/filterContext.js
import React, { createContext, useContext, useState } from 'react';

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filterData, setFilterData] = useState({
    searchTerm: '',
    selectedTags: [],
  });

  return (
    <FilterContext.Provider value={{ filterData, setFilterData }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
