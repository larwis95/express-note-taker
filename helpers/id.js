const uniqueID = () => {
    const id = Date.now() + Math.random();
    return id;
};

module.exports = uniqueID;