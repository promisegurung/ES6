// function returning funtion: HOF
const retirement = (retirementAge) => {
    return (yearOfBirth) => {
        return retirementAge - (2019 - yearOfBirth);
    }
}
const myYearOfBirth = 1993;
const myRetirementInUk = retirement(65);
const myRetirementInFra = retirement(62);


console.log(myRetirementInUk(myYearOfBirth)); // in UK
console.log(myRetirementInFra(myYearOfBirth)); // in France


// two arguments
const retirement1 = (retirementAge, yearOfBirth) => {
    return retirementAge - (2019 - yearOfBirth);
}
const myRetirement1 = retirement1(65, 1993);
myRetirement1;

// CLOSURES: interview questions

const interviewQuestion = job => {
    return name => {
        switch (true) {
            case job === 'designer':
                return `Hey ${name}, Can you tell me what UX is?`
            case job === 'teacher':
                return `Hello ${name}, What subject do you teach?`
            default: return `Greetings ${name}, What do you do?`
        }
    }
}

const designerQuestion = interviewQuestion('designer');
const teacherQuestion = interviewQuestion('teacher');

console.log(designerQuestion('Philipe'));
console.log(teacherQuestion('Marcus'));
console.log(interviewQuestion()('Jimmy'))

