const getLocaleStorage = () => {
    const list = localStorage.getItem('todosList');
    return list ? JSON.parse(localStorage.getItem('todosList')) : [];
};

const storeData = getLocaleStorage();


export default storeData;