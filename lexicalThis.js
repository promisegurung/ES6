var obj = {
    value: 0,
    increment: function () { // notice this is not arrow function
        setTimeout(() => {
            this.value++;
            console.log(this.value);
        }, 1000);
    }
} 

obj.increment();


function ListPrefixer (list, prefix) {
    this.list = list;
    this.prefix = prefix;
}
ListPrefixer.prototype.transform = function (cb) {
    this.list = this.list.map(cb);
}
ListPrefixer.prototype.applyPrefix = function() {
    this.transform(function (number) {
        return this.prefix + number;
    })
}
ListPrefixer.prototype.applyPrefixArrow = function() {
    this.transform((number) => {
        return this.prefix + number;
    })
}
 
const request = new ListPrefixer([1, 2, 3], '*');
 
request.applyPrefix();
console.log(request.list);
 
request.applyPrefixArrow();
console.log(request.list);




function StringBuilder (string) {
    this.string = string || '';
  }
  StringBuilder.prototype.append = function (string) {
    return new StringBuilder(this.string + string)
  }
  StringBuilder.prototype.prepend = function (string) {
    return new StringBuilder(string + this.string)
  }
  StringBuilder.prototype.pad = function (string) {
    return this.append(string).prepend(string);
  }
  StringBuilder.prototype.convertChars = function (converter) {
    let oldString = this.string;
    this.string = '';
    for (let i = 0; i < oldString.length; i++) {
      // TODO: Fix this section
      converter(oldString[i], function (converted) {
        this.string += converted;
      })
    }
    return new StringBuilder(this.string);
  }