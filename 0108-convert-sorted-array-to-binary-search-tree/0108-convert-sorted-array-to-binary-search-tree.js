/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    return balancedBST(nums, 0, nums.length - 1);
};

const balancedBST = (nums, left, right) => {
    if (left > right) {
        return null;
    }
    const mid = Math.ceil((left + right) / 2);
    let root = new TreeNode();

    root.val = nums[mid];
    root.left = balancedBST(nums, left, mid - 1);
    root.right = balancedBST(nums, mid + 1, right);

    return root;
}