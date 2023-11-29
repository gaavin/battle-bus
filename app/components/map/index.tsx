import { useTimetrack } from "./timetrack";

export function Map() {
  const { db } = useTimetrack();

  return (
    <div>
      <pre>{JSON.stringify(timetrack, null, 2)}</pre>
    </div>
  );
}
