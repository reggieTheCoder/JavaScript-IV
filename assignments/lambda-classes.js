// CODE here for your Lambda Classes

class Person {
    constructor(personAttrs) {
        //set up properties
        this.name = personAttrs.name;
        this.age = personAttrs.age;
        this.location = personAttrs.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}
class Instructor extends Person {
    constructor(instructorAttrs) {
        super(instructorAttrs);
        this.specialty = instructorAttrs.specialty;
        this.favLanguage = instructorAttrs.favLanguage;
        this.catchPhrase = instructorAttrs.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

class Student extends Person {
    constructor(studentAttrs) {
        super(studentAttrs);
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubjects = studentAttrs.favSubjects;
    }
    listSubjects() {
        this.favSubjects.map(item => console.log(item));
    }

    PRAssigmment() {
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge() {
        return `${student.name} has begun spring challenge on ${subject}`;
    }
}

class TeamLead extends Instructor {
    constructor(teamLeadAttrs) {
        super(teamLeadAttrs);
        this.gradclassName = teamLeadAttrs.gradclassName;
        this.favInstructor = teamLeadAttrs.favInstructor;
    }
    standup() {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }

    debugsCode() {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

//   Instructors 
const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `"Yabba Dabba Doo"`
});

const wilma = new Instructor({
    name: 'Wilma',
    location: 'Bedrock',
    age: 32,
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: `"And you know this....... MAN!"`
});

const barney = new Instructor({
    name: 'Barney',
    location: 'Brooklyn, NY',
    age: 33,
    favLanguage: 'JavaScript',
    specialty: 'Full - Stack',
    catchPhrase: `"What you talking bout, Willis?"`
});

// Instructor 1 test
console.log(fred.speak());
console.log(
    `${fred.name}'s Bio
    ${fred.name} is ${fred.age} years old.
    ${fred.name}'s favorite language is ${fred.favLanguage}.
    He speacializes in ${fred.specialty} development.
    His catch phrase is from his favorite cartoon the Flintstones, ${fred.catchPhrase}. `
);
// Instructor 2 test
console.log(wilma.speak());
console.log(
    `${wilma.name}'s Bio
    ${wilma.name} is ${wilma.age} years old.
    ${wilma.name}'s favorite language is ${wilma.favLanguage}.
    She speacializes in ${wilma.specialty} development.
    Her catch phrase is from her favorite movie Friday, ${wilma.catchPhrase}. `
);
// Instructor 3 test
console.log(barney.speak());
console.log(
    `${barney.name}'s Bio
    ${barney.name} is ${barney.age} years old.
    ${barney.name}'s favorite language is ${barney.favLanguage}.
    He speacializes in ${barney.specialty} development.
    His catch phrase is from his favorite sitcom Different Strokes, ${barney.catchPhrase}. `
);




//   Team Leads
const chrisPaul = new TeamLead({
    name: "Chris Paul",
    location: "OKC",
    age: 34,
    gradclassName: "Web2005",
    favInstructor: "Doc Rivers",
    specialty: "Front-end",
    catchPhrase: '"Show me the money!!!!"',
    favLanguage: "JavaScript"
});

const jasonKidd = new TeamLead({
    name: "Jason Kidd",
    location: "New Jersey",
    age: 46,
    gradclassName: "Web1994",
    favInstructor: "Rick Carlisle",
    specialty: "Flex-box",
    catchPhrase: '"I must break you"',
    favLanguage: "LESS"
});


const steveNash = new TeamLead({
    name: "Steve Nash",
    location: "Phoenix",
    age: 45,
    gradclassName: "Web2005",
    favInstructor: "Mike D'Antoni",
    specialty: "Databases",
    catchPhrase: '"Did I do that?"',
    favLanguage: "PHP"
});

// Team Lead 1 test
console.log(jasonKidd.speak());
console.log(`${jasonKidd.name}'s Bio
Jason is ${jasonKidd.age} years old.
his favorite instructor is ${jasonKidd.favInstructor}
He specializes in ${jasonKidd.specialty}
His favorite language is ${jasonKidd.favLanguage}.
His catch phrase is from the movie Rocky IV, ${jasonKidd.catchPhrase}
${jasonKidd.name}'s grad class is ${jasonKidd.gradclassName}`);

// Team Lead 2 test
console.log(chrisPaul.speak());
console.log(`${chrisPaul.name}'s Bio
Chris is ${chrisPaul.age} years old.
his favorite instructor is ${chrisPaul.favInstructor}.
He specializes in ${chrisPaul.specialty}.
His favorite language is ${chrisPaul.favLanguage}.
His catch phrase is from the movie Jerry Maguire, ${chrisPaul.catchPhrase}.
${chrisPaul.name}'s grad class is ${chrisPaul.gradclassName}`);

// Team Lead 3 test
console.log(steveNash.speak());
console.log(`${steveNash.name}'s Bio
Steve is ${steveNash.age} years old.
his favorite instructor is ${steveNash.favInstructor}
He specializes in ${steveNash.specialty}
His favorite language is ${steveNash.favLanguage}.
His catch phrase is from the sitcom Family Matters, ${steveNash.catchPhrase}
${steveNash.name}'s grad class is ${steveNash.gradclassName}`);

// Students
const dwayneWayne = new Student({
    name: "Dwayne Wayne",
    age: 54,
    location: "Brooklyn, NY",
    previousBackground: "80's sitcom star",
    className: "WEB1",
    favSubjects: [`HTML, CSS, and JavaScript`]

});

const ronJohnson = new Student({
    name: "Ron Johnson",
    age: 56,
    location: "Detroit, Mi",
    previousBackground: "80'sitcom star",
    className: "WEB2",
    favSubjects: [`CSS", and Python`],

});

const whitleyGilbert = new Student({
    name: "Whitley Gilbert",
    age: 57,
    location: "Richtown, USA",
    previousBackground: "80's sitcom star",
    className: "WEB1",
    favSubjects: [`Python, CSS, and Java`],
});

// Student 1 test
console.log(dwayneWayne.speak());
console.log(
    `${dwayneWayne.name}'s Bio
${dwayneWayne.name} is ${dwayneWayne.age} years old.
${dwayneWayne.name} has a background as a ${dwayneWayne.previousBackground}.
He is currently enrolled in ${dwayneWayne.className}.
${dwayneWayne.name}'s favorite subjects so far are ${dwayneWayne.favSubjects}.`
);

// Student 2 test
console.log(ronJohnson.speak());
console.log(
    `${ronJohnson.name}'s Bio
${ronJohnson.name} is ${ronJohnson.age} years old.
${ronJohnson.name} has a background as a ${ronJohnson.previousBackground}.
He is currently enrolled in ${ronJohnson.className}.
${ronJohnson.name}'s favorite subjects so far are ${ronJohnson.favSubjects}.`
);

// Student 3 test
console.log(whitleyGilbert.speak());
console.log(
    `${whitleyGilbert.name}'s Bio
${whitleyGilbert.name} is ${whitleyGilbert.age} years old.
${whitleyGilbert.name} has a background as a ${whitleyGilbert.previousBackground}.
He is currently enrolled in ${ronJohnson.className}.
${whitleyGilbert.name}'s favorite subjects so far are ${whitleyGilbert.favSubjects}.`
);