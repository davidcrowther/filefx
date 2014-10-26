$(document).ready(function(){  

	$('form.form-submit').validate({
	    rules: { 
	      first_name: {
	        minlength: 2,
	        required: true
	      },
	      last_name: {
	        minlength: 2,
	        required: true
	      },
	      email: {
	        required: true,
	        minlength: 2,
	      	email: true
	      }, 
	      service_offer: {
	        minlength: 2,
	        required: true
	      } 
	    },
	    highlight: function(label) {
	        $(label).closest('.form-group').addClass('has-error');
	    },
	    success: function(label) {
	        label
	            .text('OK!').addClass('valid')
	            .closest('.form-group').addClass('has-success');
	    }
	});


});