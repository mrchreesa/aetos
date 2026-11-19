import { forwardRef } from "react";

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

export const fieldStyles = {
  variant: "flushed",
  bg: "white",
  color: "primary.codgray",
  fontSize: "md",
  h: "48px",
  borderBottomColor: "secondary.flushedgray",
  focusBorderColor: "primary.beaver",
  _placeholder: { color: "secondary.inputgray" },
};

/** Text input with a visually hidden label and inline error. */
const CustomInput = forwardRef(function CustomInput(
  { id, label, error, ...inputProps },
  ref
) {
  return (
    <FormControl isInvalid={Boolean(error)} id={id} mb="6">
      <FormLabel srOnly>{label}</FormLabel>
      <Input ref={ref} placeholder={label} {...fieldStyles} {...inputProps} />
      <FormErrorMessage fontSize="xs" mt="1">
        {error?.message}
      </FormErrorMessage>
    </FormControl>
  );
});

CustomInput.propTypes = {
  error: PropTypes.object,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default CustomInput;
