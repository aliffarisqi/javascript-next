class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
function isBST(root, min = -Infinity, max = Infinity) {
  if (root === null) {
    return true; // Pohon kosong adalah BST
  }

  // Mengecek apakah nilai simpul berada dalam rentang yang benar
  if (root.value <= min || root.value >= max) {
    return false;
  }

  // Pengecekan rekursif pada subpohon kiri dan kanan
  return (
    isBST(root.left, min, root.value) && isBST(root.right, root.value, max)
  );
}

// Contoh pohon biner yang bukan BST
const root = new TreeNode(12);
root.left = new TreeNode(10);
root.right = new TreeNode(15);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(11);
root.right.right = new TreeNode(20);

const result = isBST(root);
console.log(`Is the tree a BST? ${result}`);
