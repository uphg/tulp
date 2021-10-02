export const find = (array: any, testFun: any) => {
  for(const item of array) {
    if(testFun(item)) {
      return item
    }
  }
}