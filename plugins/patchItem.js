export const patchItem = (list, id, content) => {
    for(let x of list.items){
        if(id == x.id){
            x.item = content
            return true
        }
    }
    return false
}