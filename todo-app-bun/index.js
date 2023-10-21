import {elys} from "./imports"
import {clearAllItems} from './plugins/clearAllItems'
import {removeItem} from './plugins/removeItem'
import {patchItem} from './plugins/patchItem'
import {addNewItem} from './plugins/addNewItem'
import {displayItems} from './plugins/displayItems'
import {list} from './plugins/state'

const PORT = 3333;

//Get all To-Do Lists 
elys.use(list, displayItems).get("/get-items", ({store, set}) => {
    set.status = 200;
    return displayItems(store);
})

//Post new Item
elys.use(list, addNewItem).post("/add-item", ({store, body, set}) => {
    set.status = addNewItem(store, body.item) ? 201 : 500;
    return displayItems(store);
})

//Patch existing Item
elys.use(list, patchItem).patch("/patch-item/:id", ({store, set, params, body}) => {  
    const isPatched = patchItem(store, params.id, body.item);                                                                                                                         
    set.status =  isPatched ? 201 : 500;
    return isPatched ? displayItems(store) : "Id not found or invalid.";  
})

//Remove an item
elys.use(list, removeItem).delete("/remove-item/:id", ({store, set, params}) => {
    const isRemoved = removeItem(store, params.id);
    isRemoved ? set.status = 201 : set.status = 500;
    return isRemoved ? displayItems(store) : "Id not found or invalid."; 
})

//Clear all items
elys.use(list, clearAllItems).delete("/clear-all", ({store, set}) => {
    const isCleared = clearAllItems(store);
    isCleared ? set.status = 201 : set.status = 500;
    return isCleared ? displayItems(store) : "Something went wrong!";
})
elys.listen(PORT);
