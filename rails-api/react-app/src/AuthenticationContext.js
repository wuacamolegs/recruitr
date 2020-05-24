import React, { useState } from "react";

const AuthenticationContext = React.createContext();

export function Provider({ children }) {
  const [authenticated, setAuthenticated] = useState(null);

  return (
    <AuthenticationContext.Provider value={authenticated}>
      {children}
    </AuthenticationContext.Provider>
  );
}

export default AuthenticationContext;
