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

// record
type UserRecord = Record<string, User>

const users: UserRecord = {
    "raq1": {
        name: 'Raq',
        age: 13,
        email: 'kljk',
        id: 12,
        password: 'kljkl'
    }
}

// map
const usersMap = new Map<string, User>()
usersMap.set('raq1', {
    name: 'Raq',
    age: 13,
    email: 'kljk',
    id: 12,
    password: 'kljkl'
})

console.log(usersMap.get('raq1'));

type EventType = 'click' | 'mouseover' | 'mouseout';
type ExcludeEvent = Exclude<EventType, 'click'>;

const handleEvent = (event: ExcludeEvent) => {
    console.log(event);
}

handleEvent('click');

function updateUser(updateProps: UpdateProps) {
    console.log(`Name: ${updateProps.name}`);
}