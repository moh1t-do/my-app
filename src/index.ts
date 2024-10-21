interface User {
    id: number;
    name: string;
    age: Number;
    email: string;
    password: string;
}

// pick
type UpdateProps = Pick<User, 'name' | 'age' | 'email'>

// partial
type UpdatePropsOptional = Partial<UpdateProps>

// readonly 
const aman: Readonly<User> = {
    id: 12,
    name: 'Aman',
    age: 13,
    email: 'abac@gmail.com',
    password: 'lkjll'
}

function updateUser(updateProps: UpdateProps) {
    console.log(`Name: ${updateProps.name}`);
}