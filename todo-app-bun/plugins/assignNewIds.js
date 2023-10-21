export const assignNewIds = (list) => {
    let count = 1;
    for(let x of list.items){
        x.id = count;
        ++count;
    }
};