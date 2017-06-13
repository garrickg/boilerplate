function items (state = [], action) {
  switch (action.type) {
    case 'GET_ITEMS':
      console.log(`Getting Items`)
      return [...action.items]
    case 'ADD_ITEM':
      console.log(`Adding Item ${action.index}`)
      return state
    case 'UPDATE_ITEM':
      console.log(`Updating Item ${action.itemID}`)
      return state
    case 'REMOVE_ITEM':
      console.log(`Removing Item ${action.itemID}`)
      return state
    default:
      return state
  }
}

export default items
