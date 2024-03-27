//Taxable Income = Gross Income - all deductions/exemptions allowed by law
// GrossSalary = basicSalary + benefits
// Net salary = Gross salary – Total Deductions


function calcNetSalary(basicSalary, benefits) {
    // Tax calculation
    const taxRate = 0.10; // tax rate is 10%
    const tax = basicSalary * taxRate;
    
    // NHIF Deductions 
    const nhifDeductions = 750; // NHIF deduction of 750

    // NSSF Deductions
    const nssfRate = 0.06; // Assuming a contribution rate of 6%
    const nssfDeductions = basicSalary * nssfRate;
    
    // Gross Salary
    const grossSalary = basicSalary + benefits;
    
    // Net Salary calculation
    const deductionsTotal = tax + nhifDeductions + nssfDeductions;
    const netSalary = grossSalary - deductionsTotal;

    return {
        tax: tax,
        nhifDeductions: nhifDeductions,
        nssfDeductions: nssfDeductions,
        grossSalary: grossSalary,
        netSalary: netSalary
    };
}
console.log(calcNetSalary(10000,500)) // enter basic salary and benefits as an argument