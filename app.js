
const productList = document.getElementById('productList');
const loader = document.querySelector('#loader');
const error = document.querySelector('#error');
const postsBtn  = document.querySelector('#posts');
const usersBtn  = document.querySelector('#users');
const todosBtn  = document.querySelector('#todos');
const photosBtn  = document.querySelector('#photos');
const clearAllBtn = document.getElementById('clearAllBtn');


//clear info
function clearProductList() {
    productList.innerHTML = "";
}



//createPosts
function createPosts(data) {
    productList.innerHTML = "";
    const posts = Array.isArray(data) ? data : [data];
    posts.forEach(({ id, userId, title, body }) => {
        const li = document.createElement('li');
        li.classList.add('list-item');

        li.innerHTML = `
            <p><span>Id:</span>${id}</p>
            <p><span>UserId: </span>${userId}</p>
            <p><span>Title: </span>${title}</p>
            <p><span>Body: </span>${body}</p>
        `;

        productList.appendChild(li);
    });
}



//post btn 
postsBtn.addEventListener('click', () => {
    loader.classList.remove("hidden");
    clearProductList();

    fetch("https://jsonplaceholder.typicode.com/posts").then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }).then(data => {
        loader.classList.add('hidden');
        error.classList.add('hidden');
        createPosts(data.slice(0, 10));  
    }).catch(err => {
        console.error(err);
        loader.classList.add('hidden');
        error.classList.remove('hidden');
    });
});




//createUsers
function createUsers(data) {
    productList.innerHTML = "";
    const users = Array.isArray(data) ? data : [data]; 

    users.forEach(({ id, name, username, phone, website }) => {
        const li = document.createElement('li');
        li.classList.add('list-item');

        li.innerHTML = `
            <p><span>Id: </span>${id}</p>
            <p><span>Name: </span>${name}</p>
            <p><span>Username: </span>${username}</p>
            <p><span>Phone: </span>${phone}</p>
            <p><span>Website: </span>${website}</p>
        `;

        productList.appendChild(li);
    });
}

// users btn
usersBtn.addEventListener('click', () => {
    loader.classList.remove("hidden");
    clearProductList();

    fetch("https://jsonplaceholder.typicode.com/users").then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }).then(data => {
        loader.classList.add('hidden');
        error.classList.add('hidden');
        createUsers(data.slice(0, 10)); 
    }).catch(err => {
        console.error(err);
        loader.classList.add('hidden');
        error.classList.remove('hidden');
    });
});





//createTodosBtn
function createTodos(data) {
    productList.innerHTML = "";
    const users = Array.isArray(data) ? data : [data]; 

    users.forEach(({ id, userId, title, completed,}) => {
        const li = document.createElement('li');
        li.classList.add('list-item');

        li.innerHTML = `
            <p><span>Id: </span>${id}</p>
            <p><span>UserId: </span>${userId}</p>
            <p><span>Title: </span>${title}</p>
            <p><span>Completed: </span>${completed}</p>
        `;

        productList.appendChild(li);
    });
}

// todos btn
todosBtn.addEventListener('click', () => {
    loader.classList.remove("hidden");
    clearProductList();

    fetch("https://jsonplaceholder.typicode.com/todos").then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }).then(data => {
        loader.classList.add('hidden');
        error.classList.add('hidden');
        createTodos(data.slice(0, 10));
    }).catch(err => {
        console.error(err);
        loader.classList.add('hidden');
        error.classList.remove('hidden');
    });
});




//createPhotosBtn
function createPhotos(data) {
    productList.innerHTML = "";
    const users = Array.isArray(data) ? data : [data]; 

    users.forEach(({ id, albumId, title, thumbnailUrl,}) => {
        const li = document.createElement('li');
        li.classList.add('list-item');

        li.innerHTML = `
        <p> <span>Id: </span>${id}</p>
        <p><span>AlbumId: </span>${albumId}</p> 
        <img src=${thumbnailUrl}>
        <p><span>Title: </span>${title}</p>
        `;

        productList.appendChild(li);
    });
}

// photos btn
photosBtn.addEventListener('click', () => {
    loader.classList.remove("hidden");
    clearProductList();

    fetch("https://jsonplaceholder.typicode.com/photos").then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }).then(data => {
        loader.classList.add('hidden');
        error.classList.add('hidden');
        createPhotos(data.slice(0, 10));  
    }).catch(err => {
        console.error(err);
        loader.classList.add('hidden');
        error.classList.remove('hidden');
    });
});




// "Clear All"
clearAllBtn.addEventListener('click', () => {
    const confirmBtn = confirm("O'chirib yuborilsinmi?");
    if (confirmBtn) {
        clearProductList();
        loader.classList.add('hidden');
        error.classList.add('hidden');
    } else {
        alert("Malumotlar joyida!");
    }
});