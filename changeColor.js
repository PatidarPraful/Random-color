function func()
{
    var colors = ['#00539C' , '#EEA47F' , '#2F3C7E' , '#FBEAEB' , '#101820', '#F96167', '#F9E795', '#CCF381','#3A6B35','#E2D1F9','#317773',' #990011','F7C5CC'];

    var n = Math.floor(Math.random()*(colors.length));

    document.getElementById("target").style.backgroundColor = colors[n];
}