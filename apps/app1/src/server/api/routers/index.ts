import {exampleRouter} from "./example";
import subRouters from "./sub";

const rootRouters = {
  example: exampleRouter,
  sub: subRouters
}

export default rootRouters
