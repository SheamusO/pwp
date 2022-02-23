$(document).ready(function (){
    $('#contact').validate({
        debug: true,
        errorClass: 'alert alert',
        ErrorLabelContainer: '#output-area',
        errorElement: 'div',
        rules: {
            name:{
                required: true
            },
            email:{
                email: true,
                required: true
            },
            message: {
                required: true,
                maxlength: 2000
            }
        },
        messages: {
            name: {
                required: 'Please fill in your name.'
            },
            email: {
                email: 'Please provide an email.',
                required: 'Email is required.'
            },
            message: {
                required: 'A message is required.',
                maxlength: 'Message is too long.'
            }
        },
        submitHandler: (form) => {
            $('#contact').ajaxSubmit({
                type: 'POST',
                url: $('#contact').attr('action'),
                success: (ajaxOutput) => {
                    $('#output-area').css('display', '')
                    $('#output-area').html(ajaxOutput)

                    if($('.alert-success' >= 1)){
                        $('#contact')[0].reset()
                    }
                }
            })
        }
    })
})
