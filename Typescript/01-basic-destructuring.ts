// Description: Destructuring in Typescript
 // Destructuring object
interface Random {
    id: number;
    name: string;
    isActive: boolean;
    createdAt: Date;
    tags: string[];
}

const randomObject: Random = {
    id: 1,
    name: "Sample",
    isActive: true,
    createdAt: new Date(),
    tags: ["tag1", "tag2"]
};

const tags = ["ex1", "ex2", "ex3"];

const { tags: randomTags } = randomObject; // Destructuring tags from randomObject


  // Destructuring array
const [first, second, third] = tags; // Destructuring array
console.log(first, second, third);

const [, , thirdTag] = tags;

  // Destructuring function arguments
const printRandom = ({ id, name }: Random) => {
    console.log(id, name); // Destructuring object in function arguments
};
