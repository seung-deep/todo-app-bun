import {generateNewId} from './generateNewId'
import {assignNewIds} from './assignNewIds'

export const addNewItem = (list, newItem) => {
    assignNewIds(list)
    list.items.push({"id": generateNewId(list), "item": newItem})
    return true;
}