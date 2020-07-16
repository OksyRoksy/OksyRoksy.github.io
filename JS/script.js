        function checkDistance() {
            if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
                btn.style.display = 'block';
            } else {
                btn.style.display = 'none';
            }
        }

        function scrollToTop() {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        var btn = document.createElement('button');
        btn.id = 'toTop';
        btn.innerText = ' TOP ';
        btn.onclick = scrollToTop;
        window.onscroll = checkDistance;
        document.body.appendChild(btn);

        var modal = document.querySelector('.modal');
        var BtnShowModal = document.querySelector('.head-menu > li:last-child');
        var btnClose = document.getElementById('closeBtn');
        var shadow =  document.querySelector('.shadow');


        BtnShowModal.addEventListener('click', function(){
            modal.style.display = 'block';
            shadow.style.display = 'block';
            document.body.style.overflow = 'hidden';

            
        });
        btnClose.addEventListener('click', function(){
            modal.style.display = 'none';
            shadow.style.display = 'none';
            document.body.style.overflow = 'unset';

        } );

            $(document).ready(function(){
              $('.slider').slick({
                autoplay: false,
                dots: true,
                mobileFirst: true,
              });
            });


           


