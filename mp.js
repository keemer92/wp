const prompt = require("prompt-sync")();

console.log("Time to get your dream body");
const weight = Number(prompt("How much do you weigh in pounds? "));
const fat = prompt("What is your body fat percentage? ");
const goal = Number(prompt("Type 1 for muscle growth (weight gain). Type 2 for fat loss (shred/toneup). Type 3 for maintenance: "));
let selectedMuscle; 
/*I was getting this error "selectedMuscle' is declared but its value is never read.ts(6133)"
So i defined selectedMuscle in another place until it was used. Before i was using const
*/
if (goal === 1) 
        {selectedMuscle = prompt("Choose one of the following muscles to grow over the next 6 weeks: Chest, Back, Shoulders, Triceps, Biceps, Glutes, Hamstrings, Quads: ");}

function musclegrowth_macrosAndlifting() {
//From line 15-30 the lifting terminology is being defined
    const workoutDays = ['Monday', 'Tuesday', 'Thursday', 'Friday'];
    const sets = '3 per exercise';
    const growthOrMaintainenanceReps = '5 to 8';
    const pumpReps1 = '2 x 12 to 15 and 1 x 20';
    const pumpReps2 = '2 x 20';
    const exercises = {
        chestPushday: ['Bench Press', 'Incline Dumbbell Press'],
        chestFocus: ['Bench Press', 'Incline Dumbbell Press', 'Chest Fly'],
        backPullday: ['Barbell Rows', 'Lat Pulldown'],
        backFocus: ['Barbell Rows', 'Lat Pulldown', 'Seated Row'],
        traps:  ['Barbell Shrugs'],
        shoulders: [['Shoulder Press', 'Barbell Front Raise'],['Barbell Upright Rows', 'Machine Lateral Raise'],['Barbell Face Pull', 'Reverse Pec Dec']],
        frontDeltFocus: ['Shoulder Press', 'Barbell Front Raise'],
        sideDeltFocus: ['Barbell Upright Rows', 'Machine Lateral Raise'],
        rearDeltFocus: ['Barbell Face Pull', 'Reverse Pec Dec'],
        biceps: ['Barbell Bicep Curls', 'Dumbbell Bicep Curls', 'Hammer Curls'],
        legs: ['Squats', 'Stiff Leg Deadlifts', 'Adductor', 'Abductor','Hamstring Curls','Leg Extensions', 'Seated Calf Raises', 'Standing Calf Raises'],
        triceps: ['JM press', 'Tricep Overhead Extensions'],
        tricepsFocus: ['JM press', 'Tricep Overhead Extensions']
    }  
    
    const pushAndpullday = [exercises.chestPushday[0], exercises.chestPushday[1], exercises.shoulders[0][0], exercises.triceps[0], exercises.backPullday[0], exercises.backPullday[1], exercises.shoulders[2][0], exercises.shoulders[1][0], exercises.biceps[0]];
    const legDay = [exercises.legs[0], exercises.legs[1], exercises.legs[2], exercises.legs[3], exercises.legs[4], exercises.legs[5], exercises.legs[6], exercises.legs[7]]
    const chestFocusReplacement = [exercises.shoulders[0][0], exercises.triceps[0], exercises.backPullday[0], exercises.backPullday[1], exercises.shoulders[2][0], exercises.shoulders[1][0], exercises.biceps[0]];
    const backFocusReplacement = [exercises.chestPushday[0], exercises.chestPushday[1], exercises.shoulders[0][0], exercises.triceps[0], exercises.shoulders[2][0], exercises.shoulders[1][0], exercises.biceps[0]];
    
    //lifting for muscle growth set, reps, and macros
    function chestgrowth() {
        if (goal === 1 && fat <= 25 && selectedMuscle.toLowerCase() === 'chest'){
            const chestworkout = {
                Monday: {sets, reps: growthOrMaintainenanceReps, exercises: pushAndpullday},
                Tuesday: {sets, reps: growthOrMaintainenanceReps, exercises: legDay},
                Wednesday: 'rest',
                Thursday: {sets, reps: pumpReps2, exercises: exercises.chestFocus.toString(), sets, reps: growthOrMaintainenanceReps, chestFocusReplacement },
                Friday: {sets, reps: growthOrMaintainenanceReps, exercises: legDay }
            };
            return chestworkout;
             }
             
        }
         // Call the chestgrowth function and store the returned value
     const chestWorkoutResult = chestgrowth();

     // Now you can use chestWorkoutResult as needed
     console.log(chestWorkoutResult);

     }

     return musclegrowth_macrosAndlifting();
    


const calculatedmusclegrowth_macrosAndlifting = musclegrowth_macrosAndlifting();

     // Now you can use chestWorkoutResult as needed
     console.log(calculatedmusclegrowth_macrosAndlifting);
    


function shred_macrosAndlifting() {
    if  (goal === 1 && fat >= 25) 
        {console.log("In this case its healthier to lose weight first and then put on muscle. Start over and type 2 if you would like a fat loss/shredding/tone up program");
}   else if (goal === 2 && fat <= 25
    )   {console.log("Time to shred/tone up. ");}
    else if (goal === 2 && fat >= 25
    )   {console.log("Time to shred/tone up. ");}

    //liftng for shred/toneup
    const shredLifting = {
        Monday:     pushAndpullday,
                    sets,
                    growthOrMaintainenanceReps,
        Tuesday:    legDay,
                    sets,
                    growthOrMaintainenanceReps,
        wednesday: "rest",
        Thursday:   pushAndpullday,
                    sets,
                    pumpReps1,
        Friday:     legDay,
                    sets,
                    pumpReps1,
    }
    console.log(shredLifting);

  //formula for creating macronutrients for shred/toneup
  const shredMacronutrients = {
    protein: Math.round((weight- ((fat / 100) * weight)) * .9),
    carbs: Math.round(weight- ((fat / 100) * weight)),
    fat: Math.round((weight- ((fat / 100) * weight)) * .3),
};
return shredMacronutrients; // Return the calculated macronutrients
}

const calculatedshredMacronutrients = shred_macrosAndlifting();
console.log(calculatedshredMacronutrients);

