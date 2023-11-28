var marks = [67,45,75,34,67];
larg = marks[0];

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largest)
//     largest = arr[i];
//  }

for(let i = 1;i<marks.length;i++)
{
    // if(marks[i]>larg)
    // larg=marks[i];

    let a = marks[i]>larg ? larg=marks[i]: larg;
}
console.log(larg);

