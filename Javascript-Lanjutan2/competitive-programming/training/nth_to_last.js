class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function nthToLast(head, n) {
  // Inisialisasi dua pointer yang awalnya berada di awal linked list
  let follower = head;
  let current = head;

  // Pindahkan current node ke n langkah ke depan
  for (let i = 0; i < n; i++) {
    if (current == null) return null;
    current = current.next;
  }
  // Pindahkan follower dan current bersamaan hingga current mencapai akhir linked list
  while (current.next !== null) {
    current = current.next;
    follower = follower.next;
  }
  // Pointer1 sekarang berada di elemen ke-n dari akhir linked list
  return follower;
}

// Contoh linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

const n = 2;
const result = nthToLast(head, n);
console.log(`Elemen ke-${n} dari akhir: ${result.data}`);
