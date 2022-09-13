function next_page()
{
    p1n = document.getElementById("player1_name").value;
    p2n = document.getElementById("player2_name").value;
    localStorage.setItem("p1_id", p1n);
    localStorage.setItem("p2_id", p2n);
    window.location = "game_page.html";
}
