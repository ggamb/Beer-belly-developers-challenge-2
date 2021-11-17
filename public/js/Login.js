async function loginForm(event) {
  event.preventDefault();

  // const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#login').value.trim();
  // or email && password
  if (password) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        // email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
}

async function signupForm(event) {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && password) {
    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        username,
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('#login-btn').addEventListener('submit', loginForm);
document.querySelector('#logout-btn').addEventListener('submit', signupForm);