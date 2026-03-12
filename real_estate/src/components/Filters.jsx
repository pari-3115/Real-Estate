import Select from "react-select";

function Filters({ setTypeFilter, setPriceFilter }) {

  const developerOptions = [
    { value: "all", label: "All" },
    { value: "apartment", label: "Apartment" },
    { value: "villa", label: "Villa" }
  ];

  const typeOptions = [
    { value: "all", label: "All" },
    { value: "1000000", label: "Under 1M" },
    { value: "1500000", label: "Under 1.5M" },
    { value: "2000000", label: "Under 2M" }
  ];

  const customStyles = {
    control: (base) => ({
      ...base,
      backgroundColor: "white",
      border: "1px solid black",
      boxShadow: "none",
      width: "180px"
    }),

    menu: (base) => ({
      ...base,
      backgroundColor: "#3f3f46"
    }),

    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused ? "#52525b" : "#3f3f46",
      color: "white",
      cursor: "pointer"
    }),

    singleValue: (base) => ({
      ...base,
      color: "black"
    }),

    dropdownIndicator: (base) => ({
      ...base,
      color: "black"
    }),

    indicatorSeparator: () => ({
      display: "none"
    })
  };

  return (

    <div className="flex justify-center gap-10 mt-6 flex-wrap">

      <div className="flex flex-col items-center">

        <label className="mb-2 text-sm">
          Developer
        </label>

        <Select
          options={developerOptions}
          defaultValue={developerOptions[0]}
          styles={customStyles}
          onChange={(selected) => setTypeFilter(selected.value)}
        />

      </div>

      <div className="flex flex-col items-center">

        <label className="mb-2 text-sm">
          Type
        </label>

        <Select
          options={typeOptions}
          defaultValue={typeOptions[0]}
          styles={customStyles}
          onChange={(selected) => setPriceFilter(selected.value)}
        />

      </div>

    </div>

  );
}

export default Filters;