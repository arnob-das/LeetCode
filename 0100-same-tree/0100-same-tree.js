/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 * }
 */

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    if (!p && !q) {
        return true;
    }

    if (!p || !q || p.val !== q.val) {
        return false;
    }

    let stackP = [p];
    let stackQ = [q];

    while (stackP.length && stackQ.length) {
        const nodeP = stackP.pop();
        const nodeQ = stackQ.pop();

        if (!nodeP && !nodeQ) {
            continue;
        }

        if (!nodeP || !nodeQ || nodeP.val !== nodeQ.val) {
            return false;
        }

        stackP.push(nodeP.left);
        stackP.push(nodeP.right);
        stackQ.push(nodeQ.left);
        stackQ.push(nodeQ.right);
    }

    return true;
};
