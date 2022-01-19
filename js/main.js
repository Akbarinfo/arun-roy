let searchbtn = document.getElementById('id-search');
let removebtn = document.getElementById('id-remove');
let modalbox = document.getElementById('id-modalbox');

searchbtn.addEventListener('click', function() {
  modalbox.classList.add('show');
});

removebtn.addEventListener('click', function() {
  modalbox.classList.remove('show');
});


// dark light

document.getElementById('id-dark').addEventListener('click', function()
{
  document.body.classList.toggle('dark')
} )

document.getElementById('id-light').addEventListener('click', function()
{
  document.body.classList.remove('dark')
} )