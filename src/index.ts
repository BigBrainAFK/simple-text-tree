type treeNode = {
	text: string,
	children?: treeNode[]
}

const CONST_NODE = "│  ";
const CONST_END_NODE = "└─ ";
const CONST_LEAF_NODE = "├─ ";
const CONST_EMPTY_SPACE = "   ";

function treeView(tree: treeNode[], indent: string = '', showLines: boolean = true): string {
	let result = '';
	let isLast = false; // used in the loop to determine if final loop run is happening

	for (let i = 0; i <= tree.length - 1; i++) {
		if (i === tree.length - 1) isLast = true;

		result += indent + !showLines ? CONST_EMPTY_SPACE : isLast ? CONST_END_NODE : CONST_LEAF_NODE + tree[i]!.text;

		if (tree[i]!.children) {
			result += treeView(tree[i]!.children!, `${indent}${isLast || !showLines ? CONST_EMPTY_SPACE : CONST_NODE}`, showLines);
		}
	}

	return result;
}

export {
	treeNode,
	treeView
};