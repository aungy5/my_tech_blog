async function signupForm(event) {
    event.preventDefault();

    const name = document.querySelector('#signupInputUsername').value.trim();
    const email = document.querySelector('#signupInputEmail').value.trim();
    const password = document.querySelector('#signupInputPassword').value.trim();

    if (name && email && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                name, 
                email, 
                password
            }),
            headers: { 'Content-Type': 'application.json' }
        });

        if (response.ok) {
            console.log("Successfully created new user!");
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
            console.log("ERROR CREATING USER")
        }
    }
}

document.querySelector('.signup').addEventListener('click', signupForm);