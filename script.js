console.log('sourced -> script.js');
var logTest = true;

/*Create an application that records employee salaries
and adds salaries up to report monthly costs. */

// The application should have an input form that collects employee first name, last name, ID number, job title, annual salary.

function onReady( ) {
    console.log('JQ Ready!')
    $('main').on('click', '#submit', submit)
//A 'Submit' button should collect the form information
}

// global array of employee objects
var employeeList = [];

function submit( ) {
    console.log('submit called');
    
// store the information to calculate monthly costs
    var $firstName = $('#firstName').val();
    var $lastName = $('#lastName').val();
    var $idNumber = Number ( $('#idNumber').val() );
    var $jobTitle = $('#jobTitle').val();
    var $annualSalary = Number( $('#annualSalary').val() );
    if (logTest) console.log('$firstName ->', $firstName);
    if (logTest) console.log('$lastName ->', $lastName);
    if (logTest) console.log('$idNumber ->', $idNumber);
    if (logTest) console.log('$jobTitle ->', $jobTitle);
    if (logTest) console.log('$annualSalary ->', $annualSalary);

    new Employee($firstName, $lastName, $idNumber, $jobTitle, $annualSalary)
    
// append information to the DOM
// clear the input fields
}

// builds objects with employee info
function Employee ( firstName, lastName, idNumber, jobTitle, annualSalary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.idNumber = idNumber;
    this.jobTitle = jobTitle;
    this.annualSalary = annualSalary;
    console.log('new Employee ->', this);
    
    // push objects into global array
    employeeList.push( this );
    console.log('employeeList ->', employeeList);
    
}

// looks at an array of employees and calculates the monthly cost
function calcSalaries( employeeList ) {
    // Using the stored information calculate monthly costs
    // var for total salary
    var totalSalary = 0;
    // loop through array
    for (var i = 0; i < employeeList.length; i++) {
        totalSalary += employeeList[i].annualSalary;
    }
    var monthlyCost = totalSalary / 12;
    return monthlyCost;
}
// append this to the to DOM



// Hard Mode -- Create a delete button
// Hard Mode -- that removes an employee from the DOM
// Hard Mode -- it does not need to remove that Employee's salary from the reported total

// Pro Mode -- Once the employee is deleted, update the total spend on salaries account for this employee's removal.
// This will require that the logic knows which element was removed. 
// Look into jQuery's .data() function. 
// You will need to do something both when the employee is added
// and when they are deleted.

$(document).ready(onReady);