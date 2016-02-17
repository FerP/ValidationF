 FerP.github.io

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
```html
<div class="row card-panel">
<div class="col s6 ">
<form id="form">
<p><label>Name <span>*</span>:</label><input type="text" class="required texto"/></p>
<p><label>Password <span>*</span>:</label><input type="password" class="required password"/></p>
	<p><label>Date:</label><input type="text" class="date" placeholder="dd-mm-yyyy"/></p>
	<p><label>Year:</label><input type="text" class="number"/></p>
    <p><label>E-Mail:</label><input type="text" class="email"/></p>
    <p><label>Phone:</label><input type="text" class="phone" placeholder="999-999-999"/></p>
    <p><label>&nbsp;</label><button type="submit">Submit</button></p>
</form>	
	</div>
</div>
```html	
Second: link the estilos.css stylesheet
```html
</div>

Third: do not forget to add jQuery (1.5+) in the way that you prefer. For instance:
```html
</div>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
  
Fourth: add the ValidationF file at the bottom of the body:
```html
  <script src="js/validationF.js"></script>`
  
Fifth: call the function
```html
   $('#form').validationF();
