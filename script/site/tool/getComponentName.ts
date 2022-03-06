export function getComponentName(str: string) {
    return  str.split('-').map(item => item[0].toUpperCase() + item.slice(1)).join('')
}