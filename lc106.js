function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var buildTree = function(inorder, postorder) {
    if (!inorder.length || !postorder.length) return null;

    let root = postorder[postorder.length - 1];
    let node = new TreeNode(root);

    let i = inorder.indexOf(node.val);

    let inorderL = inorder.slice(0, i);
    let inorderR = inorder.slice(i + 1);
    let postorderL = postorder.slice(0, i);
    let postorderR = postorder.slice(i);
    postorderR.pop();

    node.left = buildTree(inorderL, postorderL);
    node.right = buildTree(inorderR, postorderR);

    return node;
};

console.log(buildTree([4, 2, 5, 1, 6, 3, 7], [4, 5, 2, 6, 7, 3, 1]));