import { useContext, useEffect } from "preact/hooks";
import dbContext from "./db";

export function useTimetrack() {
  const db = useContext(dbContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.ttrack.info/api/timetrack/json"
        );
        const newData = await response.json();
        await db.registerFileText("rows.json", JSON.stringify(newData));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    const intervalCall = setInterval(fetchData, 7000);

    return () => clearInterval(intervalCall);
  }, []);

  return { db };
}
