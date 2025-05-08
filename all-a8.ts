function formatString(input: string, toUpper?: boolean):string{
    if(toUpper === false){
        return input.toLowerCase()
    }
    else{
        return input.toUpperCase()
    }

}


function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
    const result: { title: string; rating: number }[] =[];

    for(const item of items){
        if(item.rating > 4){
            result.push(item);
        }
    }
    return result;
}

  

function concatenateArrays<T>(...arrays: T[][]): T[]{
    const result : T[] = [];
    for(const item of arrays ){
        result.push(...item);
    }
    return result;
}



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



interface Product {
    name: string;
    price: number;
  }
  
  function getMostExpensiveProduct(products: Product[]): Product | null{
     let maxPrice = products[0];

     for(const product of products){
        if(product.price > maxPrice.price){
            maxPrice = product;
        }
     }
     return maxPrice;
  }



  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string{
    if(day === Day.Sunday || day === Day.Saturday){
        return '"Weekend"'
    }
    else{
        return '"Weekday"'
    }
    
  }
 
  async function squareAsync(n: number): Promise<number>{
    return new Promise<number>((resolve, reject)=>{
    
            if(n < 0){
                reject(new Error("Negative number not allowed"))
            }
            else{
                setTimeout(()=>{
                    const data : number = n*n;
                    resolve(data);
                },1000)
            }
    
    })
}
 