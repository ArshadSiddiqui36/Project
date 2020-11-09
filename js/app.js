// alert("JavaScript is working properly");

/*
				const music = document.querySelector("audio");
				const img = document.querySelector("img");
				const play = document.getElementById("play");
				const next = document.getElementById("next");
				const prev = document.getElementById("prev");
				const title = document.getElementById("title");
				const artist = document.getElementById("artist");
				const album = document.getElementById("album");

				let isPlaying = false;

				let progress = document.getElementById("progress");
				let totalDuration = document.getElementById("duration");
				let current_time = document.getElementById("current_time");
				const progress_div = document.getElementById("progress_div");


				const songs = [
					{
						title : "Odhani - Made in China",
						artist : "Neha Kakkar, Darshan Raval",
						album : "Made in China",
						art : "Odhni",
					},

					{
						title : "Sanedo - Made in China",
						artist : "Mika Singh, Benny Dayal, Nikhita Gandhi",
						album : "Made in China",
						art : "Sanedo",
					},

					{
						title : "Aeroplane - Vibhor Parashar",
						artist : "Vibhor Prashar",
						album : "Album",
						art : "Aeroplane-mr-faisu",
					},

					{
						title : "Khuda Haafiz (The Body)",
						artist : "Arko, Arijit Singh",
						album : "The Body",
						art : "Khuda-haafiz",
					},

					{
						title : "Befikra - Meet Bros",
						artist : "Meet Bross, Aditi Singh Sharma",
						album : "Befikra",
						art : "Befikra",
					},
				];


				//For Play Function
				const playMusic = () => {
					isPlaying = true;
					music.play();
					play.classList.replace("fa-play", "fa-pause");
					img.classList.add("anime");
				};

				//For Pause Function
				const pauseMusic = () => {
					isPlaying = false;
					music.pause();
					play.classList.replace("fa-pause", "fa-play");
					img.classList.remove("anime");
				};

				play.addEventListener('click', () => {
					// if (isPlaying) {
					// 	pauseMusic();
					// }
					// else {
					// 	playMusic();
					// }

					isPlaying ? pauseMusic() : playMusic();
				});


				const loadSong = (songs) => {
					title.textContent = songs.title;
					artist.textContent = songs.artist;
					album.textContent = songs.album;
					img.src = "images/"+songs.art+".jpg";
					music.src = "audio/"+songs.title+".mp3";
				};

				songsIndex = 0;
				// loadSong(songs[2]);
				const nextSong = () => {
					songsIndex = (songsIndex + 1) % songs.length;
					loadSong(songs[songsIndex]);
					// playMusic();

					if (isPlaying == true) {
					 	playMusic();
					 }
					 else
					 {
					 	pauseMusic();
					 }
				};

				const prevSong = () => {
					songsIndex = (songsIndex - 1 + songs.length) % songs.length;
					loadSong(songs[songsIndex]);
					// playMusic();

					 if (isPlaying == true) {
					 	playMusic();
					 }
					 else
					 {
					 	pauseMusic();
					 }
					
				};



				// Progress Bar JS Work....................................

				music.addEventListener('timeupdate', (event) => {
					// console.log(event);
					const { currentTime, duration } = event.srcElement;
					// console.log(currentTime, duration);

					let progress_time = (currentTime / duration) * 100;
					// console.log(progress_time);
					progress.style.width = `${progress_time}%`;


					// Music Duration Update...............................
					// console.log(duration);
					let min_duration = Math.floor(duration / 60);
					let sec_duration = Math.floor(duration % 60);
					// console.log(min_duration);
					// console.log(sec_duration);

					let total_duration = `${min_duration}:${sec_duration}`;
					if(duration) {
						totalDuration.textContent = `${total_duration}`;
					}

					// Current Music Duration Update........................
					let min_currentTime = Math.floor(currentTime / 60);
					let sec_currentTime = Math.floor(currentTime % 60);

					if(sec_currentTime < 10) {
						sec_currentTime = `0${sec_currentTime}`;
					}

					let total_currentTime = `${min_currentTime}:${sec_currentTime}`;
						current_time.textContent = `${total_currentTime}`;
				});


				// Progress onClick functionality
				progress_div.addEventListener('click', (event) => {
					// console.log(event);
					const { duration } = music;
					// const duration = music.duration;
					let move_progress = (event.offsetX / event.srcElement.clientWidth) * duration;
					// console.log(duration);
					// console.log(move_progress);

					music.currentTime = move_progress;
				})

				// If music end then call nextSong function
				music.addEventListener("ended", nextSong);


				next.addEventListener('click', nextSong);
				prev.addEventListener('click', prevSong);






				var volbtn = document.getElementById("volbtn");

				var audio = document.getElementById("aud");

				var valume_value = document.getElementById("volume_value");

				// Volume Controler ...................................

				function volume(val) {
					var av = audio.volume = val / 100;
					// console.log(av);

					valume_value.innerHTML = val;


					if(av == 0.0) {
						// console.log(av);
						// console.log("Silent");
						// volbtn.classList.toggle("volume-mute");
						volbtn.innerHTML = "&#xf026;";
					}
					else if(av <= 0.5){
						// console.log("Medium");
						// volbtn.classList.toggle("volume-down");
						volbtn.innerHTML = "&#xf027;";
					}
					else{
						// 1.0
						// console.log("High");
						// volbtn.classList.toggle("volume-up");
						volbtn.innerHTML = "&#xf028;";
					}
				}

				// Mute & Unmute ......................................

				function muteUnmute() {

					// volbtn.classList.toggle("volume-mute");

					if(audio.muted == false) {
						// console.log("Mute");
						audio.muted = true;
						volbtn.innerHTML = "&#xf026;";
					}
					else {
						// console.log("Unmute");
						audio.muted = false;
						volbtn.innerHTML = "&#xf028;";
					}
					
				}





				$(document).ready(function(){
				  // $("a").click(function(){
				  //   // alert("Checked.");
				  //   $("#hamburger-button").attr("checked","true");

				  // });


				  $(function () {
					  "use strict";
					  
					  function uncheckBox() {
					    var isChecked = $("#hamburger-button").prop("checked");
					    if (isChecked) {
					      $("#hamburger-button").prop("checked", false);
					    }
					  }
					  
					  $("a").on("click", function () {
					    uncheckBox();
					  });
					  
					  $("#hamburger-button").on("click", function (e) {
					    e.stopPropagation();
					  });
					});





				 $(function() {
				 	"use strict";

				      $('nav ul li a, button').on('click', function() {
				            $("a").parent().find('a.active').removeClass('active');
				            $(this).addClass( 'active' );
				      });
					});

				});



// .............................................................................................


				var app = angular.module("myApp", ["ngRoute"]);

				app.config(function($routeProvider) {
				    $routeProvider
				    .when("/", {
				        title: 'home',
			                    templateUrl: "pages/home.html"
				        		// template : "<h1>Home Page</h1>"
				    })
				    .when("/about", {
				    	title: 'about',
			                    templateUrl: "pages/about.html"
				        		// template : "<h1>About Page</h1>"
				    })
				    .when('/portfolio', {
			                    title: 'portfolio',
			                    templateUrl: "pages/portfolio.html"
			                    // template : "<h1>Portfolio Page</h1>"
			        })
				    .when("/contact", {
				    			title: 'contact',
			                    templateUrl: "pages/contact.html"
				        		// template : "<h1>Contact Page</h1>"
				    })
				    .when("/sign_up", {
				    			title: 'sign_up',
			                    templateUrl: 'pages/sign_up.html'
				        		// template : "<h1>Sign Up Page</h1>"
				    })
				    .when("/log_in", {
				    			title: 'sign_in',
			                    templateUrl: 'pages/sign_in.html'
				        		// template : "<h1>log In Page</h1>"
				    })
			        .otherwise({
			                    templateUrl: "pages/notfound.html"
			                    // redirectTo: 'pages/notfound.html'
			                    // template : "<h1>Nothing</h1><p>Nothing has been selected</p>"
			        });
			                    
				});



				// app.controller('myCtrl', function($scope) {
				//     $scope.showMe = false;
				//     $scope.myFunc = function() {
				//         $scope.showMe = !$scope.showMe;
				//     }
				// });



				app.controller("myCtrl", function($scope) {

				  $scope.songsList = [
				    "01 Befikra",
				    "02 Odhani - Made in China",
				    "03 Sanedo - Made in China",
				    "04 Aeroplane - Vibhor Parashar",
				    "05 Khuda Haafiz (The Body)",
				    "06 Chehre",
				    "07 Ek Ladki Ko Dekha To Aisa Laga",
				    "08 Kesari",
				    "09 Luka Chuppi",
				    "10 Kalank",
				    "11 Gallan Teriya",
				    "12 I Need Ya",
				    "13 Tere Naal",
				    "14 Peg Giney",
				    "15 Total Dhamal",
				    "16 Leja Re",
				    "17 Let Me Love You",
				    "18 Fergie",
				    "19 Orange Carmel",
				    "20 Do You Know",
				  ]

				});



				// app.controller('myCtrl', function($scope, $http) {
				//   $http.get("js/json.json")
				//   .then(function(response) {
				//     $scope.songsList = response.data;
				//   });