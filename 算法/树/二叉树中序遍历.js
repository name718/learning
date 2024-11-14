/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = (root) => {
    const stack = []
    const ans = []
    while (stack.length > 0 || root) {
        while (root) {
            stack.push(root)
            root = root.left
        }
        root = stack.pop()
        ans.push(root.val)
        root = root.right
    }
    return ans
}
