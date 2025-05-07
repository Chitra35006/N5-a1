function formatString(input: string, toUpper?: boolean):string{
    if(toUpper === false || toUpper === null){
        return input.toLowerCase()
    }
    else{
        return input.toUpperCase()
    }

}

console.log(formatString("Hello")     )
console.log(formatString("Hello", true))
console.log(formatString("Hello", false))

type itemList={
    title: string; 
    rating: number
}
function filterByRating(items: itemList[]): itemList[]{
    const result: itemList[] =[];

    for(const item of items){
        if(item.rating > 4){
            result.push(item);
        }
    }
    return result;
}

const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
  ];
  
  console.log(filterByRating(books));
  

  function concatenateArrays<T>(...arrays: T[][]): T[]{
    const result : T[] = [];
    for(const a1 of arrays ){
        result.push(...a1);
    }
    return result;
}

console.log(concatenateArrays(["a", "b"], ["c"]));     
console.log(concatenateArrays([1, 2], [3, 4], [5])); 


class Vehicle{
    constructor (private make: string, private year: number ){
        
    }
    getInfo(){
        console.log(`"Make: ${this.make}, Year: ${this.year}"`);
    }
}

class Car extends Vehicle{
    private model : string;
    constructor( make: string, year: number, model: string){
        super(make,year)
        this.model=model;
    }
    getModel(){
        console.log(`"Model: ${this.model}"`);
    }
}

const myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo();   
myCar.getModel();

function processValue(value: string | number): number {
    if(typeof(value)=== "number"){
        return value*2;
    }
    else{
        return value.length;
    }
}

console.log(processValue("hello")); 
console.log(processValue(10)); 