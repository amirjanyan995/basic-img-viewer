$(document).ready(function () {
	generateModal();
    /**
     *  Image modal function
     */
    $(document).on('click','.img-modal', function() {
        // Open img modal
        $('#show-img').css('display','block');

        // Get Image original image source
        var src = this.getAttribute('data-big');

        // If image original source is not set then get list img source
        if(src === null) {
            src = this.src;
        }

        // set modal img source attribute
        $('#img-modal-img').attr({
            src: src
        });

        // Click close button
        $('#img-modal-close').click(function() {
            $('#show-img').css('display','none');
        });

        // Click outside of image
        $('#show-img').click(function(){
            $('#show-img').css('display','none');
        })

        // set Image title if set
        var title = this.getAttribute('data-title');
        if (title) {
            $('#title').text(title);
        }

        // set Image Description if set
        var description = this.getAttribute('data-description');
        if (description) {
            $('#description').text(description);
        }
    });
});

function generateModal(){
	console.log('ready');
}
