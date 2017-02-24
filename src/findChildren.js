function findChildren(id, tree){
    if(tree.hasOwnProperty('id') && tree["id"] == id)
        return tree.children;
    

    let length = Object.keys(tree).length;
    for(let i = 0; i < length; i++){
        if(typeof tree[Object.keys(tree)[i]] == "object"){
            let target = findChildren(id, tree[Object.keys(tree)[i]]);
            if(target != null)
                return target;
        }
    }

    return null;
}

module.exports = findChildren
