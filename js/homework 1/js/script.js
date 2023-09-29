let name = prompt(`enter your name `);

if (name != null) {
  let age = +prompt(`enter your age`);
  if (age < 18) {
    alert(`You are not allowed to visit this website`);
  } else if ((age >= 18, age <= 22)) {
    if (confirm(`Are you sure to continue?`)) {
      alert(`Welcome ${name}`);
    } else {
      alert(`You are not allowed to visit this website`);
    }
  } else if (age > 22) {
    alert(`Welcome ${name}`);
  }
}
