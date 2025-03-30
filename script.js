const childNode=document.querySelector(".logos-slide").cloneNode(true);
const parentsNodes=document.querySelectorAll(".logos");

for (let i = 0; i < parentsNodes.length; i++) {
    parentsNodes[i].appendChild(childNode.cloneNode(true));
}

// const childNature=document.querySelector(".nature-slide").cloneNode(true);
// document.querySelector(".nature").appendChild(childNature);