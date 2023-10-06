var inputValue = document.querySelector('.search-input')
$('.search-btn').on('click', ()=>{
    $('#film').css({
        display:'flex'
    })
    var film = inputValue.value
    inputValue.value = ''
    $.ajax(`http://www.omdbapi.com/?apikey=164ceb3c&t=${film}`).then(function(res){
    $('.filmImg').attr('src',res.Poster);
    $('.imdb').text(res.imdbRating);
    $('.title').text(res.Title);
    $('.year').text(res.Year);
    $('.content').text(res.Plot);
    $('.actors').text(res.Actors);
    if(res.Director == "N/A"){
        $('.director-fluid').css({
            display:"none"
        })
    }
    else{
        $('.director').text(res.Director);
    }
    $('.released').text(res.Released);
    $('.country').text(res.Country);
    $('.genre').text(res.Genre);
    if(res.Type == "series"){
        $('.runtimeAndSeasons').css({
            display:"flex"
        })
        $('.runtime-fluid').css({
            display:"none"
        })
    }
    else{
        $('.runtime-fluid').css({
            display:"block"
        })
        $('.runtimeAndSeasons').css({
            display:"none"
        })
    }
    if(res.Awards == "N/A"){
        $('.awards-fluid').css({
            display:"none"
        })
    }
    else{
        $('.awards').text(res.Awards);
    }
    $('.runtime').text(res.Runtime)
    $('.totalSeasons').text(res.totalSeasons)
    console.log(res)
    })
})
