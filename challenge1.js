function studGrade(input){
    if (input>=100 || input<0){
        console.log("Invalid" )  // does not give out a grade if the input is more than 100
    } else if (input>=79){
       console.log("A");  // returns 'A' if input is more or equal to 79
    }else if(input<79 && input>=60){
        console.log("B");   // returns 'B' if input is more or equal to 60 and less than 79
    }else if(input<=59 && input>=49){
        console.log("C");   // returns 'C' if input is more or equal to 49 and less than or equal to 59
    }else if(input<=49 && input>=40){
        console.log("D");    // returns 'D' if input is more or equal to 40 and less than or equal to 49
    }else if(input>=0 && input<40){
        console.log("E");   // returns 'E' if input is more or equal to 0 and less than 40
    }
}
studGrade(105) // where you call out your function with an argument(input)