const accordion = (triggers) => {
    const btns = document.querySelectorAll(triggers);
        //   content = document.querySelectorAll(items);
                
    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.toggle('active-style');
            this.nextElementSibling.classList.toggle('active-content');

            if (this.classList.contains('active-style')) {
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
            } else {
                this.nextElementSibling.style.maxHeight = '0px';
            }

        });
    })
    

    // content.forEach(item => {
    //     item.classList.add('animated', 'fadeInDown');
    // });

    // headers.forEach(item => {
    //     item.addEventListener('click', function() {
    //         if (!this.classList.contains('active')) {
    //             headers.forEach(item => {
    //                 item.classList.remove('active', 'active-style');
    //             });
    //             this.classList.add('active', 'active-style');
    //         }
    //     });
    // });
};

export default accordion;