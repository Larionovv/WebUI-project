document.getElementById('saveLogin').onclick = () =>{
  let userLogin = document.getElementById('userNameLogin').value.toString();
  let userPassword = document.getElementById('inputPassword').value.toString();
  localStorage.setItem("userLogin",userLogin);
  localStorage.setItem("userPassword",userPassword);
  document.getElementById('userNameLogin').value = '';
  document.getElementById('inputPassword').value = '';

};

document.getElementById('closeLoginModal').onclick = ()=> {
  document.getElementById('userNameLogin').value = '';
  document.getElementById('inputPassword').value = '';

};

document.getElementById('logOut').onclick = ()=> {
  localStorage.clear();
};
