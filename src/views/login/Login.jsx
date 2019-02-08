import React, {useState, useEffect} from "react";
import {TextInput} from "../common/components"

const User = () => {
  return (
    <div className="user">
      <TextInput type="text" placeholder="@toneloke" disabled/>
      <TextInput type="text" placeholder="square display" disabled/>
    </div>
  );
};

export default User;
