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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    if (!root) {
        return false;
    }

    let stack = [{ node: root, pathSum: root.val }];

    while (stack.length) {
        let { node, pathSum } = stack.pop();
        if (node.left === null && node.right === null && pathSum === targetSum) {
            return true;
        }

        if (node.left) {
            stack.push({ node: node.left, pathSum: pathSum + node.left.val });
        }
        if (node.right) {
            stack.push({ node: node.right, pathSum: pathSum + node.right.val });
        }
    }
    return false;
};