import { useEffect, useMemo, useState } from "react";

import {
  Box,
  Button,
  Flex,
  IconButton,
  SimpleGrid,
  Text,
  useDisclosure,
  useToast,
  VisuallyHidden,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { BOOKING_HOURS } from "../../constants/business";
import { getTimeSlots, toISODate, validateSlot } from "../../lib/booking";

import BookingModal from "./BookingModal";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";

const PHONE_PATTERN = /^\+?[0-9 ()-]{7,20}$/;

const schema = yup.object().shape({
  name: yup.string().trim().required("Please enter your name").max(80),
  email: yup
    .string()
    .trim()
    .email("Please enter a valid email")
    .required("Please enter your email"),
  phone: yup
    .string()
    .trim()
    .required("Please enter your phone number")
    .matches(PHONE_PATTERN, "Please enter a valid phone number"),
  date: yup.string().required("Please choose a date"),
  time: yup
    .string()
    .required("Please choose a time")
    .test("bookable", "Please choose another time", function check(time) {
      const message = validateSlot(this.parent.date, time);
      return message ? this.createError({ message }) : true;
    }),
  // Honeypot: real visitors never see or fill this in.
  company: yup.string(),
});

const formatTime = (hhmm) => {
  const [h, m] = hhmm.split(":").map(Number);
  const period = h >= 12 ? "pm" : "am";
  return `${h % 12 || 12}:${String(m).padStart(2, "0")} ${period}`;
};

const BookingForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [guests, setGuests] = useState(2);
  const [reservation, setReservation] = useState(null);
  // Computed on the client only, so the server-rendered HTML has no
  // timezone-dependent "today" baked into it.
  const [today, setToday] = useState("");

  useEffect(() => {
    setToday(toISODate(new Date()));
  }, []);

  const {
    handleSubmit,
    register,
    reset,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { date: "", time: "", company: "" },
  });

  const selectedDate = watch("date");
  const selectedTime = watch("time");
  const slots = useMemo(() => getTimeSlots(selectedDate), [selectedDate]);

  // Clear a time that is no longer valid after the date changes.
  useEffect(() => {
    if (selectedTime && !slots.includes(selectedTime)) setValue("time", "");
  }, [slots, selectedTime, setValue]);

  const onSubmit = async (values) => {
    const payload = { ...values, guests };
    try {
      await axios.post("/api/contact", payload);
      setReservation(payload);
      onOpen();
      reset();
      setGuests(2);
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        "Please try again, or call us to book.";
      toast({
        title: "We couldn't send your request",
        description: message,
        status: "error",
        duration: 8000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <Box
      w="full"
      maxW={{ base: "full", sm: "540px" }}
      bg="white"
      p={{ base: 6, md: 10, xl: 12 }}
      shadow="2xl"
      id="form"
    >
      <BookingModal isOpen={isOpen} onClose={onClose} bookingData={reservation} />

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <CustomInput
          id="name"
          label="Name"
          autoComplete="name"
          error={errors.name}
          {...register("name")}
        />
        <CustomInput
          id="email"
          label="Email"
          type="email"
          autoComplete="email"
          inputMode="email"
          error={errors.email}
          {...register("email")}
        />
        <CustomInput
          id="phone"
          label="Phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          error={errors.phone}
          {...register("phone")}
        />

        <SimpleGrid columns={{ base: 1, md: 2 }} spacingX="4">
          <CustomInput
            id="date"
            label="Date"
            type="date"
            min={today || undefined}
            error={errors.date}
            {...register("date")}
          />
          <CustomSelect
            id="time"
            label="Time"
            placeholder={selectedDate ? "Time" : "Time (pick a date first)"}
            isDisabled={!selectedDate || slots.length === 0}
            error={errors.time}
            {...register("time")}
          >
            {slots.map((slot) => (
              <option key={slot} value={slot}>
                {formatTime(slot)}
              </option>
            ))}
          </CustomSelect>
        </SimpleGrid>

        {/* Honeypot field, hidden from people and assistive tech */}
        <VisuallyHidden aria-hidden="true">
          <label htmlFor="company">Company</label>
          <input
            id="company"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("company")}
          />
        </VisuallyHidden>

        <Flex
          mb="8"
          borderBottom="1px"
          borderBottomColor="secondary.flushedgray"
          justify="space-between"
          align="center"
          role="group"
          aria-labelledby="guests-label"
        >
          <IconButton
            variant="flushed"
            size="sm"
            h="48px"
            minW="48px"
            fontSize="2xl"
            aria-label="Remove a guest"
            icon={<span aria-hidden="true">−</span>}
            onClick={() => setGuests((g) => Math.max(1, g - 1))}
            isDisabled={guests <= 1}
          />
          <Text
            id="guests-label"
            fontWeight="bold"
            fontSize="lg"
            aria-live="polite"
          >
            {guests} {guests === 1 ? "guest" : "guests"}
          </Text>
          <IconButton
            variant="flushed"
            size="sm"
            h="48px"
            minW="48px"
            fontSize="2xl"
            aria-label="Add a guest"
            icon={<span aria-hidden="true">+</span>}
            onClick={() =>
              setGuests((g) => Math.min(BOOKING_HOURS.maxGuests, g + 1))
            }
            isDisabled={guests >= BOOKING_HOURS.maxGuests}
          />
        </Flex>

        <Button
          variant="black"
          type="submit"
          w="full"
          isLoading={isSubmitting}
          loadingText="Sending"
        >
          Request booking
        </Button>
      </form>
    </Box>
  );
};

export default BookingForm;
