const { dateStrings, imgs, trainers, gymClassNames, scheduleArray } = require("../constants");
const { ClassType } = require("../types");

// Generate dummy data for classes
const generateClassData = () => {
    const classes = [];

    for (let i = 0; i < 30; i++) {
        const name = chooseRandomItem(gymClassNames);
        const img = chooseRandomItem(imgs);
        const trainer = chooseRandomItem(trainers);
        const level = chooseRandomItem(["Beginners", "Intermediate", "Advanced"]);
        const schedule = [
            chooseRandomItem(scheduleArray),
            chooseRandomItem(scheduleArray),
            chooseRandomItem(scheduleArray),
        ];
        const startDate = chooseRandomItem(dateStrings);
        let endDate = chooseRandomItem(dateStrings);
        while (new Date(startDate) > new Date(endDate)) {
            endDate = chooseRandomItem(dateStrings);
        }
        const newClass = { name, trainer, level, schedule, startDate, endDate, img };

        classes.push(newClass);
    }
    return classes;
};

// Choose a random item in an array
const chooseRandomItem = (items) => {
    return items[Math.floor(Math.random() * items.length)];
};

module.exports = {
    generateClassData,
};
