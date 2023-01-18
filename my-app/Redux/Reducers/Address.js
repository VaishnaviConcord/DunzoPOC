// initial state
const initialState = {
    PickUpAddress:"33A, K.k.nagar, citadel enclave society, pune",
    DeliveryAddress:"swiftwin "
};

// reducer
export const addressReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PickUpAdd':
            return {
                PickUpAddress: action.payload
            };
        case 'SET_DeliveryAdd':
                return {
                DeliveryAddress: action.payload
            };    
        default:
            return state;
    }
}