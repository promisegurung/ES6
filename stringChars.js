const string = "hello world";
string;

const chars = [...string];
chars;

// as simple as that! reallly?

const trimmed = [...(string.split(" ").join(''))];
trimmed;

// no white space in between

for (let char of string) {
    console.log(char);
}