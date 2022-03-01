import { join } from 'path'
import { cwd } from "process";


export default {
    publishDir: join(cwd(), 'publish'),
    components: join(cwd(), 'components')
}