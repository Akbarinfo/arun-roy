let searchbtn = document.getElementById('id-search');
let removebtn = document.getElementById('id-remove');
let modalbox = document.getElementById('id-modalbox');
let dark = 0;

document.getElementById('id-dark').addEventListener('click', function (){
  document.body.classList.toggle('dark');

  if (dark==0) {
  this.textContent = 'light mode';
  dark++;
}
  else {
    this.textContent = 'dark mode';
     dark = 0;
  }
});


searchbtn.addEventListener('click', function() {
  modalbox.classList.add('show');
});

removebtn.addEventListener('click', function() {
  modalbox.classList.remove('show');
});
