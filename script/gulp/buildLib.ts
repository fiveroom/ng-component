import { execNodeTask } from "./tool/execNodeTask";


export const buildProject = execNodeTask('@angular/cli', 'ng', ['build', 'components'])