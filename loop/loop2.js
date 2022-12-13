var bmi = prompt("Enter the BMI");
if (bmi < 18.5)
{
	console.log("Under Weight");
}
else if (bmi > 18.5 && bmi < 24.9)
{
	console.log ("Normal Weight");
}
else if (bmi > 25.0 && bmi < 29.9)
{
	console.log ("over Weight");
}
else
{
	console.log ("obese");
}