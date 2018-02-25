$(document).ready(function(){
		$(".oculto").hide(); 
		$('.product-1').on('click','.expandir1',function(event){
				event.preventDefault();
				var nodo = $(this).attr("href");
				if ($(nodo).is(":visible")){
				   $(nodo).fadeOut(1000);
				   return false;
				}else{
				$(nodo).fadeIn(1000);
				}
				
		});
		$('.product-2').on('click','.expandir2',function(event){
			event.preventDefault();
				var nodo = $(this).attr("href");
				if ($(nodo).is(":visible")){
				   $(nodo).fadeOut(1000);
				   return false;
				}else{
				$(nodo).fadeIn(1000);
				}
		});
		$('.product-3').on('click','.expandir3',function(event){
			event.preventDefault();
				var nodo = $(this).attr("href");
				if ($(nodo).is(":visible")){
				   $(nodo).fadeOut(1000);
				   return false;
				}else{
				$(nodo).fadeIn(1000);
				}
		});
	});
      $(function () {
        $('[data-toggle="tooltip"]').tooltip()
        $('.carousel').carousel()
      })
	  
		$('#thumbs').delegate('img','click', function(){
		$('#largeImage').attr('src',$(this).attr('src').replace('thumb','large'));
		$('#description').html($(this).attr('alt'));});
		
		$('#thumbs2').delegate('img','click', function(){
		$('#largeImage2').attr('src',$(this).attr('src').replace('thumb','large'));
		$('#description2').html($(this).attr('alt'));});
		
		$('#thumbs3').delegate('img','click', function(){
		$('#largeImage3').attr('src',$(this).attr('src').replace('thumb','large'));
		$('#description3').html($(this).attr('alt'));});
		
	$(document).ready(function(){
	var cantidad1,cantidad2,cantidad3,cantidadtotal;
	cantidad1=0;
	cantidad2=0;
	cantidad3=0;
		$('.producto').on('keyup mouseup','.cantidad',function(){
			var precio=+$(this).closest('.producto').data('precio');
			var cantidad = +$(this).val();
			cantidad1=parseFloat(cantidad*precio);
			
			$('#total1').text((precio*cantidad).toFixed(2));
			$('.cantidadtotal1').text(cantidad);
			cantidadtotal=cantidad3+cantidad2+cantidad1;
			$('#totalfinal').text(parseFloat(cantidadtotal.toFixed(2)));
		});
		$('.producto2').on('keyup mouseup','.cantidad2',function(){
			var precio=+$(this).closest('.producto2').data('precio');
			var cantidad = +$(this).val();
			cantidad2=parseFloat(cantidad*precio);
			$('#total2').text((precio*cantidad).toFixed(2));
			$('.cantidadtotal2').text(cantidad);
			cantidadtotal=cantidad3+cantidad2+cantidad1;
			$('#totalfinal').text(parseFloat(cantidadtotal.toFixed(2)));		
		});
		$('.producto3').on('keyup mouseup','.cantidad3',function(){
			var precio=+$(this).closest('.producto3').data('precio');
			var cantidad = +$(this).val();
			cantidad3=parseFloat(cantidad*precio);
			$('#total3').text((precio*cantidad).toFixed(2));
			$('.cantidadtotal3').text(cantidad);
			cantidadtotal=cantidad3+cantidad2+cantidad1;
			$('#totalfinal').text(parseFloat(cantidadtotal.toFixed(2)));
		});
	});