console.log("Hello! Sorter function");
var numbers = [200, 100, 2, 5, 10, 3, 7, 1, 8];
console.log(numbers);

function sorter(array) {
    var swap, done = false,
        swapped;
    //is it done?
    while (!done) {
        swapped = 0;
        for (i = 1; i < array.length; i++) {
            //compare
            if (array[i - 1] > array[i]) {
                //swap
                swap = array[i];
                array[i] = array[i - 1];
                array[i - 1] = swap;
                swapped = 1;
            };
            if (swapped == 0) {
                done = true;
            }
        };
    };
    return array;
};
console.log(sorter(numbers));