//                             USER INPUT & CONDITIONAL STATEMENT

// Q1 Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”

/* Ans1 */ let city = prompt("Enter Your City");

alert(`Welcome to ${city} of lights`);

// Q2 Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.

/* Ans2 */ let gender = prompt("Enter Your Gender");

if (gender == "male" || gender == "Male") {
    alert("Good Morning Sir!");
}

else if(gender == "female" || gender == "Female"){
    alert("Good Morning Ma’am!")
}else{
    alert("wrong gender");
}

// Q3 Write a program to take input color of road traffic signal from the user & show the message according to this table:

/* Ans3 */ let color = prompt("select this color Red , Yellow , Green");

if (color == "Red" || color == "red") {
        alert("Must Stop");
}
else if (color == "Yellow" || color == "yellow") {
        alert("Ready to move");
}
else if (color == "Green" || color == "green") {

    alert("Move now");

}else{
        alert("wrong");
} 

// Q4 Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”

/* Ans4 */ let fuel = prompt("Enter Your Fuel Litres");

if (fuel <= 0.25) {

    alert("Please refill the fuel in your car")

}else{

    alert("Car Full");
}

