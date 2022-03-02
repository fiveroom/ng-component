import { execNodeTask } from "./tool/execNodeTask";


export const buildLib = execNodeTask('@angular/cli', 'ng', ['build', 'components'])