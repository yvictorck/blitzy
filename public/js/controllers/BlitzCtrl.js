angular.module('BlitzCtrl', []).controller('BlitzController', function($scope,$http, Blitz) {



		$scope.kyung_arr = [];
		$scope.mina_arr = [];
		$scope.jess_arr = [];
		$scope.vic_arr = [];
		$scope.tagline = 'asdf';

   $scope.test = {};
   $scope.test.t1 = [];
   $scope.test.t2 = [];

		var ka = [];
		var ma = [];
		var ja =[];
		var va = [];

		var getarr  = function(arr)
		{
			var a = [];
	        for (var i = 0; i < arr.length; ++i) {
	            a.push(arr[i]);
	        }		
	        return a;
		}

		$scope.getkyung = function () {
		        
		        return getarr(ka);
		    };
		$scope.getmina = function () {
		        
		        return getarr(ma);
		    };
		$scope.getjess = function () {
		        
		        return getarr(ja);
		    };
		$scope.getvic = function () {
		        
		        return getarr(va);
		    };

			Blitz.get().success(function(data) {




				for(var i=0;i<data.length;i++)
				{
					var kyung_total = 0;
					var mina_total = 0;
					var jess_total = 0;
					var vic_total = 0;
					for(var j=0;j<data[i].kyung.length;j++) kyung_total+=data[i].kyung[j];
					for(var j=0;j<data[i].mina.length;j++) mina_total+=data[i].mina[j];
					for(var j=0;j<data[i].jess.length;j++) jess_total+=data[i].jess[j];
					for(var j=0;j<data[i].vic.length;j++) vic_total+=data[i].vic[j];
					data[i].kyung_total=kyung_total;
					data[i].mina_total=mina_total;
					data[i].jess_total=jess_total;
					data[i].vic_total=vic_total;


				}

				$scope.blitzposts = data;



			});

		$scope.change_one_round_blitz = function()
		{
			var round, kyung_delta, mina_delta, jess_delta, vic_delta;

			round = parseInt($scope.which_round)-1;




			if($scope.kyung_delta==undefined) kyung_delta = ka[round];
			else kyung_delta = parseInt($scope.kyung_change_one_round);

			if($scope.mina_delta==undefined) mina_delta = ma[round];
			else mina_delta = parseInt($scope.jess_change_one_round);

			if($scope.jess_delta==undefined) jess_delta = ja[round];
			else jess_delta = parseInt($scope.mina_change_one_round);

			if($scope.vic_delta==undefined) vic_delta = va[round]; 
			else vic_delta = parseInt($scope.vic_change_one_round);

		    ka.splice(round,1);
		    ma.splice(round,1);
		    ja.splice(round,1);
		    va.splice(round,1);

		    ka.splice(round, 0, kyung_delta);
		    ma.splice(round, 0, mina_delta);
		    ja.splice(round, 0, jess_delta);
		    va.splice(round, 0, vic_delta);
		    
		    $scope.kyung_change_one_round ="";
		    $scope.mina_change_one_round ="";
		    $scope.jess_change_one_round ="";
		    $scope.vic_change_one_round ="";
		    $scope.which_round ="";

					var kyung_total = 0;
					var mina_total = 0;
					var jess_total = 0;
					var vic_total = 0;
					for(var j=0;j<ka.length;j++) 

					{

						kyung_total+=parseInt(ka[j]);
						mina_total+=parseInt(ma[j]);
						jess_total+=parseInt(ja[j]);
						vic_total+=parseInt(va[j]);




					}
					// for(var j=0;j<$scope.mina_arr.length;j++) mina_total+=parseInt($scope.mina_arr[j]);
					// for(var j=0;j<$scope.jess_arr.length;j++) jess_total+=parseInt($scope.jess_arr[j]);
					// for(var j=0;j<$scope.vic_arr.length;j++) vic_total+=parseInt($scope.vic_arr[j]);

						var current =  {
						kyung:ka,
						mina:ma,
						jess:ja,
						vic:va,
						kyung_total:kyung_total,
						mina_total:mina_total,
						jess_total:jess_total,
						vic_total:vic_total
					};

					    $scope.currentblitz = current;



		}
		$scope.enter_one_round_blitz = function(){
					$scope.test.t1.push('1');
					$scope.test.t2.push('1');
					var newBlitz = {
						"kyung":parseInt($scope.kyung_one_round),
						"mina":parseInt($scope.mina_one_round),
						"jess":parseInt($scope.jess_one_round),
						"vic":parseInt($scope.vic_one_round)
					};


						// $scope.kyung_arr.push(newBlitz.kyung);
						// $scope.mina_arr.push(newBlitz.mina);
						// $scope.jess_arr.push(newBlitz.jess);
						// $scope.vic_arr.push(newBlitz.vic);
						ka.push(parseInt($scope.kyung_one_round));
						ma.push(parseInt($scope.mina_one_round));
						ja.push(parseInt($scope.jess_one_round));
						va.push(parseInt($scope.vic_one_round));


					var kyung_total = 0;
					var mina_total = 0;
					var jess_total = 0;
					var vic_total = 0;
					for(var j=0;j<ka.length;j++) 

					{

						kyung_total+=parseInt(ka[j]);
						mina_total+=parseInt(ma[j]);
						jess_total+=parseInt(ja[j]);
						vic_total+=parseInt(va[j]);




					}
					// for(var j=0;j<$scope.mina_arr.length;j++) mina_total+=parseInt($scope.mina_arr[j]);
					// for(var j=0;j<$scope.jess_arr.length;j++) jess_total+=parseInt($scope.jess_arr[j]);
					// for(var j=0;j<$scope.vic_arr.length;j++) vic_total+=parseInt($scope.vic_arr[j]);

						var current =  {
						kyung:ka,
						mina:ma,
						jess:ja,
						vic:va,
						kyung_total:kyung_total,
						mina_total:mina_total,
						jess_total:jess_total,
						vic_total:vic_total
					};

					    $scope.currentblitz = current;


					  // $scope.kyung_arr.push($scope.kyung_one_round);
					  // $scope.mina_arr.push($scope.mina_one_round);
					  // $scope.jess_arr.push($scope.jess_one_round);
					  // $scope.vic_arr.push($scope.vic_one_round);

					  // $scope.kyung_total = kyung_total;
					  // $scope.mina_total = mina_total;
					  // $scope.jess_total = jess_total;
					  // $scope.vic_total = vic_total;
					  $scope.tagline = current;
						$scope.kyung_one_round = "";
						$scope.mina_one_round = "";
						$scope.jess_one_round ="";
						$scope.vic_one_round = "";


$scope.$digest();


		};

		// CREATE ==================================================================
		// when submitting the add form, send the text to the node API
		$scope.createBlitz = function() {

	    var time = new Date();
	    var dd_month = (1+time.getMonth()).toString();
	    var dd_date = (time.getDate()).toString();

	    if(dd_month.length < 2) dd_month = '0'+dd_month;
	    if(dd_date.length < 2) dd_date = '0'+dd_date;

	    var gametime = dd_month+'-'+dd_date+'-'+time.getFullYear()
	                        +'-'+time.getHours()+'-'+time.getMinutes();


	    if($scope.gametime!=null)gametime+='-'+$scope.gametime;


			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			// people can't just hold enter to keep adding the same to-do anymore

				var newBlitz = {"gametime":gametime,
						"kyung":ka,
						"mina":ma,
						"jess":ja,
						"vic":va};


				// // call the create function from our service (returns a promise object)
				Blitz.create(newBlitz)

					// if successful creation, call our get function to get all the new todos
					.success(function(data) {
					 //$scope.tagline = newBlitz;


					var kyung_total = 0;
					var mina_total = 0;
					var jess_total = 0;
					var vic_total = 0;
					for(var j=0;j<newBlitz.kyung.length;j++) kyung_total+=parseInt(newBlitz.kyung[j]);
					for(var j=0;j<newBlitz.mina.length;j++) mina_total+=parseInt(newBlitz.mina[j]);
					for(var j=0;j<newBlitz.jess.length;j++) jess_total+=parseInt(newBlitz.jess[j]);
					for(var j=0;j<newBlitz.vic.length;j++) vic_total+=parseInt(newBlitz.vic[j]);
					newBlitz.kyung_total=kyung_total;
					newBlitz.mina_total=mina_total;
					newBlitz.jess_total=jess_total;
					newBlitz.vic_total=vic_total;


					  $scope.blitzposts.push({
					    gametime:gametime,
						kyung:ka,
						mina:ma,
						jess:ja,
						vic:va,
						kyung_total:kyung_total,
						mina_total:mina_total,
						jess_total:jess_total,
						vic_total:vic_total
					  });
					ka = [];
					ma = [];
					ja = [];
					va = [];
					$scope.currentblitz = "";
		$scope.kyung_arr = [];
		$scope.mina_arr = [];
		$scope.jess_arr = [];
		$scope.vic_arr = [];

					});

		};



});