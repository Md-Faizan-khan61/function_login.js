const loginDetails = [
  { email: "faizan@pw",
   password: "F61926pw" },
  {
    email: "khan@pw",
    password: "K12445pw",
  },
  {
    email: "nemat@pw",
    password: "11xypw",
  },
  {
    email:"faizan@pw",
    password:`santa`
  }
];

function login_page(userEmail, userPassword) {
  //Condition 1 Email And Password Both Are match
  const conditionmatch = loginDetails.find( 
    (u)=> u.email === userEmail && u.password === userPassword
  );

  //Condition 2 Email matched but Password doesn't match
  const conditionNotmatchWithPassword = loginDetails.find( 
    (u) =>u.email === userEmail && u.password !== userPassword
  );

  if (conditionmatch) {
    return "Login Successfull";
  } else if (conditionNotmatchWithPassword) {
    return "Password Not match";
  } else {
    return "login failed";
  }
}

console.log(login_page("faizan@pw", "F61926pw"));
console.log(login_page("khan@pw", "S125pw"));
console.log(login_page("nematt@pw", "S125pw"));
console.log(login_page("faizan@pw",`santa`));
