import React, { useState } from "react";

const RegistationForm = ({
  city,
  name,
  email,
  password,
  handleChangeCity,
  handleChangePassword,
  handleChangeEmail,
  handleChangeName,
  onSubmitForm,
}) => {
  const checkPass = (password) => {
    const beginWithoutDigit = /^\D.*$/;
    const withoutSpecialChars = /^[^-() /]*$/;
    const containsLetters = /^.*[a-zA-Z]+.*$/;
    if (
      beginWithoutDigit.test(password) &&
      containsLetters.test(password) &&
      containsLetters.test(password)
    ) {
      return true;
    } else {
      return false;
    }
  };
  const checkEmail = (email) => {
    const emailVaidation =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return emailVaidation.test(email);
  };

  const ValidForm = () => {
    return checkEmail(email) && checkPass(password);
  };

  return (
    <div>
      <p>Registation Form</p>
      <form>
        <div>
          <label>Name</label>
          <input
            value={name}
            onChange={(event) => handleChangeName(event)}
          ></input>
        </div>
        <div>
          <label>City</label>
          <input
            value={city}
            onChange={(event) => handleChangeCity(event)}
          ></input>
        </div>
        <div>
          <label>Email</label>
          <input
            value={email}
            onChange={(event) => handleChangeEmail(event)}
          ></input>
        </div>
        <div>
          <label>Password</label>
          <input
            value={password}
            onChange={(event) => handleChangePassword(event)}
          ></input>
        </div>
        {ValidForm() && <button onClick={onSubmitForm}>Save</button>}
      </form>
    </div>
  );
};
export default RegistationForm;
