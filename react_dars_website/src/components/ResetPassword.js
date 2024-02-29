import { useState } from "react";

export const ResetPassword = ({ onReset }) => {
  const [newEmail, setNewEmail] = useState("");
  const handleReset = (email) => {
    onReset(email);
  };

  return (
    <div>
      <input
        placeholder="put email for reset..."
        onChange={(e) => setNewEmail(e.target.value)}
      ></input>
      <button onClick={() => handleReset(newEmail)}>
        Type your Email on the left then click here to receive password reset
        email
      </button>
    </div>
  );
};
