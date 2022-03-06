import * as remark from 'remark';

export function parseMd(str) {
    let remarkInstance = remark();
    let astMd = remarkInstance.parse(str) as any;
    let head = '', api = '', deep = 0;
    astMd.children.forEach((node) => {
        let {type, depth} =  node;
        if(type === 'heading' && depth === 2){
            deep++;
        }
        if(deep <= 1){
            head += '\n' + remarkInstance.stringify(node)
        } else {
            api += '\n' + remarkInstance.stringify(node)
        }
    })
    return {head, api}
}