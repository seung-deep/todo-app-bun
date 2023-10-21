export const displayItems = (list) => {
    if(list.items.length == 0) 
        return "Empty List! Add more items.";
    let listBeautify = "Items: \n";
    for(let x of list.items){
        listBeautify += `${x.id}. ${x.item}\n`;
    }
    return listBeautify;
} 