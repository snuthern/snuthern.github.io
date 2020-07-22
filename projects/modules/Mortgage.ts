//  "With each monthly mortgage payment, 
//  the principal will be reduced, 
//  but interest will be added."
//
// M = P [ i(1 + i)^n ] / [ (1 + i)^n-1]
// P = Principle_Mortgage_Amount
// i = monthly interest rate 
// n = number of months required to repay the loan
//
//
// Annual_Interest_Rate of 3%
const Annual_Interest_Rate: number = 3/100

// Monthly_Interest_Rate ( Percent / 12 ) 
const Monthly_Interest_Rate: number = Annual_Interest_Rate / 12

// Principle_Mortgage_Amount ( Full Amount Of Loan )
const Principle_Mortgage_Amount: number = 120000

// Loan_Term ( in years )
const Loan_Term: number = 30

const Number_Of_Payments: number = Loan_Term * 12

const Base_Monthly_Payment: number = Principle_Mortgage_Amount / Number_Of_Payments

const Actual_Monthly_Payment: number = (Base_Monthly_Payment * Monthly_Interest_Rate) + Base_Monthly_Payment

const Full_Loan: number = Math.round( Actual_Monthly_Payment * Number_Of_Payments )

console.log(Full_Loan)