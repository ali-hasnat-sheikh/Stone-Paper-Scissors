let user_name = prompt("Enter your name to play Stone, Paper, and Scissors with computer: ");
let choices = ["Stone", "Paper", "Scissors"];
let user_choice = prompt("Enter S for Stone, P for Paper or C for Scissors: ");
if(user_choice == "S"){
    user_choice = "Stone";
}
else if(user_choice == "P"){
    user_choice = "Paper";
}
else if(user_choice == "C"){
    user_choice = "Scissors";
}
else{
    alert("You entered inappropriate choice! Try again.");
}
let comp_choice = choices[Math.floor(Math.random()*(3))];
if(user_choice){alert(`${user_name} your choice is: ${user_choice}
and computer's choice is: ${comp_choice}`);
}
if(user_choice == "Stone" && comp_choice == "Paper" || user_choice == "Paper" && comp_choice == "Scissors" || user_choice == "Scissors" && comp_choice == "Stone"){
    alert(`Sorry ${user_name}! You lost 🥲. But you can try again.`);
}
else if(user_choice == "Stone" && comp_choice == "Scissors" || user_choice == "Paper" && comp_choice == "Stone" || user_choice == "Scissors" && comp_choice == "Paper"){
    alert(`It's a victory for ${user_name}. Congratulations!🙌☺️`);
}
else if(user_choice == comp_choice){
    alert("Game tied! You can try again to achieve victory! 🤞");
}
