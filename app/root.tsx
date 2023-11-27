import { render } from "preact";
import { Map } from "./components/map";

export default function Component() {
  return <Map />;
}

render(<Component />, document.getElementById("app")!);
