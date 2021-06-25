//await digunakan untuk memberhentikan sementara eksekusi dari function sambil menunggu promisenya selesai
async function getUsers() {
    let url = 'https://jsonplaceholder.typicode.com/users';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderUsers() {
    let users = await getUsers();
    let html = '';
    users.forEach(user => {
        let y = `<div class="user">
                            <h2>${user.name}</h2>
                        </div>`;

        html += y;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

renderUsers();