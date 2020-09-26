class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }
       searchClosest(node, targetNum){
        var data = [];
        var data_index = []

        function traverse(node){
            if(targetNum > node.value){
                data.push(node.value);
                if(node.right) traverse(node.right)
            }else {
                data.push(node.value);
                if(node.left) traverse(node.left)
            }
        traverse(this.root);
        var i;
        for (i=0;i<data.length;i++){
            if(targetNum >= data[i]){
                data_index[i] = targetNum - data[i]
            }else{
                data_index[i] = data[i] - targetNum;
            }
        }
        var index = data_index.indexOf(Math.min(...data_index));
        return data[index];
      }
    }
