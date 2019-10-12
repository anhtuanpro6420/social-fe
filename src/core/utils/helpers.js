export const updateHelper = (state, action) => {
	const index = state.data.findIndex(item => item._id === action.payload._id);
	const currentData = [...state.data];
	currentData[index] = { ...currentData[index], ...action.payload };
	return currentData;
};

export const deleteHelper = (state, action) => {
	return state.data.filter(item => item._id !== action.payload);
};
