var preorderTraversal = function (root) {
    const stack = []
    const ans = []
    while (stack.length > 0 || root) {
        while (root) {
            ans.push(root.val)
            stack.push(root)
            root = root.left
        }
        root = stack.pop()
        root = root.right
    }
    return ans
}
