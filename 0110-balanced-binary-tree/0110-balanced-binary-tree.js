/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    return dfs(root)[0];
}

const dfs = (root) => {
    if (!root) {
        return [true, 0];
    }

    let leftSubTree = dfs(root.left);
    let rightSubTree = dfs(root.right)

    let isBalancedTree = leftSubTree[0] && rightSubTree[0] && Math.abs(leftSubTree[1] - rightSubTree[1]) <= 1;

    return [isBalancedTree, 1 + Math.max(leftSubTree[1], rightSubTree[1])]
}