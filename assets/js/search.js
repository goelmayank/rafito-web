
			var cuisine_list = [];
			var cuisine_num = 0
		    
		    $(".filter-cuisine select").change(function() {
		    	var text = $(".filter-cuisine select option:selected").text();	
		    	
		    	var alreadySelected = 0;

		    	if(text != "Select a cuisine")
			    	for(var i=0;i<cuisine_list.length;i++) {
			    		if(text == cuisine_list[i] ) {
			    			alreadySelected = 1;
			    			break;
			    		}
			    	}
			    else {
			    	alreadySelected = 1;
			    }

		    	if(alreadySelected == 0) {
		    		cuisine_list[cuisine_num++] = text;
			    	var ele = '<li><i class="fa fa-times"></i>&nbsp;&nbsp;'+text+'</li>'
			    	$(".filter-cuisine-selected ul").append(ele);
			    	$(".filter-cuisine-selected ul li i").click(function(){
			    		var text = $(this).parent().text().trim();
			    		//console.log($(this).parent().text());
			    		//console.log("text  \n"+text);
			    		for(var i=0;i<cuisine_list.length;i++) {
			    			//console.log(cuisine_list[i])
			    			//console.log(text == cuisine_list[i]);
				    		if(text == cuisine_list[i]) {
				    			console.log("getting in");
				    			cuisine_list[i] = "";
				    			break;
				    		}
				    	}
			    		$(this).parent().remove();
			    	}) ;
			    }
		    });

		    $('#ex1').slider({
				formatter: function(value) {
					$(".filter-proximity .range").html('Range: <b>' + value + ' miles</b>')
					return 'Range: ' + value + ' miles';
				}
			});
