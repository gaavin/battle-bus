import { render } from "preact/compat";
import { Map } from "./components/map";

export default function Component() {
  return (
    <div>
      <Map />
    </div>
  );
}

render(<Component />, document.getElementById("app")!);
