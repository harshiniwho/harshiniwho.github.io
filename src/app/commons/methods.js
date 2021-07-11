function listify(list) {
    return list.map(el => {
        return (<li>{el}</li>);
    });
}

export {
    listify
};