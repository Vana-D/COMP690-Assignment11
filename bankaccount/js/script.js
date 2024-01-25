/*
    Project: Assignment 11: The Bank Account Application
    Date: 01/25/24
    Author: Van Do
*/

// HELPER FUNCTION TO GET DOM ELEMENTS
const $ = (id) => document.getElementById(id);

let balance = 0;

const bankAccount = () => {
  const getOwnerName = () => {
    owner = prompt('Enter name'); 
      ownerName =  owner;
      customerName.innerHTML = ownerName;
      return ownerName;
  };
  return getOwnerName;
};

const depositInput= () => {
  const accountCredit = () => {
    do {
      depositAmount = parseInt(prompt('Enter a deposit'));
    } while (Number.isNaN(Number(depositAmount)));
    
    balance += depositAmount;
    customerCredit.innerHTML = depositAmount;
    customerBalance.innerHTML = balance;
    return balance;
  };
  return accountCredit;
};  

const withdrawalInput = () => {
  const accountDebit  = () => {
    do {
      withdrawalAmount = parseFloat(prompt('Enter amount to withdrawal'));
    } while (Number.isNaN(Number(withdrawalAmount)));

    balance -= withdrawalAmount;
    customerDebit.innerHTML = withdrawalAmount;
    customerBalance.innerHTML = balance;
    return balance;
  };
  return accountDebit;
};

window.addEventListener('load', () => {
  ownerName.addEventListener('click', bankAccount());
  depositAmount.addEventListener('click', depositInput());
  withdrawalAmount.addEventListener('click', withdrawalInput());
});
