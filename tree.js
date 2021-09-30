class Node{
    constructor(data){
        this.data =data;
        this.left_node = null;
        this.right_node = null;
    }
}


class binarySearchTree{
    constructor(){
        this.root = null;
    }
    insert(data){
        var newNode = new Node(data);
        if(this.root === null){
           this.root = newNode;
        }else{
           this.insertNode(this.root, newNode);
        }
     }


     insertNode(node, newNode){
        if(newNode.data < node.data){
           if(node.left_node === null){
              node.left_node = newNode;
           }else{
              this.insertNode(node.left_node, newNode);
           };
        } else {
           if(node.right_node === null){
              node.right_node = newNode;
           }
           else{

              this.insertNode(node.right_node,newNode);
           }
        }
     }     

     showNodes(node){
         this.displayNodes(this.root);
     }

    displayNodes(node){
        if(node===null){
            return;
        }
        else{
            console.log(node.data);
            this.displayNodes(node.left_node);
            this.displayNodes(node.right_node);
            
            
            
        }
        
    }

}


let bst = new binarySearchTree();
bst.insert(5);
bst.insert(10);
bst.insert(3);
bst.insert(7);
bst.insert(12);
bst.insert(9);


bst.showNodes();