function TestSum(x, y)
{
    if(Number.isInteger(x) && Number.isInteger(y))
    {
        return x+y;
    }
    else
    {
        console.log("두 가지 수를 전달해야 합니다");
        document.write("두 가지 수를 전달해야 합니다");
    }
}

function TestSum2(val1, val2)
{
    if(String(val1 + val2) == 'NaN')
    {
        console.log("두 가지 수를 전달해야 합니다");
    }
    return val1+val2;
}

function TestSum3(val1, val2)
{
    if(!(val1 + val2) == !NaN)  
    // val1 + val2 == 0 일때 버그
    {
        console.log("두 가지 수를 전달해야 합니다");
    }
    return val1+val2;
}

TestSum ("123", 123);