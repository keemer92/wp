const prompt = require("prompt-sync")();
console.log("Time to get your dream body");
const weight = Number(prompt("How much do you weigh in pounds? "));
const fatPercentage = Number(prompt("What is your body fat percentage? "));
const goal = Number(prompt("Type 1 for muscle growth (weight gain). Type 2 for fat loss (shred/toneup). Type 3 for maintenance: "));
let selectedMuscle;
if (goal === 1) 
        {selectedMuscle = prompt("Choose one of the following muscles to grow over the next 6 weeks: Chest, Back, Shoulders, Triceps, Biceps, Glutes, Hamstrings, Quads, Calves: ");}

//From line 10-43 is liftting terminology
const sets = '3 sets per exercise';
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
const Wednesday = 'rest';
const Friday = [sets, growthOrMaintainenanceReps, legs];
const Thursday = 'Thursday';
const nonTrainingDayCarbs = weight * .5;
const lightTrainingDayCarbs = weight * 1;
const moderateTrainingDayCarbs = weight * 1.5;
const heavyTrainingDayCarbs = weight * 2;

    
    //lifting for muscle growth weightlifting and macros
function muscleGrowthLifting() {
    switch(selectedMuscle) {
        case "chest":
        console.log(Monday.toString(),Tuesday.toString,Wednesday.toString(),Thursday.toString(), pumpReps1, chest.toString(), sets, growthOrMaintainenanceReps, chestReplacement.toString(), Friday.toString())
        break;

        case "back":
        console.log(Monday, Tuesday, Wednesday, Thursday, pumpReps1, back, sets, growthOrMaintainenanceReps, backReplacement, Friday);
        break;

        case "shoulders":
        console.log(Monday, Tuesday, Wednesday, Thursday, pumpReps1, shoulders, sets, growthOrMaintainenanceReps, shoulderReplacement, Friday);
        break;
            
        case "triceps":
        console.log(Monday, Tuesday, Wednesday, Thursday, pumpReps1, triceps, sets, growthOrMaintainenanceReps, tricepsReplacement, Friday);
        break;

        case "biceps":
        console.log(Monday, Tuesday, Wednesday, Thursday, pumpReps1, biceps, sets, growthOrMaintainenanceReps, bicepsReplacement, Friday);
        break;

        case "glutes":
        console.log(Monday, Tuesday, Wednesday, Thursday, sets, growthOrMaintainenanceReps, pushAndpullday, Friday, pumpReps1, glutes, sets, growthOrMaintainenanceReps, glutesReplacement);
        break;

        case "hamstrings":
        console.log(Monday, Tuesday, Wednesday, Thursday, sets, growthOrMaintainenanceReps, pushAndpullday, Friday, pumpReps1, hamstrings, sets, growthOrMaintainenanceReps, hamstringsReplacement)
        break;

        case "quads":
        console.log(Monday, Tuesday, Wednesday, Thursday, sets, growthOrMaintainenanceReps, pushAndpullday, Friday, pumpReps1, quads, growthOrMaintainenanceReps, quadsReplacement)
        break;

        case "calves":
        console.log(Monday, Tuesday, Wednesday, Thursday, sets, growthOrMaintainenanceReps, pushAndpullday, Friday, pumpReps1, calves, growthOrMaintainenanceReps, calvesReplacement)
        break;
        }
    }
    const muscleGrowthLiftingresults = muscleGrowthLifting();
    console.log(muscleGrowthLiftingresults);

    function muscleGrowthMacros () {
        if (goal === 1 && fatPercentage < 25) { 
            const carbsproteinsAndfatsformuscle = {
            'Grams of Protein Per Day' : Math.round((weight - ((fatPercentage / 100) * weight)) * 0.9),
            'Grams of Carbs Per Day' : 
                'Rest Day', nonTrainingDayCarbs,
                '0 to 10 sets for the day': lightTrainingDayCarbs,
                '10 to 25 sets for the day': moderateTrainingDayCarbs,
                '25 plus sets for the day': heavyTrainingDayCarbs,
            'Grams of Fat Per Day': Math.round((weight - ((fatPercentage / 100) * weight)) * 0.3),
            }

        console.log(carbsproteinsAndfatsformuscle);
        }
           
    };

    const muscleGrowthMacrosresults = muscleGrowthMacros();
    console.log(muscleGrowthMacrosresults);
     
     function shred_macrosAndlifting() {
       
        
        const shredLifting = {
            Monday,
            Tuesday,
            Wednesday,
            Thursday: { sets: sets, reps: pumpReps1, exercises: pushAndpullday },
            Friday: { sets: sets, reps: pumpReps1, exercises: legs }
        };
    
      //formula for creating macronutrients for shred/toneup
      const shredMacros = {
        protein: Math.round((weight- ((fatPercentage / 100) * weight)) * .9),
        carbs: Math.round(weight- ((fatPercentage / 100) * weight)),
        fat: Math.round((weight- ((fatPercentage / 100) * weight)) * .3),
    };
    return { shredLifting, shredMacros };
}
        
if  (goal === 1 && fatPercentage >= 25) 
{console.log("In this case its healthier to lose weight first and then put on muscle. Start here");}
if (goal === 2 && fatPercentage <= 25
)   {console.log("Time to shred/tone up. ");}
else if (goal === 2 && fatPercentage >= 25
)   {console.log("Time to shred/tone up. ");}

  var result;    

if (goal != 1 || fatPercentage > 10) {
    result = shred_macrosAndlifting();
} else if (goal ===1 && fatPercentage < 25){
    result = getGrowth();
} 
console.log(result);
    

