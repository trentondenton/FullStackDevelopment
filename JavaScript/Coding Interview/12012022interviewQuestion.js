let users = [
  {
    name: 'John',
    subcriptionStart: '2022-12-01',
    subscriptionEnd: null,
    monthlyFee: 100,
  },
  {
    name: 'Jane',
    subcriptionStart: '2022-11-30',
    subscriptionEnd: null,
    monthlyFee: 100,
  },
  {
    name: 'Jack',
    subcriptionStart: '2023-01-01',
    subscriptionEnd: null,
    monthlyFee: 100,
  },
  {
    name: 'Jill',
    subcriptionStart: '2022-12-01',
    subscriptionEnd: '2022-01-01',
    monthlyFee: 100,
  }
];

// Helper Functions
function getLastDayOfPreviousMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 0);
}

function getFirstDayOfNextMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 1);
}

function getDaysInMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}


let lastDayOfPreviousMonth = getLastDayOfPreviousMonth(new Date());
let firstDayOfNextMonth = getFirstDayOfNextMonth(new Date());
let daysInMonth = getDaysInMonth(new Date());

let usersWithSubscription = users.filter(user => {
  if (user.subscriptionEnd === null) {
    return true;
  }
  return user.subscriptionEnd > lastDayOfPreviousMonth && user.subscriptionEnd < firstDayOfNextMonth;
});


let total = 0;

usersWithSubscription.map(user => {
  total += user.monthlyFee
});

console.log(usersWithSubscription);
console.log(total);