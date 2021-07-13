import React, { useEffect, useContext, useState } from "react";
import { AccountContext } from "./Account";
import ChangePassword from "./ChangePassword";

export default () => {
  const { getSession } = useContext(AccountContext);

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    getSession().then((session) => {
      console.log("Session: ", session);
      setLoggedIn(true);
    });
  }, [getSession]);

  return (
    <div className="settings">
      {loggedIn && (
        <>
          <h2>Settings</h2>
          <ChangePassword />
        </>
      )}
      {!loggedIn && (
        <>
          <h2>Settings</h2>
        </>
      )}
    </div>
  );
};
