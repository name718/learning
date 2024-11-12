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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return [];  // 处理空树的情况
    const queue = [root];
    const result = [];
    while (queue.length) {
        const len = queue.length;
        const currentLevel = [];
        for (let i = 0; i < len; i++) {
            const rot = queue.shift();
            currentLevel.push(rot.val);
            if (rot.left) {
                queue.push(rot.left);
            }
            if (rot.right) {
                queue.push(rot.right);
            }
        }
        result.push(currentLevel);
    }
    return result
};
// [3,9,20,null,null,15,7]
const root = buildTreeFromArray([3, 9, 20, null, null, 15, 7])
console.log(levelOrder(root));
