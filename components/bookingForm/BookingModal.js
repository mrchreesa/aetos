import {
  Button,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

const BookingModal = ({ isOpen, onClose, bookingData }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        pt={{ base: 4, sm: 12, md: 12 }}
        pb={{ base: 4, sm: 6 }}
        borderRadius="none"
        mx={{ base: 0, sm: 6 }}
        bg="white"
      >
        <ModalCloseButton color="black" />
        <ModalBody>
          {bookingData && (
            <Flex
              justify="center"
              direction="column"
              align="center"
              textAlign="center"
            >
              <Heading as="h2" variant="h3l" mb="8" fontSize="2xl">
                Thank you! <br />
                You'll receive a confirmation email shortly!
              </Heading>

              <Table variant="simple" size="sm">
                <TableCaption>
                  Aetos Greek Taverna
                  <br />
                  156A Seven Sisters Road
                  <br />
                  N7 7PL, London, UK
                  <br />
                  02072635582
                </TableCaption>
                <Thead>
                  <Tr>
                    <Td>Name:</Td>
                    <Td isNumeric>{bookingData.name}</Td>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>Email: </Td>
                    <Td isNumeric>{bookingData.email}</Td>
                  </Tr>
                  <Tr>
                    <Td>Table for</Td>
                    <Td isNumeric>{bookingData.seats}</Td>
                  </Tr>
                </Tbody>
              </Table>
            </Flex>
          )}
        </ModalBody>

        <ModalFooter justifyContent="center">
          <Button variant="black" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

BookingModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  bookingData: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    seats: PropTypes.number,
  }),
};

export default BookingModal;
