const data = [
    {
        id: 1,
        parentId: 0,
        name: "root",
    },
    {
        id: 2,
        parentId: 1,
        name: "child1",
    },
    {
        id: 3,
        parentId: 1,
        name: "child2",
    },
    {
        id: 4,
        parentId: 2,
        name: "child1-1",
    },
    {
        id: 5,
        parentId: 0,
        name: "root2",
    },
];
const tree = [
    {
        id: 1,
        name: "root",
        children: [
            {
                id: 2,
                name: "child1",
                children: [
                    {
                        id: 4,
                        name: "child1-1",
                        children: [],
                    },
                ],
            },
            {
                id: 3,
                name: "child2",
                children: [],
            },
        ],
    },
    {
        id: 5,
        name: "root2",
        children: [],
    },
];

function flattenTree(treeDate) {
    const result = [];
    function helper(node, parentId = 0) {
        result.push({ id: node.id, parentId, name: node.name });
        if (node.children && node.children.length > 0) {
            node.children.forEach((child) => helper(child, node.id));
        }
    }
    tree.forEach(rootNode => helper(rootNode));
    return result;
}

console.log(flattenTree(tree));
