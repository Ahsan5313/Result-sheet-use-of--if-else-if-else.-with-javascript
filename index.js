var marks=prompt("enter your marks");

if(marks>80 && marks<100 )
document.write("The grad = " + "A+");

else if(marks>70 && marks<80 )
document.write("The grad = " + "A");

else if(marks>60 && marks<70 )
document.write("The grad = " + "A-");

else if(marks>50 && marks<60 )
document.write("The grad = " + "b");

else if(marks>40 && marks<50 )
document.write("The grad = " + "c");

else if(marks>32 && marks<40 )
document.write("The grad = " + "d");

else if(marks>32 && marks<34 )
document.write("The grad = " + "pass");

else 
document.write(marks>0 && marks<30 ("The grad = " + "f"));