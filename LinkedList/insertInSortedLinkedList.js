class LinkedList{
    constructor(val){
        this.val = val;
        this.next=null;
    }
}
function insertInMiddle(head,k){
    let newHead=new LinkedList(head)
    if(!head)return newHead
    let len=0;temp=head
    while(temp){
        len++
        temp=temp.next
    }
    let mid=math.floor(len/2)
    temp=head
    for(let i=1;i<mid;i++){
        temp=temp.next
    }
    newHead.next=temp.next
    temp.next=newHead
    return head

}


