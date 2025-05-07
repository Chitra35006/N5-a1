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