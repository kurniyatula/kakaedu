$(function() { 
    $('#sidebarCollapse').on('click', function() {
      $('#sidebar, #content').toggleClass('active');
    });
  });

  $(document).ready(function(){
    $('form input').change(function () {
      $('form p').text(this.files.length + " file(s) selected");
    });
  });

//   document.querySelector('button#buttond-send').onclick = function(){
// 	swal("Good job!", "You clicked the button!", "success")
// };

const btn = document.getElementById('btn');
      btn.addEventListener('click', function() {
        Swal.fire({
                  title: 'Selamat!',
                  text: 'Upload Tugas Berhasil',
                  icon: 'success'
        })
                
      });
