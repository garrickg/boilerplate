// get items
export function getItems (items) {
  return {
    type: 'GET_ITEMS',
    items
  }
}

// add Item
export function addItem (index) {
  return {
    type: 'ADD_ITEM',
    index
  }
}

// change Item
export function updateItem (itemID, string) {
  return {
    type: 'UPDATE_ITEM',
    itemID,
    string
  }
}

// remove Item
export function removeItem (itemID, index) {
  return {
    type: 'REMOVE_ITEM',
    itemID,
    index
  }
}

// login user
export function login (user) {
  return {
    type: 'LOGIN',
    user
  }
}

// logout user
export function logout () {
  return {
    type: 'LOGOUT'
  }
}
