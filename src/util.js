const topics = {
    it: 'Information Technology',
    languages: 'Languages',
    hardware: 'Hardware',
    software: 'Tools and Software',
    framework: 'Framework'
};

function getUserData() {
    const user = sessionStorage.getItem('user');
    if(user) {
        return JSON.parse(user);
    }else {
        return undefined;
    }
}

function setUserData(user) {
    sessionStorage.setItem('user', JSON.stringify(user));
}

function clearUserData() {
    sessionStorage.removeItem('user');
}

export {
    topics,
    getUserData,
    setUserData,
    clearUserData
}
