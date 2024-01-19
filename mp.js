const prompt = require("prompt-sync")(); //modules that need to be installed
console.log("Time to get your dream body");
//const firstName = prompt("What is your first name? ");
//const lastName = prompt("What is your last name? ");
// email = prompt("What is your email address? ");
const weight = Number(prompt("How much do you weight in pounds? "));
const fatPercentage = Number(prompt("What is your body fat percentage? "));
const goal = Number(prompt("Type 1 for muscle growth (weight gain). Type 2 for fat loss (shred/tone-up). Type 3 for maintenance: "));

let selectedMuscle; // the const keyword was giving errors
if (goal === 1) {
    selectedMuscle = prompt("Choose one of the following muscles to grow over the next 6 weeks: Chest, Back, Shoulders, Triceps, Biceps, Glutes, Hamstrings, Quads, Calves: ");
}

const sets = '3 sets per exercise';
const growthOrMaintenanceReps = '5 to 8 reps';
const pumpReps1 = '2 x 12 to 15 and 1 x 20';

const workoutDays = {
    Monday: [sets, growthOrMaintenanceReps, 'Bench Press', 'Shoulder Press', 'JM Press', 'Barbell Row', 'Lat Pulldown', 'Barbell Shrugs', 'Barbell Upright Rows', 'Barbell Face Pull', 'Barbell Bicep Curls'],
    Tuesday: [sets, growthOrMaintenanceReps, 'Squats', 'Stiff Leg Deadlifts', 'Adductor', 'Abductor', 'Hamstring Curls', 'Leg Extensions', 'Seated Calf Raises', 'Standing Calf Raises'],
    Wednesday: 'Rest',
    Thursday: [pumpReps1, 'Bench Press', 'Incline Bench Press', 'Chest Fly', sets, growthOrMaintenanceReps, 'Shoulder Press', 'JM Press', 'Barbell Rows', 'Lat Pulldown', 'Barbell Shrugs', 'Barbell Face Pull', 'Barbell Upright Rows', 'Barbell Bicep Curls'],
    Thursdayfatloss: [pumpReps1, 'Bench Press', 'Incline Bench Press', 'Chest Fly', 'Shoulder Press', 'JM Press', 'Barbell Rows', 'Lat Pulldown', 'Barbell Shrugs', 'Barbell Face Pull', 'Barbell Upright Rows', 'Barbell Bicep Curls'],
    Thursdaymaintenance: [sets, growthOrMaintenanceReps, 'Bench Press', 'Incline Bench Press', 'Chest Fly', 'Shoulder Press', 'JM Press', 'Barbell Rows', 'Lat Pulldown', 'Barbell Shrugs', 'Barbell Face Pull', 'Barbell Upright Rows', 'Barbell Bicep Curls'],
    Friday: [sets, growthOrMaintenanceReps, 'Squats', 'Stiff Leg Deadlifts', 'Adductor', 'Abductor', 'Hamstring Curls', 'Leg Extensions', 'Seated Calf Raises', 'Standing Calf Raises'],
    Fridayfatloss: [pumpReps1, 'Squats', 'Stiff Leg Deadlifts', 'Adductor', 'Abductor', 'Hamstring Curls', 'Leg Extensions', 'Seated Calf Raises', 'Standing Calf Raises'],
    
};

const muscleGroups = {
    chest: ['Bench Press', 'Incline Dumbbell Press', 'Chest Fly'],
    back: ['Barbell Rows', 'Lat Pulldown', 'Barbell Shrugs'],
    shoulders: ['Shoulder Press', 'Barbell Front Raise', 'Barbell Upright Rows', 'Machine Lateral Raise', 'Barbell Face Pull', 'Reverse Pec Dec'],
    glutes: ['Sumo squats', 'Abductors', 'Adductors'],
    hamstrings: ['Stiff Leg Deadlifts', 'Seated Hamstring Curl', 'Lying Hamstring Curls'],
    quads: ['Squats', 'Leg Extensions'],
    calves: ['Standing Calf Raises', 'Seated Calf Raises'],
    biceps: ['Barbell Bicep Curls', 'Machine Curls', 'Reverse Curls', 'Hammer Curls', 'Pronated Dumbbell Curls'],
    legs: ['Squats', 'Stiff Leg Deadlifts', 'Adductor', 'Abductor', 'Hamstring Curls', 'Leg Extensions', 'Seated Calf Raises', 'Standing Calf Raises'],
    triceps: ['JM press', 'Incline Overhead Extensions', 'Cable Overhead Extensions', 'Cable Underhand Extensions', 'Cable Push Downs'],
};

function generateWorkout(muscle) {
    const workout = {
        Monday: [...workoutDays.Monday],
        Tuesday: [...workoutDays.Tuesday],
        Wednesday: workoutDays.Wednesday,
        Thursday: [...workoutDays.Thursday],
        Friday: [...workoutDays.Friday],
    };

    workout.Thursday[0] = '3 sets per exercise';
    workout.Thursday[1] = '5 to 8 reps';

    const selectedMuscleGroup = muscleGroups[muscle.toLowerCase()];

    workout.Monday = [...workoutDays.Monday];
    workout.Tuesday = [...workoutDays.Tuesday];
    workout.Thursday = [pumpReps1, ...selectedMuscleGroup, sets, growthOrMaintenanceReps, ...selectedMuscleGroup];
    workout.Friday = [...workoutDays.Friday];

    return workout;
}

if (goal === 1 && fatPercentage < 25) {
    const userWorkout = generateWorkout(selectedMuscle);
    console.log(userWorkout);

    // Calculate and display macronutrients
    const nonTrainingDayCarbs = weight * 0.5;
    const lightTrainingDayCarbs = weight * 1;
    const moderateTrainingDayCarbs = weight * 1.5;
    const heavyTrainingDayCarbs = weight * 2;

    const proteinPerDay = Math.round((weight - ((fatPercentage / 100) * weight)) * 0.9);
    const carbsPerDay = {
        'Rest Day': nonTrainingDayCarbs,
        '0 to 10 sets for the day': lightTrainingDayCarbs,
        '10 to 25 sets for the day': moderateTrainingDayCarbs,
        '25 plus sets for the day': heavyTrainingDayCarbs,
    };
    const fatPerDay = Math.round((weight - ((fatPercentage / 100) * weight)) * 0.5);

    console.log('\nGrams of Protein Per Day:', proteinPerDay);
    console.log('Grams of Carbs Per Day:');
    Object.keys(carbsPerDay).forEach((key) => {
        console.log(`-${key}: ${carbsPerDay[key]}`);
    });
    console.log('Grams of Fat Per Day:', fatPerDay);
} else {
    console.log("Unsupported goal or no muscle selected for muscle growth.");
}

const fatlossWorkout = {}; // Initialize the workout object

if (goal === 2 && fatPercentage >= 25) {
    fatlossWorkout.Monday = [...workoutDays.Monday];
    fatlossWorkout.Tuesday = [...workoutDays.Tuesday];
    fatlossWorkout.Wednesday = [...workoutDays.Wednesday];
    fatlossWorkout.Thursday = [...workoutDays.Thursdayfatloss];
    fatlossWorkout.Friday = [...workoutDays.Fridayfatloss];
} console.log(fatlossWorkout);

const maintenanceWorkout = {};

//all of these days should have the growthor maintenance reps
if (goal === 3) {
    maintenanceWorkout.Monday = [...workoutDays.Monday];
    maintenanceWorkout.Tuesday = [...workoutDays.Tuesday];
    maintenanceWorkout.Wednesday = [...workoutDays.Wednesday];
    maintenanceWorkout.Thursday = [...workoutDays.Thursdaymaintenance];
    maintenanceWorkout.Friday = [...workoutDays.Friday];
} console.log(maintenanceWorkout);
