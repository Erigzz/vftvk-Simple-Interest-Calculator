function compute()
{
    var principal = document.getElementById("principal").value;
    // Validate the amount is a positive number
    if (principal <= 0) {
        alert("Enter a positive number.")    
        document.getElementById("principal").focus();
        document.getElementById("principal").click();
    }

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    var interest = principal * years * rate / 100; // Calculate interest
    var year = new Date().getFullYear() + parseInt(years); // Convert the number of years into the actual year in the future
    
    rs = document.getElementById("result")
    // If input is not valid, display a different message.
    if (principal <= 0) {
        rs.innerHTML = "Pass a valid amount."
    } else {
        rs.innerHTML = "If you deposit <strong><mark>"+principal+"</mark></strong>,\<br\>at an interest rate of <strong><mark>"+rate+"%</mark></strong>\<br\>You will receive an amount of <strong><mark>"+interest+"</mark></strong>,\<br\>in the year <strong><mark>"+year+"</mark></strong>.\<br\>";
    }
}

function updateRate()
{
    // Function that reads the value of the range slider and displays it in the span
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML=rateval+"%";
}
