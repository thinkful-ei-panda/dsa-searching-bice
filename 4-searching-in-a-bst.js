class BinarySearchTree {
    constructor(key = null, value = null, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }
	insert(key, value) {
		/*
		How does insertion perform? Essentially with insertion, 
		you have to iterate to the height of the tree. In the average case, 
		nodes are inserted equally on the left and right branches. 
		This produces what is known as a balanced tree. Because each row 
		in a balanced tree contains 2 times as many nodes as the row before, 
		the width grows exponentially with the number of nodes. This means 
		that conversely, the height must grow logarithmically with the number 
		of nodes. So the average case is O(log(n)).

		The worst case in a binary search tree occurs when the tree takes its 
		worst possible shape: the tree skews either left or right. A picture of 
		what a skewed tree looks like is shown below. If you look at it closely, 
		you'll notice that a skewed binary search tree is basically a linked list. 
		Therefore, you will need to iterate through each of those nodes in order 
		to get to the bottom of the tree to insert something. This makes the time 
		complexity O(n).
		*/
        
		// If the tree is empty then this key being inserted is the root node of the tree
        if (this.key == null) {
            this.key = key;
            this.value = value;
        }
        /* If the tree already exists, then start at the root, 
           and compare it to the key you want to insert.
           If the new key is less than the node's key 
           then the new node needs to live in the left-hand branch */
        else if (key < this.key) {
            /* If the existing node does not have a left child, 
               meaning that if the `left` pointer is empty, 
               then we can just instantiate and insert the new node 
               as the left child of that node, passing `this` as the parent */
            if (this.left == null) {
                this.left = new BinarySearchTree(key, value, this);
            }
            /* If the node has an existing left child, 
               then we recursively call the `insert` method 
               so the node is added further down the tree */
            else {
                this.left.insert(key, value);
            }
        }
        /* Similarly, if the new key is greater than the node's key 
           then you do the same thing, but on the right-hand side */
        else {
            if (this.right == null) {
                this.right = new BinarySearchTree(key, value, this);
            }
            else {
                this.right.insert(key, value);
            }
        }
    }
    dfsPre(values=[]) {
        values.push(this.key);
		if (this.left) {
            values = this.left.dfsPre(values);
        }
        if (this.right) {
            values = this.right.dfsPre(values);
        }
        return values;
    }
	dfsIn(values=[]) {
        if (this.left) {
		    values = this.left.dfsIn(values);
        }
		values.push(this.key);
        if (this.right) {
            values = this.right.dfsIn(values);
        }
        return values;
    }
	dfsPost(values=[]) {
        if (this.left) {
            values = this.left.dfsPost(values);
        }
        if (this.right) {
            values = this.right.dfsPost(values);
        }
        values.push(this.key);
        return values;
    }
}

// Create the BST.
let BST=new BinarySearchTree;

function q1(){
	[35,25,15,14,19,27,89,79,91,90].forEach(item=>BST.insert(item));
	// In-order // 14 15 19 25 27 35 79 89 90 91
	console.log(BST.dfsIn());
	// Pre-order // 35 25 15 14 19 27 89 79 91 90
	console.log(BST.dfsPre());
	// Post-order // 14 19 15 27 25 79 90 91 89 35
	console.log(BST.dfsPost());
}
// q1();

function q2(){
	[8,6,5,7,10,9,11].forEach(item=>BST.insert(item));
	// In-order // 5 6 7 8 9 10 11
	console.log(BST.dfsIn());
	// Pre-order // 8 6 5 7 10 9 11
	console.log(BST.dfsPre());
	// Post-order // 5 7 6 9 11 10 8
	console.log(BST.dfsPost());
}
// q2();