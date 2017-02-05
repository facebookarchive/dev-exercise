module.exports = function findChildren(id, tree) {
    const child = tree.children.find(d => d.id === id);
    if (!child) {
        return null;
    } else {
        return child.children;
    }
}   
