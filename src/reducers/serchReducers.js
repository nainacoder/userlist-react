const initialData = {
    list : []
}

const searchReducers = (state=initialData, action) => {
    switch(action.type) {
        case "SEARCH_USERS":
            const { id, data } = action.payload;

            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id:id,
                        data:data
                    }
                ]
            }
            }
        }
          

export default searchReducers