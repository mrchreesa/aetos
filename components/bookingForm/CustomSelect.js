import { forwardRef } from "react";

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

import { fieldStyles } from "./CustomInput";

const CustomSelect = forwardRef(function CustomSelect(
  { id, label, error, children, ...selectProps },
  ref
) {
  return (
    <FormControl isInvalid={Boolean(error)} id={id} mb="6">
      <FormLabel srOnly>{label}</FormLabel>
      <Select ref={ref} iconColor="primary.beaver" {...fieldStyles} {...selectProps}>
        {children}
      </Select>
      <FormErrorMessage fontSize="xs" mt="1">
        {error?.message}
      </FormErrorMessage>
    </FormControl>
  );
});

CustomSelect.propTypes = {
  children: PropTypes.node,
  error: PropTypes.object,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default CustomSelect;
