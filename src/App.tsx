import { useForm } from "react-hook-form";
import styled from "styled-components";

import Radio from "./components/Radio";
import { countries } from "./mockData.json";
import "./App.css";

const StyledContainer = styled.section`
  margin: auto;
  max-width: 1000px;
  padding: 48px;
  text-align: left;
`;

const StyledRadioSelections = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;

  > li {
    margin-right: 8px;
  }
`;

const StyledFieldSet = styled.fieldset``;
const StyledFieldSetLabel = styled.legend``;

const StyledField = styled.section``;

const StyledFieldLabel = styled.label`
  display: block;
`;

type FormData = {
  companyCountry: string;
  name: string;
};

const defaultValues: FormData = {
  companyCountry: "VN",
  name: "",
};

function App() {
  const { register, handleSubmit } = useForm<FormData>({
    defaultValues,
  });

  return (
    <StyledContainer>
      <h1>Create Company</h1>
      <form onSubmit={handleSubmit(console.log)}>
        <StyledFieldSet>
          <StyledField>
            <StyledFieldLabel>Country</StyledFieldLabel>
            <StyledRadioSelections>
              {countries.map((country) => (
                <li key={country.id}>
                  <Radio
                    key={country.id}
                    label={country.name}
                    {...register("companyCountry")}
                  />
                </li>
              ))}
            </StyledRadioSelections>
          </StyledField>
          <StyledField>
            <StyledFieldLabel>Company Name</StyledFieldLabel>
            <input {...register("name")} type="text" />
          </StyledField>
        </StyledFieldSet>
        <StyledFieldSet>
          <StyledFieldSetLabel>Address details</StyledFieldSetLabel>
        </StyledFieldSet>
      </form>
    </StyledContainer>
  );
}

export default App;
