function createInstructor(firstName, lastName){
    return {
        firstName,
        lastName
    }
}

let favoriteNumber=42;
const instructor={
    firstName: 'Colt',
    [favoriteNumber]: 'That is my favorite!'
}

const methodInstructor={
    firstName: 'Colt',
    sayHi(){
        return 'Hi!';
    },
    sayBye(){
        return this.firstName + ' says bye!';
    }
}

const createAnimal = (species,verb,noise)=>{
    return{
        species,
        [verb](){
            return noise;
        }
    }
}