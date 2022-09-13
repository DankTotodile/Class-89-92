function send()
{
    word = document.getElementById("qword").value;
    nw = word.toLowerCase();
    c1 = nw.charAt(1);
    p2 = Math.floor(nw.length/2);
    c2 = nw.charAt(p2);
    p3 = nw.length-1;
    c3 = nw.charAt(p3);
    r1 = nw.replace(c1, "_");
    r2 = r1.replace(c2,"_");
    r3 = r2.replace(c3, "_");
    console.log(r3);
    document.getElementById("qword").value = null;
    q = "<h4> Q. "+ r3 +"</h4>";
    a = "<h4> Answer = <input id = 'ua' placeholder = 'Type here'></h4>";
    b = "<button onclick = 'check()' class = 'btn btn-info'>Check</button>";
    final = q+a+b;
    document.getElementById("output").innerHTML = final;
}
var p1n = localStorage.getItem("p1_id");
var p2n = localStorage.getItem("p2_id");
document.getElementById("g1").innerHTML = p1n + " : ";
document.getElementById("g2").innerHTML = p2n + " : ";
var p1s = 0;
var p2s = 0;
document.getElementById("g1score").innerHTML = p1s;
document.getElementById("g2score").innerHTML = p2s;
document.getElementById("qt").innerHTML = p1n;
document.getElementById("at").innerHTML = p2n;

qt1 = 1;
at1 = 2;

function check()
{
    attempt = document.getElementById('ua').value;
    attempt2 = attempt.toLowerCase();

    if (attempt2 == nw)
    {
       if(at1 == 1)
       {
        p1s++;
        document.getElementById('g1score').innerHTML = p1s;
       }
       else 
       {
        p2s++;
        document.getElementById('g2score').innerHTML = p2s;
       }
        
    }
    if (qt1 == 1)
    {
        qt1 = 2;
        document.getElementById('qt').innerHTML = p2n;
    }
    else 
    {
        qt1 = 1
        document.getElementById('qt').innerHTML = p1n;
    }

    if (at1 == 1)
    {
        at1 = 2;
        document.getElementById('at').innerHTML = p2n;
    }
    else 
    {
        at1 = 1
        document.getElementById('at').innerHTML = p1n;
    }
    document.getElementById('output').innerHTML = "";
}
