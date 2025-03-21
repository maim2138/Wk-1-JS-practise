function calculateTax(grossSalary) {
    if (grossSalary <= 288000) {
        return grossSalary * 0.1;
    } else if (grossSalary <= 388000) {
        return 28800 + (grossSalary - 288000) * 0.25;
    } else if(grossSalary <= 6000000){
        return 28800 + (388000 - 288000) * 0.25 + (grossSalary - 388000) * 0.30;
    } else if (grossSalary <= 9600000){
        return (grossSalary - 6000000) * 0.325 + 28800 + (388000 - 288000) * 0.25 + (6000000 - 388000) * 0.30;
    } else if (gross salary > 9600000){
        return (grossSalary - 9600000) * 0.35 + (9600000 - 6000000) * 0.325 + 28800 + (388000 - 288000) * 0.25 + (6000000 - 388000) * 0.30; 
    }
}

function calculateNHIF(grossSalary) {
    return Math.round(grossSalary * 0.0275)
}

function calculateNSSF(grossSalary) {
    return Math.min(grossSalary * 0.06, 1800);
}

function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const payee = calculateTax(grossSalary);
    const nhifDeductions = calculateNHIF(grossSalary);
    const nssfDeductions = calculateNSSF(grossSalary);
    const netSalary = grossSalary - (payee + nhifDeductions + nssfDeductions);

    return {
        "Gross Salary": grossSalary,
        "Payee (Tax)": payee,
        "NHIF Deductions": nhifDeductions,
        "NSSF Deductions": nssfDeductions,
        "Net Salary": netSalary
    };
}
