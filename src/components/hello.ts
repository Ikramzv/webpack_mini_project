const arr = [1,2,3,4,5,6,7,8,9,10]


const square = (arr: number[]) => {
    return arr.reduce<number[]>((initial , number) => {
        return [...initial , number * number]
    } , [])
} 


export default square(arr)