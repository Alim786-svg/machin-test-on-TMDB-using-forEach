var cl=console.log;

let IMG_BASE_URL=' https://image.tmdb.org/t/p/w500/';

let info=document.getElementById("info");
cl(info);

let result="";

var setRatingBg=(rating)=>{
	if(rating > 7.5){
		return 'bg-success '
		
	} else if(rating<=7.5 && rating > 5){
		return 'bg-warning'
		
	}else{
		return' bg-danger'
		
	}
	
	
	
}



movieArray.forEach((movie)=>{
	
	result+=`
	
	<div class="col-md-4 mb-4">
						<div class="card">
							<figure class="moviecard">
								<img src=" https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="" title="">
							<figcaption>
							
						
								<div class="movieTitle">
									<div class="row">
										<div class="col-10">
											<h4>${movie.title} </h4>
										</div>
										<div class="col-2 align-self-center">
											<span class="${setRatingBg(movie.vote_average)} p-2 rating">${movie.vote_average} </span>
										</div>
									</div>
								</div>
								<div class="movieoverview">
									<h3>${movie.title} </h3>
									<em>overview</em>
									<p>${movie.overview} </p>
								</div>
							</figcaption>
							</figure>
						</div>
					</div>
				</div>
			</div>
	
	
	
	`
	
	
})

info.innerHTML=result;