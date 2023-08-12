let arr = [
    { id: 1, name: 'john', age: 18, profession: 'developer' },
    { id: 2, name: 'jack', age: 20, profession: 'developer' },
    { id: 3, name: 'karen', age: 19, profession: 'admin' },
  ];
  
  function PrintDeveloper() {
    const developers = arr.filter(employee => employee.profession === 'developer');
    developers.forEach(developer => {
      console.log(`Name: ${developer.name}, Age: ${developer.age}, Profession: ${developer.profession}`);
    });
    console.log(developers);
  }
  
  
  function addData(id, name, age, profession) {
    //Write your code here, just console.log
    const newEmployee = { id, name, age, profession };
    arr.push(newEmployee);
    console.log(arr);
  }

  addData(4,"susan",20,"intern");
  
  function removeAdmin() {
    //Write your code here, just console.log
    arr = arr.filter(employee => employee.profession !== 'admin');
    console.log(arr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    const newEmployees = [
        { id: 5, name: 'emma', age: 22, profession: 'developer' },
        { id: 6, name: 'mike', age: 24, profession: 'admin' }
      ];
      arr = arr.concat(newEmployees);
      console.log(arr);
  }
  
  // Here is an example of how functions work,
  // basically a function is a block of code which can directly access your 'arr' variable since arr is global.
  // If I have a function called consoleArr(), that can directly access arr like this to console it.
  
  function consoleArr() {
    console.log('Consoling Array Variable', arr);
    // Over here I can directly access the variable.
  }