const findMaxNumber = (numbers1) =>{
    if(numbers1.length===0){
        return null
    }else{
        let max = 0
        for(let i=0; i<numbers1.length; i++){
            if(numbers1[i]>max){
                max = numbers1[i]
            }
        }
       return max
        
    }
}

const numbers1 = [5, 15, 7];
console.log(findMaxNumber(numbers1))
const numbers2 = []
console.log(findMaxNumber(numbers2))
