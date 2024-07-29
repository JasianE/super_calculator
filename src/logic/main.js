const calculator = () => {
    //Basic arithmetic calculator
    //Factory function for "scalability" (cuz i wanted to) 
    function add(a,b){
        let sum = a + b
        return sum
    };
    function subtract(a,b){
        let sum = a - b;
        return sum
    }
    function multiply(a,b){
        let total = a*b;
        return total
    }
    function divide(a,b){
        let total = a/b;
        return total
    }
    function useTheFunctions(a,b,c){
        switch (c){
        case "+":
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "*":
            return multiply(a,b);
        case "/":
            return divide(a,b)
        }
    }
    return {useTheFunctions}
};

function calculatorCreator(){
    //Creates a calculator object and returns it to be used to create multiple calculators in app.js
    let myCalculator = calculator()
    return myCalculator
}
export default calculatorCreator;