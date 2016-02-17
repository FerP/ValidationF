/**
	* validationF - jQuery plugin para validationr forms.
	* Copyright (c) 2016, Fernando Peralta Aramendia.
	*
	* Licensed under MIT license:
	* http://www.opensource.org/licenses/mit-license.php
	*
	*
	* @requires jQuery v1.9 or above
	* @version 1.0.0
	* @cat Plugins/Form validation
	* @author Fernando Peralta Aramendia (fpearam@gmail.com)
	* @see https://github.com/...
	*/

(function($){
    $.fn.validationF = function () {
     
        // We store in $form the object that we go on to the function validationF ().
		// In index.html in the call validationF ('*form') we happen go the id form that is the form
        var $form = this;
 
        // Only we consider input of type text and password
        var $input = $form.find('input:text, input:password');
     
	 //The regular expressions to validation the information we obtain them of several sources between them: 
	 //http://www.w3schools.com/js/js_regexp.asp    
	 //http://web.ontuts.com/snippets/10-expresiones-regulares-imprescindibles-en-desarrollo-web/
	 
    var filtros = {
    texto : {
        regex : /^[A-Za-z]{2,}$/,
        error : 'Minimum two characters and alone letters'
    },
    password : {
        regex : /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
        error : 'Length of eight characters and at least a number, a minuscule letter and a capital letter'
    },
    email : {
        regex : /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/,
        error : 'You must write an e-mail validationted (user@gmail.com)'
    },
    phone : {
        regex : /^\d{3}-\d{3}-\d{3}$/,
        error : 'You must write a correct telephone (999-999-999)'
    },
	number :{
		regex : /^([0-9])+$/,
		error : 'You must write a number'
	},
	date : {
		regex : /^(\d{1,2})-(\d{1,2})-(\d{4})$/,
		error : 'Date format: dd-mm-aaaa'
	}
};

var validation = function (clase, valor) {
     
    // To initialize variables
    var isValid = true;
    var    error = '';
         
    // If the field is empty and class is required

    if (!valor && /required/.test(clase)) {
        isValid = false;
         
    // If the field is not empty    
    } else {
 
        // We cross all the filters that are written in class
        for (var f in filtros) {
 
            // We Believe a regular expression with the filter located to check the information of the field
            var regex = new RegExp(f);
 
            // If the filter coincides with the class we check the value
            if (regex.test(clase)) {
 
                //If the value does not coincide with the regular expression of the current filter, the value is not valid and we store
				//the message error in the field error
                if (valor && !filtros[f].regex.test(valor)) {
                    error = filtros[f].error;
                    isValid = false;
                }
                // We end when the regular expression of the filter is correct
                break;
            }
        }
    }
     
    // We return the results of the validation
    return {
        isValid : isValid,
        error : error
    }
};

var muestraError = function($input) {
    // To initialize variables
    var clase = $input.attr('class');
    var valor = $input.val();
 
        // Called the function validationted and he returns the values in variable test
    var test = validation(clase, valor);
 
        // We believe a label span for print screen the error
    var $error = $('<span class="error">' + test.error + '</span>');
          
    // Delete error referenced by the input that has class invalid
    $input.removeClass('notvalid').siblings('.error').remove();
     
    // If the field is incorrect add the class invalid
    if (!test.isValid) {
        $input.addClass('notvalid');
		$error.add($error).insertAfter($input);
        // We add the error
        $error.insertAfter($input);
    } 
};

//We cross every input that is obligatory with the class .required and we show the error in case it is
$input.each(function() {
    if ($(this).is('.required')) {
        muestraError($(this));
    }
});
 
// It checks if there is a error whenever we write and  shows it across the class icon
$input.keyup(function() {
    muestraError($(this));
});
 
// Before sending the data we check that all the inputs are correct
$form.submit(function(e) {
    if ($form.find('input.notvalid').length) {
        
		// If there is some invalid input we anticipate that the form  send data with the preventDefault and we send an alert
		// warning that the form is not valid
		e.preventDefault();
        alert('The form is not valid');
    }
});
         
        return this;
    };    
})(jQuery);