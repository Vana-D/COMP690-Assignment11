# M13 Assignment 11

## The Bank Account Application (Creating a Closure Function)

In this simple bank account application, you will use closures as a way to maintain state (to keep track of the account balance), to offer external code a way to get and set information (make a deposit or get the current balance), and to protect data (like the balance) from inappropriate tampering. To successfully complete this part of the assignment, follow the steps outlined below:

### Part 1 – The UI

1. Within the web page, add buttons for Name, Deposit, and Withdrawal.
2. When the user clicks the Name button, a prompt should appear that allows the user to enter their name.
3. When the user clicks the Deposit button, a prompt should appear that allows the user to enter an amount to deposit.
4. When the user clicks the Withdrawal button, a prompt should appear that allows the user to enter an amount to withdrawal.
5. Add a div element that will be used to display the user’s name and their balance as they deposit and withdrawal money.

### Part 2 – The Closure Function

1. Create a function called bankAccount that accepts a single parameter: ownerName.
2. Add local variables balance and owner. Owner should be set by the incoming parameter.
3. Return an object with methods for withdrawal that accepts a parameter (withdrawalAmount), deposit that accepts a parameter (depositAmount), getBalance(), and getOwnerName().
4. Add validation to ensure only appropriate withdrawals and deposits are allowed.
5. The balance and ownerName methods will return the values of the private variables.
6. The withdrawal function will withdrawal money from the owner’s bank account and the balance should be reflected.
7. The deposit function should add money to the owner’s bank account and the balance should be reflected.

## Setting Speed for the Slide Show Application (Adding to an Existing Closure Function)

In Lab 20 you created a slide show of Zak’s Life. The slides changed from one slide to another and the speed at which each slide rotated was hardcoded as the second parameter in the setInterval() method. In this part of the assignment you will create functionality that allows the user to set the speed at which the slideshow plays. Here are some things to consider when building out this functionality within the application:

1. You’ll need to start by adding a set speed button to the web page. It should appear to the right of the Pause button.
2. When the user clicks the button, a prompt should appear that has the current speed shown and allows the user to change it to a different speed.
3. Change up the application so that you now have a private variable called speed and the default speed of 2000 should be set for it.
4. Create 2 new public methods within your createSlideshow() method. One should set the speed variable and the other should get the speed variable. You’ll need to figure out what to do within these methods to get the application to work correctly.
5. The second parameter of the setInterval() method will now be set by the speed variable.
