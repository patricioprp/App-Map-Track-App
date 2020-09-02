import createDataContext from './createDataContext';

const locationContext = (state,action) => {
    switch(action.type){
        default:
        return state;
    }
};

const startRecording = dispath = () => {

};

const stoptRecording = dispath = () => {
    
};

const addLocation = dispath = () => {
    
};

export const { Context, Provider } = createDataContext(
    locationContext,
    
    {
    startRecording,
    stoptRecording,
    addLocation
},{
    recording:false,
    location:[],
    currentLocation: null
});