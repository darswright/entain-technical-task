// https://usehooks.com/useAsync/

import { useState, useCallback, useEffect } from "react";

const useAsync = (asyncFunction) => {
  const [status, setStatus] = useState("idle");
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);
  // The execute function wraps asyncFunction and
  // handles setting state for pending, value, and error.
  // useCallback ensures the below useEffect is not called
  // on every render, but only if asyncFunction changes.
  const execute = useCallback(() => {
    setStatus("pending");
    setValue(null);
    setError(null);
    return asyncFunction()
      .then((response) => {
        setValue(response);
        setStatus("success");
      })
      .catch((fetchError) => {
        setError(fetchError);
        setStatus("error");
      });
  }, [asyncFunction]);

  useEffect(() => {
    execute();

    const timer = setInterval(() => {
      execute();
    }, 1000 * 60);

    return () => clearInterval(timer);
  }, [execute]);

  return { execute, status, value, error };
};

export default useAsync;
