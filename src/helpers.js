const choice = (items) => {
    const itemNum = Math.floor(Math.random() * items.length);
    return items[itemNum];
}

const remove = (items, item) => {
    for (let i = 0; i < items.length; i++) {
        if (items[i] === item) {
            items.splice(items.indexOf(item), 1);
        }
        else {continue}
        return item;
    }
}
export { choice, remove };