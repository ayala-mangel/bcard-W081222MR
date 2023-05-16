import React from "react";
import useForm from "../../forms/hooks/useForm";
import Joi from "joi";
import Container from "@mui/material/Container";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import ROUTES from "../../routes/routesModel";

type Data = {
  first: string;
  last: string;
};

const FormTest = () => {
  const INITIAL_FORM = {
    first: "",
    last: "",
  };

  const SCHEMA = {
    first: Joi.string().min(2).required(),
    last: Joi.string().min(2).required(),
  };

  const handleSubmit = (data: Data) => {
    console.log(data);
    handleReset();
  };

  const { value, ...rest } = useForm(INITIAL_FORM, SCHEMA, handleSubmit);
  const { handleInputChange, handleReset, onSubmit, validateForm } = rest;
  const { data, errors } = value;

  return (
    <Container
      sx={{
        mt: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Form
        title="Form Test"
        onSubmit={onSubmit}
        onReset={handleReset}
        onFormChange={validateForm}
        to={ROUTES.SANDBOX}>
        <Input
          label="fiRst NaMe"
          name="first"
          data={data}
          error={errors.first}
          onInputChange={handleInputChange}
          breakPoints={{ xs: 12, md: 6 }}
        />
        <Input
          label="last name"
          name="last"
          data={data}
          error={errors.last}
          onInputChange={handleInputChange}
          breakPoints={{ xs: 12, md: 6 }}
        />
      </Form>
    </Container>
  );
};

export default FormTest;
