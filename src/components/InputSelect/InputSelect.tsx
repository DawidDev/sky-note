import React from "react";
import { FormControl, Input } from "@chakra-ui/react";
import Select from "react-select";

type Option = {
  value: string | number;
  label: string | number;
};

interface InputSelectProps {
  options: Array<Option>;
  handleChange: any;
  placeholder: string;
  isMulti?: boolean
}

const InputSelect = ({
  options,
  handleChange,
  placeholder,
  isMulti,
  ...props
}: InputSelectProps) => {
  return (
    <>
      <Select
        options={options}
        onChange={(value) => handleChange(value)}
        placeholder={placeholder}
        isMulti={isMulti}
        styles={{
          control: (provided, state) => ({
            ...provided,
            border: "1px solid #272D81",
            backgroundColor: "transparent",
          }),
          option: (provided, state) => ({
            ...provided,
            borderBottom: "1px dotted pink",
            color: state.isSelected ? "#ffffff" : "#212121",
            backgroundColor: state.isSelected ? "#272D81" : "#ffffff",
            padding: 10,
            transition: "0.25s",
            ":hover": {
              backgroundColor: state.isSelected ? "" : "#cacaca",
              cursor: "pointer",
            },
          }),
          singleValue: (provided, state) => ({
            ...provided,
            color: "#ffffff",
          }),
        }}
      />
    </>
  );
};
export default InputSelect;
