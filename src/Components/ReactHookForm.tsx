import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Button, FormErrorMessage, Input } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, useForm } from "react-hook-form";
import { z } from "zod";

interface IProps {
  userName: string,
  email: string,
  phoneNumber: number,
  password: string
}

const schema = z.object({
  userName: z.string()
    .min(4, { message: "Minimum 4 character required" })
    .max(20, { message: "Maximum 20 character" }),
  email: z.string()
    .email({ message: "Invalid email" }),
  password: z.string()
    .min(8, { message: "minimum 8 character " })
    .max(20, { message: "Maximum 20 character" }),
})

function UserForm() {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = useForm<IProps>({
    resolver: zodResolver(schema),
  });

  const onsubmit = () => {
    alert("Form have been submited");
  };

  return (
    <>
      <h2>User Form</h2>
      <form onSubmit={handleSubmit(onsubmit)}>
        <FormControl id="userName" isRequired isInvalid={!!errors.userName}>
          <FormLabel>UserName</FormLabel>
          <Input placeholder="Enter Name" {...register("userName")} />
          <FormErrorMessage>
            {errors.userName && errors.userName.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl id="email" isRequired isInvalid={!!errors.email}>
          <FormLabel htmlFor="Enter name">Email </FormLabel>
          <Input
            type="email"
            placeholder="Enter Email"
            {...register("email")}
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl id="phoneNumber" isRequired>
          <FormLabel htmlFor="name">PhoneNumber</FormLabel>
          <Input
            type="number"
            placeholder="Enter PhoneNumber"
            {...register("phoneNumber")}
          />
        </FormControl>
        <FormControl id="passoword" isRequired isInvalid={!!errors.password}>
          <FormLabel htmlFor="name">Password</FormLabel>
          <Input
            type="password"
            placeholder="Enter Password"
            {...register("password")}
          />
          <FormErrorMessage>
            {errors.password && errors.password.message}
          </FormErrorMessage>
        </FormControl>
        <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
          Submit
        </Button>
      </form>
      <h4>On Submitting you get alert message</h4>
    </>
  );
}

export default UserForm;

