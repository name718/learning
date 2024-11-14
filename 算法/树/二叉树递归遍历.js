/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
import {buildTreeFromArray} from "./构造二叉树.js";

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let ans = []
    const handler = tree => {
        if (!tree) return
        handler(tree.left)
        ans.push(tree.val)
        handler(tree.right)
    }
    handler(root)
    return ans
};
var postorderTraversal = function(root) {
    let ans = []
    const handler = tree => {
        if (!tree) return
        handler(tree.left)
        handler(tree.right)
        ans.push(tree.val)
    }
    handler(root)
    return ans
};
var preorderTraversal = function(root) {
    let ans = []
    const handler = tree => {
        if (!tree) return
        ans.push(tree.val)
        handler(tree.left)
        handler(tree.right)
    }
    handler(root)
    return ans
};

const root = buildTreeFromArray([3, 9, 20, null, null, 15, 7])
