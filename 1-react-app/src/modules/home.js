import React, { useState } from "react";
import AccountCard from "./AccountCard";
import RegistationForm from "./RegistationForm";

const Home = () => {
  const [name, useName] = useState("");
  const [city, useCity] = useState("");
  const [email, useEmail] = useState("");
  const [password, usePassword] = useState("");
  const [acc, useAcc] = useState(false);

  const HandleChangeEmail = (e) => {
    useEmail(e.target.value);
  };
  const HandleChangeName = (e) => {
    useName(e.target.value);
  };
  const HandleChangeCity = (e) => {
    useCity(e.target.value);
  };
  const HandleChangePassword = (e) => {
    usePassword(e.target.value);
  };

  const OnSubmitForm = () => {
    useAcc(true);
  };
  return (
    <div>
      {acc ? (
        <AccountCard name={name} city={city} email={email} />
      ) : (
        <RegistationForm
          handleChangeCity={HandleChangeCity}
          handleChangePassword={HandleChangePassword}
          handleChangeName={HandleChangeName}
          handleChangeEmail={HandleChangeEmail}
          onSubmitForm={OnSubmitForm}
          name={name}
          city={city}
          password={password}
          email={email}
        />
      )}
    </div>
  );
};
export default Home;
