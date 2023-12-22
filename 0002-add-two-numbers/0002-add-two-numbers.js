/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {

    if (l1.val == 0 && l1.next == null && l2.val == 0 && l2.next == null) {
        let dummy = new ListNode(0);
        return dummy;
    }

    let sumListNode = new ListNode();
    let current = sumListNode;

    let carry = 0;
    let x;
    let sum;

    while (l1 || l2 || carry) {
        sum = 0;
        x = (l1?.val || 0) + (l2?.val || 0) + carry;

        if (x > 9) {
            carry = 1;
            sum = x % 10;

        } else {
            carry = 0;
            sum = x;
        }

        current.next = new ListNode(sum);
        current = current.next;

        l1 = l1?.next;
        l2 = l2?.next;
    }



    return sumListNode.next;
};
