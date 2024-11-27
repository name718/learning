const flattenTree = [
    {
        "id": 1,
        "parentId": 0,
        "name": "root"
    },
    {
        "id": 2,
        "parentId": 1,
        "name": "child1"
    },
    {
        "id": 3,
        "parentId": 1,
        "name": "child2"
    },
    {
        "id": 4,
        "parentId": 2,
        "name": "child1-1"
    },
    {
        "id": 5,
        "parentId": 0,
        "name": "root2"
    }
]
const result = [
    {
        "id": 1,
        "name": "root",
        "children": [
            {
                "id": 2,
                "name": "child1",
                "children": [
                    {
                        "id": 4,
                        "name": "child1-1",
                        "children": []
                    }
                ]
            },
            {
                "id": 3,
                "name": "child2",
                "children": []
            }
        ]
    },
    {
        "id": 5,
        "name": "root2",
        "children": []
    }
]

function buildTree(data){
	const idMap = new Map()
	const result = []

	data.forEach(item => {
		idMap.set(item.id, {...item, children:[]})
	})
	console.log(idMap)

	data.forEach(item => {
		if (item.parentId === 0) {
			result.push(idMap.get(item.id))
		}else {
			const parent = idMap.get(item.parentId)
			if (parent) {
				parent.children.push(idMap.get(item.id))
			}
		}
	})
	return result
}

console.log(JSON.stringify(buildTree(flattenTree), null, 2));



