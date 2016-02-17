# FerP.github.io

# validationF

validationF is a plugin to use together with jQuery that allows to validate a form

See the demo at http://FerP.github.io/

This jQuery plugin allows:  

*  yourself to validate a form
*  yourself to validate a email
*  yourself to validate a date
*  yourself to validate a number
*  yourself to validate a text
*  yourself to validate a password
*  yourself to validate a phone

Four steps are needed to include it into your project:

First: Add the following markup

<div class="row card-panel">
		<div class="col s6 ">
&ltform id="form"&gt
    &ltp&gt&ltlabel&gtName &ltspan&gt*&lt/span&gt:&lt/label&gt&ltinput type="text" class="required texto"/&gt&lt/p&gt
    &ltp&gt&ltlabel&gtPassword &ltspan&gt*&lt/span&gt:&lt/label&gt&ltinput type="password" class="required password"/&gt&lt/p&gt
	&ltp&gt&ltlabel&gtDate:&lt/label&gt&ltinput type="text" class="date" placeholder="dd-mm-yyyy"/&gt&lt/p&gt
	&ltp&gt&ltlabel&gtYear:&lt/label&gt&ltinput type="text" class="number"/&gt&lt/p&gt
    &ltp&gt&ltlabel&gtE-Mail:&lt/label&gt&ltinput type="text" class="email"/&gt&lt/p&gt
    &ltp&gt&ltlabel&gtPhone:&lt/label&gt&ltinput type="text" class="phone" placeholder="999-999-999"/&gt&lt/p&gt
    &ltp&gt&ltlabel&gt&nbsp;&lt/label&gt&ltbutton type="submit"&gtSubmit&lt/button&gt&lt/p&gt
&lt/form&gt
</form>	
	</div>
	</div>
	
Second: link the estilos.css stylesheet


Third: do not forget to add jQuery (1.5+) in the way that you prefer. For instance:

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
  
Fourth: add the ValidationF file at the bottom of the body:

  <script src="js/validationF.js"></script>`
  
Fifth: call the function

   $('#form').validationF();


## Browser support

The project is tested in Chrome and Firefox. It should work in the current stable releases of Chrome, Firefox, Safari as well as IE8 and up.

## Dependencies

jQuery  v1.9 o superior.

## Documentation
URL gitHub

## License

MIT licensed
