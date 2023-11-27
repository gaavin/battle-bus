import { useEffect, useState } from "preact/hooks";

export function Map() {
  const [data, setData] = useState<JSON>();

  useEffect(() => {
    const intervalCall = setInterval(async () => {
      const newData = await fetch(
        "https://www.ttrack.info/api/timetrack/json"
      ).then(async (response) => await response.json());

      if (newData !== data) {
        setData(newData);
      }
    }, 30000);
    return () => {
      clearInterval(intervalCall);
    };
  }, []);

  return <>{data}</>;
}
