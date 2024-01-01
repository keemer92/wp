const prompt = require("prompt-sync")();
console.log("Time to get your dream body");
const weight = Number(prompt("How much do you weigh in pounds? "));
const fat = Number(prompt("What is your body fat percentage? "));
const goal = Number(prompt("Type 1 for muscle growth (weight gain). Type 2 for fat loss (shred/toneup). Type 3 for maintenance: "));
let selectedMuscle;
if (goal === 1) 
        {selectedMuscle = prompt("Choose one of the following muscles to grow over the next 6 weeks: Chest, Back, Shoulders, Triceps, Biceps, Glutes, Hamstrings, Quads, Calves: ");}

//From line 15-30 the lifting terminology is being defined
const sets = '3 sets per exercise';
const rest = 'rest';
const growthOrMaintainenanceReps = '5 to 8 reps';
const pumpReps1 = '2 x 12 to 15 and 1 x 20';
const chest = ['Bench Press', 'Incline Dumbbell Press', 'Chest Fly'];
const back=  ['Barbell Rows', 'Lat Pulldown', 'Barbell Shrugs'];
const shoulders=  ['Shoulder Press', 'Barbell Front Raise','Barbell Upright Rows', 'Machine Lateral Raise','Barbell Face Pull', 'Reverse Pec Dec'];
const glutes = ['Sumo squats','Abductors', 'Adductors', ];
const hamstrings = ['Stiff Leg Deadlifts', 'Seated Hamstring Curl', 'Lying Hamstring Curls'];
const quads = ['Squats', 'Legs extensions'];
const calves = ['Standing Calf Raises', 'Seated Calf Raises'];
const biceps = ['Barbell Bicep Curls', 'Machine Curls', 'Reverse Curls', 'Hammer Curls', 'Pronoated Dumbbell Curls'];
const legs= ['Squats', 'Stiff Leg Deadlifts', 'Adductor', 'Abductor','Hamstring Curls','Leg Extensions', 'Seated Calf Raises', 'Standing Calf Raises'];
const triceps= ['JM press', 'Incline Overhead Extensions', 'Cable Overhead Extensions', 'Cable Underhand Extensions', 'Cable Push Downs'];
const pushAndpullday = [chest[0], shoulders[0], triceps[0], back[0], back[1], back[2], shoulders[2], shoulders[4], biceps[0]];
const chestReplacement = [shoulders[0], triceps[0], back[0], back[1], back[2], shoulders[4], shoulders[2], biceps[0]];
const backReplacement = [chest[0], chest[1], triceps[0], shoulders[0], shoulders[4], shoulders[2], biceps[0]];
const shoulderReplacement= [chest[0], chest[1], triceps[0], back[0], back[1], back[2], biceps[0]];
const tricepsReplacement = [chest[0], chest[1], shoulders[0], back[0], back[1], back[2], shoulders[4], shoulders[2], biceps[0]];
const bicepsReplacement = [chest[0], chest[1], triceps[0], back[0], back[1], back[2], shoulders[4], shoulders[2]];
const hamstringsReplacement = [sets, growthOrMaintainenanceReps, 'Squats', 'Adductor', 'Abductor','Leg Extensions', 'Seated Calf Raises', 'Standing Calf Raises'];
const quadsReplacement = [sets, growthOrMaintainenanceReps, 'Stiff Leg Deadlifts', 'Adductor', 'Abductor','Hamstring Curls','Seated Calf Raises', 'Standing Calf Raises'];
const glutesReplacement = [sets, growthOrMaintainenanceReps,'Squats', 'Stiff Leg Deadlifts','Hamstring Curls','Leg Extensions', 'Seated Calf Raises', 'Standing Calf Raises'];
const calvesReplacement= [sets, growthOrMaintainenanceReps, 'Squats', 'Stiff Leg Deadlifts', 'Adductor', 'Abductor','Hamstring Curls','Leg Extensions'];
const Monday = [sets, growthOrMaintainenanceReps, pushAndpullday];
const Tuesday = [sets, growthOrMaintainenanceReps, legs];
const Wednesday = [rest];
const Friday = [sets, growthOrMaintainenanceReps, legs];
    
    //lifting for muscle growth weightlifting and macros
    function getGrowth() {
        
        if (selectedMuscle.toLowerCase() === 'chest'){
            const chestWorkout = {
                Monday,
                Tuesday,
                Wednesday,
                Thursday: pumpReps1, chest, sets, growthOrMaintainenanceReps, chestReplacement,
                Friday,
            }
            return chestWorkout;
        }
        if (selectedMuscle.toLowerCase() === 'back'){
            const backWorkout = {
                Monday,
                Tuesday,
                Wednesday,
                Thursday: pumpReps1, back, sets, growthOrMaintainenanceReps, backReplacement,
                Friday,
            }
            return backWorkout;
        };
                        
        if (selectedMuscle.toLowerCase() === 'shoulders'){
            const shoulderWorkout = {
                Monday,
                Tuesday,
                Wednesday,
                Thursday: pumpReps1, shoulders, sets, growthOrMaintainenanceReps, shoulderReplacement,
                Friday,
            }
            return shoulderWorkout;
        };
        if (selectedMuscle.toLowerCase() === 'triceps'){
            const tricepsWorkout = {
                Monday,
                Tuesday,
                Wednesday,
                Thursday: pumpReps1, triceps, sets, growthOrMaintainenanceReps, tricepsReplacement,
                Friday,
            }
            return tricepsWorkout;
        };
        if (selectedMuscle.toLowerCase() === 'biceps'){
            const bicepsWorkout = {
                Monday,
                Tuesday,
                Wednesday,
                Thursday: pumpReps1, biceps, sets, growthOrMaintainenanceReps, bicepsReplacement,
                Friday,
            }
            return bicepsWorkout;
        };
        if (selectedMuscle.toLowerCase() === 'glutes'){
            const glutesWorkout = {
                Monday,
                Tuesday,
                Wednesday,
                Thursday: sets, growthOrMaintainenanceReps, pushAndpullday,
                Friday: pumpReps1, glutes, sets, growthOrMaintainenanceReps, glutesReplacement,
            }
            return glutesWorkout;
        };
        if (selectedMuscle.toLowerCase() === 'hamstrings'){
            const hamstringsWorkout = {
                Monday,
                Tuesday,
                Wednesday,
                Thursday: sets, growthOrMaintainenanceReps, pushAndpullday,
                Friday: pumpReps1, hamstrings, sets, growthOrMaintainenanceReps, hamstringsReplacement,
            }
            return hamstringsWorkout;
        };      
        if (selectedMuscle.toLowerCase() === 'quads'){
            const quadsWorkout = {
                Monday,
                Tuesday,
                Wednesday,
                Thursday: sets, growthOrMaintainenanceReps, pushAndpullday,
                Friday: pumpReps1, quads, growthOrMaintainenanceReps, quadsReplacement,
            }
            return quadsWorkout;
        };
        if (selectedMuscle.toLowerCase() === 'calves'){
            const calvesWorkout = {
                Monday,
                Tuesday,
                Wednesday,
                Thursday: sets, growthOrMaintainenanceReps, pushAndpullday,
                Friday: pumpReps1, calves, growthOrMaintainenanceReps, calvesReplacement,
            }
        return calvesWorkout;
                };
                const musclegrowthMacros = {
                    protein: Math.round((weight - ((fat / 100) * weight)) * 0.9),
                    carbs: [
                            'non training day carbs @ 1/2 of body weight',
                            'light training day of 0 to 10 sets start carbs @ 1 x body weight',
                            'moderate training day of 10 to 25 sets start carbs @ 1.5 x body weight',
                            'heavy training day of 10 to 25 sets start carbs @ 1.5 x body weight'
                ],
                    fat: Math.round((weight - ((fat / 100) * weight)) * 0.3),
                };

                console.log(musclegrowthMacros);
            
        
                     
return musclegrowthMacros; 


     function shred_macrosAndlifting() {
       
        //liftng for shred/toneup
        const shredLifting = {
            Monday,
            Tuesday,
            Wednesday,
            Thursday: { sets: sets, reps: pumpReps1, exercises: pushAndpullday },
            Friday: { sets: sets, reps: pumpReps1, exercises: legs }
        };
    
      //formula for creating macronutrients for shred/toneup
      const shredMacros = {
        protein: Math.round((weight- ((fat / 100) * weight)) * .9),
        carbs: Math.round(weight- ((fat / 100) * weight)),
        fat: Math.round((weight- ((fat / 100) * weight)) * .3),
    };
    return { shredLifting, shredMacros };
}
        
if  (goal === 1 && fat >= 25) 
{console.log("In this case its healthier to lose weight first and then put on muscle. Start here");}
if (goal === 2 && fat <= 25
)   {console.log("Time to shred/tone up. ");}
else if (goal === 2 && fat >= 25
)   {console.log("Time to shred/tone up. ");}

      
} 
if (goal != 1 || fat > 10) {
    return;
};
const muscleWorkoutResult = getGrowth();

console.log(muscleWorkoutResult);

    const calculatedshredMacronutrients = shred_macrosAndlifting();
    console.log(calculatedshredMacronutrients);
    

