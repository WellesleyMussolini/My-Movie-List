export function containsInObject(obj, list){
    return list.some(element => element.title === obj.title);
};