import { useEffect, useState } from "preact/hooks";

export function Map() {
  const [data, setData] = useState<Record<string, string>>();

  useEffect(() => {
    const intervalCall = setInterval(async () => {
      try {
        const response = await fetch(
          "https://www.ttrack.info/api/timetrack/json"
        );
        const newData = await response.json();
        if (data !== newData) {
          setData(newData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }, 30000);

    return () => clearInterval(intervalCall);
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
