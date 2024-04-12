// let may_name = "Azaan"
// let std1 = "ali"
// let std2 = "umer"
// let std3 = "amir"
// let std1FatherName="imran"
// let std2FatherName="raza"
// let std3FatherName="zulfiqar"
// let std1age = 20
// let std2age = 23
// let std3age = 19
// 
// 
// 
// let students = ["ali","umer","amir",]
// let studentsFatherName = ["imran","raza","zulfiqar"]
// let studentsAge = [20,23,19]
// 
// console.log(students)
// console.log(studentsFatherName)
// console.log(studentsAge)
// 



// let student_data = {
    // name:"Azaan",
    // age:15,
    // roolNo:1548,
    // address:"karachi"
// }
// 
// 
// let property:any = "age"
// console.log(student_data.name)
// console.log(student_data['address'])


  


import inquirer from "inquirer"


const currency:any = {
    USD: 1, // Base currency
    EUR: 0.92,
    GBP: 0.79,
    INR: 83.30,
    PKR: 277.54,
    TAKA: 109.60,
    LIRA: 32.03,
    DIRHAM: 3.67,
    RIYAL: 3.75,
    AFGHANI: 71.23,
    AUD: 1.52,
    NTD: 1.66,
    RUBLE: 92.58,
    YUAN: 7.23,
    PESO: 860.56,
    QRS: 3.64,
    RAND: 18.73,
    LKR: 298.61
};

let user_answers = await inquirer.prompt(
 [
    {
    name:'from',
    message:'Enter which currency do you want to choose a base currency:',
    type:"list",
    choices:['USD','EUR','GBP','INR',"PKR"]
      },
    {
    name:'amount',
    message:'Enter Base Currency Amount:',
    type:'number'    
    },
    {
    name:'to',
    message:'Enter which currency do you want to convert:',
    type:"list",
    choices:['EUR','GBP','INR','PKR']
    },
  ]
);
   

let fromAmount = currency[user_answers.from]
let toAmount = currency[user_answers.to]
let amount = user_answers.amount
let baseAmount = amount / fromAmount // USD base currency // 4
let convertedAmount = baseAmount * toAmount
// console.log(fromAmount);
// console.log(toAmount);
// console.log(amount);
console.log(convertedAmount);