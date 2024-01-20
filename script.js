let isstop = true;
let s = 0;
let min = 0;
let hr = 0;
function start()
{
    if(isstop == true){
        isstop = false;
        timer();

    }
}
function timer ()
{
    if(isstop == false){
        s = parseInt(s);
        min = parseInt(min);
        hr = parseInt(hr);
        s++;
        if (s==60)
        {
            s = 0;
            min++;
        }
        if(min ==60)
        {
            min = 0;
            hr++;
        }

        if(s<10)
        {
            s = "0" + s;
        }
        if(min<10)
        {
            min = "0" + min;
        }
        if(hr<10)
        {
            hr = "0" + hr;
        }

        stopwatch.innerHTML = hr + " :" + min + " :" + s;
        setTimeout("timer()",1000);
    }
}
function stop()
{
    isstop = true;
}
function reset()
{
    isstop = true;
    s = 0;
    min = 0;
    hr = 0;
    stopwatch.innerHTML = "00 : 00 : 00"
}
