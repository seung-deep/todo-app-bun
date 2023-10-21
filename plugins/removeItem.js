import {assignNewIds} from './assignNewIds'

export const removeItem = (list, id) => {
    for(let x of list.items){
        if(id == x.id){
            list.items.pop(x);
            assignNewIds(list);
            return true;
        }
    }
    return false;
} 