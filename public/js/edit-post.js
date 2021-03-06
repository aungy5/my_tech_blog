async function handleNewPost(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value.trim();
    const post_content = document.querySelector('input[name="post-content"').value.trim();
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    console.log(title);
    console.log(post_content);

    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT', 
        body: JSON.stringify({
            title,
            post_content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace(`/dashboard`);
    } else {
        console.log(response.statusText);
    }
}

document.querySelector('.edit-post').addEventListener('submit', handleNewPost);