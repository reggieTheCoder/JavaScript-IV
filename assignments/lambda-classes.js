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
    catchPhrase: `Don't forget the homies`
});

const wilma = new Instructor({
    name: 'Wilma',
    location: 'Bedrock',
    age: 32,
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: `And you know this....... MAN!`
});

const barney = new Instructor({
    name: 'Barney',
    location: 'Brooklyn, NY',
    age: 33,
    favLanguage: 'JavaScript',
    specialty: 'Full - Stack',
    catchPhrase: `What you talking bout, Willis?`
});

console.log(fred);
console.log(fred.speak());
console.log(barney.speak());

//   Team Leads
const chrisPaul = new TeamLead({
    name: "Chris Paul",
    location: "OKC",
    age: 34,
    gradclassName: "Web2005",
    favInstructor: "Doc Rivers",
    specialty: "Front-end",
    catchPhrase: "Show me the money!!!!",
    favLanguage: "JavaScript"
});

const jasonKidd = new TeamLead({
    name: "Jason Kidd",
    location: "New Jersey",
    age: 46,
    gradclassName: "Web1994",
    favInstructor: "Rick Carlisle",
    specialty: "Flex-box",
    catchPhrase: "I must break you",
    favLanguage: "LESS"
});


const steveNash = new TeamLead({
    name: "Steve Nash",
    location: "Phoenix",
    age: 45,
    gradclassName: "Web2005",
    favInstructor: "Mike D'Antoni",
    specialty: "Databases",
    catchPhrase: "Did I do that?",
    favLanguage: "PHP"
});

console.log(jasonKidd.speak());
console.log(jasonKidd);
console.log(chrisPaul.speak());
console.log(chrisPaul);
console.log(steveNash.speak());
console.log(steveNash);

// Students
const dwayneWayne = new Student ({
    name: "Dwayne Wayne",
    age: 54,
    location: "Brooklyn, NY",
    previousBackground: "80's sitcom star",
    className: "WEB1",
    favSubjects: ["HTML", "CSS", "JavaScript"]

});

const ronJohnson = new Student ({
    name: "Ron Johnson",
    age: 56,
    location: "Detroit, Mi",
    previousBackground: "80'sitcom star",
    className: "WEB2",
    favSubjects: ["CSS", "Python"],

});

const whitleyGilbert = new Student ({
    name: "Whitley Gilbert",
    age: 57,
    location: "Richtown, USA",
    previousBackground: "80's sitcom star",
    className: "WEB1",
    favSubjects:["Python", "CS", "Java"],
});

whitleyGilbert.listSubjects();