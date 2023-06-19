// header..call,style......................
const sectionHeader =document.getElementById('heading');
sectionHeader.style.color='white';
sectionHeader.style.textAlign='center';
sectionHeader.style.marginTop='10px';




// // comment/text writting area

// const textAreaPart =document.getElementById('comment-writting-area');
// textAreaPart.style.borderRadius='5px';



// calling button ,adding function in post button to ....................................................................
const postButton =document.getElementById('btn');
postButton.addEventListener('click', function(){
// new comment set ...
const commentBox =document.getElementById('comment-writting-area');
const newComment =commentBox.value;
// calling comment container...
const sectionContainer = document.getElementById('post-container');
// create new child p and add in container
const p = document.createElement('p');
p.innerText=newComment;
sectionContainer.appendChild(p);
commentBox.value='';
});

// <section id="post-container">
// <textarea id="comment-writting-area" cols="50" rows="10"></textarea>
/* <button id="btn" onclick="postButton">POST</button> */


