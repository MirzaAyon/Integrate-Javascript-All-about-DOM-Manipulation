console.log("I am from summary")

const blogs = document.getElementsByTagName('p');
// console.log(blogs);

// chaile loop through kora jabe

for (const blog of blogs) {
    // console.log(blog);
    blog.style.backgroundColor = 'steelblue';
    blog.style.color = 'white';
}

const harum = document.getElementById('special-blog');
harum.innerText = 'New Harum'; //etao use krbo
harum.innerHTML = `
<h4> Special Inner HTML </h4>
<div>
<ul>
<li> Lets play</li>
<li> Lets play</li>
</ul>
`

const friends = document.getElementById('friends');
// console.log(friends);
// console.log(friends.childNodes);
// console.log(friends.children);

const fifth = friends.children[4];
console.log(fifth);
friends.removeChild(fifth);

//create element

const friend = document.createElement('li');
friend.innerText = 'Friend - 11';
friends.appendChild(friend);