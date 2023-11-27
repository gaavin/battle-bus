import { render } from "preact";
import { Map } from "./components/map";

export default function Component() {
  return (
    <div>
      <div>
        <p>root</p>
      </div>
      <div>
        <Map />
      </div>
    </div>
  );
}

render(<Component />, document.getElementById("app")!);
