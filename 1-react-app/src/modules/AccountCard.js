import React, { useState } from "react";

const AccountCard = ({ name, city, email }) => {
  return (
    <div>
      <p>Account Card</p>

      <div>
        <p>Name:</p>
        <p>{name}</p>
      </div>

      <div>
        <p>City:</p>
        <p>{city}</p>
      </div>
      <div>
        <p>Email:</p>
        <p>{email}</p>
      </div>
    </div>
  );
};
export default AccountCard;
