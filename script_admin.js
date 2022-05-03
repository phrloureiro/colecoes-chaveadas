function getAdmins(map) {
    let admins = [];
    for([key, value] of map) {
        if(value == 'Admin') {
            admins.push(key)
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Pedro', 'Admin');
usuarios.set('Thayná', 'Admin');
usuarios.set('Luisa', 'User');
usuarios.set('Jorge', 'User');
usuarios.set('Maria', 'User');

console.log(getAdmins(usuarios));