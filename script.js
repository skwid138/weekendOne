console.log('sourced -> script.js');
var logTest = true;

/*Create an application that records employee salaries
and adds salaries up to report monthly costs. */

function onReady( ) {
    console.log('JQ Ready!');
    //A 'Submit' button should collect the form information
    $('main').on('click', '#submit', submit);
    // Hard Mode -- Create a delete button
    $('main').on('click', '.removeButton', deleteRecord);
}

// global array of employee objects
var employeeList = [];

// The application should have an input form that collects employee first name, last name, ID number, job title, annual salary.
function submit( ) {
    console.log('submit called');
    
// store the information to calculate monthly costs
    var $firstName = $('#firstName').val();
    var $lastName = $('#lastName').val();
    var $idNumber = $('#idNumber').val();
    var $jobTitle = $('#jobTitle').val();
    var $annualSalary = Number( $('#annualSalary').val() );
    if (logTest) console.log('$firstName ->', $firstName);
    if (logTest) console.log('$lastName ->', $lastName);
    if (logTest) console.log('$idNumber ->', $idNumber);
    if (logTest) console.log('$jobTitle ->', $jobTitle);
    if (logTest) console.log('$annualSalary ->', $annualSalary);

    new Employee($firstName, $lastName, $idNumber, $jobTitle, $annualSalary);
    
    var $employeeAppend = $('table > tbody:last-child');
    // append information to the DOM
    // $employeeAppend.append("<tr>");
    // using the below mess my <td>'s are actually being put inside the <tr> which makes my remove button work
    $employeeAppend.append("<tr><td><span>" + $firstName + "</span></td><td><span>" + $lastName + "</span></td><td><span>" + $idNumber + "</span></td><td><span>" + $jobTitle + "</span></td><td><span>" + $annualSalary + "</span></td><td><button class='removeButton'>Remove</button></td>");
    // $employeeAppend.append("<td><span>" + $lastName + "</span></td>");
    // $employeeAppend.append("<td><span>" + $idNumber + "</span></td>");
    // $employeeAppend.append("<td><span>" + $jobTitle + "</span></td>");
    // $employeeAppend.append("<td><span>" + $annualSalary + "</span></td>");
    // Hard Mode -- Create a delete button
    // $employeeAppend.append("<td><button class='removeButton'>Remove</button></td>");

    // clear the input fields
    $('#firstName').val( '' );
    $('#lastName').val( '' );
    $('#idNumber').val( '' );
    $('#jobTitle').val( '' );
    $('#annualSalary').val( '' );

    // append this to the to DOM
    var $calcSalariesOutput = $('#calcSalariesOutput');
    $calcSalariesOutput.text(calcSalaries(employeeList));
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
    var totalSalary = 0;
    // loop through array
    for (var i = 0; i < employeeList.length; i++) {
        totalSalary += employeeList[i].annualSalary;
    }
    var monthlyCost = totalSalary / 12;
    return monthlyCost;
}

// Hard Mode -- that removes an employee from the DOM
// Hard Mode -- it does not need to remove that Employee's salary from the reported total
function deleteRecord ( ) {
    if (logTest) console.log('deleteRecord called');
    // looks like these both target the same element
    if (logTest) console.log($(this).closest('tr'));
    if(logTest) console.log($(this).parents('tr:first'));
    $(this).closest('tr').remove();

    // Pro Mode -- Once the employee is deleted, update the total spend on salaries account for this employee's removal.
    // This will require that the logic knows which element was removed. 
    // Look into jQuery's .data() function. 
    // You will need to do something both when the employee is added
    // and when they are deleted.
   
}

$(document).ready(onReady);