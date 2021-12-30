import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useState, useEffect } from "react";

const useCollection = (db, col, orderField = "", order = "desc") => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const data = await getDocs(
          query(collection(db, col), orderBy(orderField, order))
        );
        setData(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        setError("");
      } catch (e) {
        setError("Failed to fetch " + col);
        console.log(error, e.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [collection]);
  return { data, isLoading, error };
};

export default useCollection;
