function myfunc(event)
{
    event.preventDefault();

    var name = document.getElementById("user_name").value;
    var color = document.getElementById("color").value;
    var animal = document.getElementById("animal").value;
    var place = document.getElementById("place").value;
    var sweet = document.getElementById("sweet").value;
    var weather = document.getElementById("weather").value;
    var month = document.getElementById("month").value;
    var digit = document.getElementById("digit").value;
    var number = document.getElementById("number").value;
    var fav_song = document.getElementById("fav_song").value;
    var current_fav_song = document.getElementById("current_fav_song").value;
    var friend = document.getElementById("friend").value;
    var person = document.getElementById("person").value;
    var gender = document.getElementById("gender").value;
    var ride = document.getElementById("ride").value;
    var bike = document.getElementById("bike").value;
    var car = document.getElementById("car").value;
    var visit_place = document.getElementById("visit_place").value;
    var dream = document.getElementById("dream").value;
    

    localStorage.setItem('full_name',user_name);
    localStorage.setItem('fav_color',color);
    localStorage.setItem('fav_animal',animal);
    localStorage.setItem('fav_place',place);
    localStorage.setItem('fav_sweet',sweet);
    localStorage.setItem('fav_weather',weather);
    localStorage.setItem('fav_month',month);
    localStorage.setItem('fav_digit',digit);
    localStorage.setItem('fav_number',number);
    localStorage.setItem('all_time_fav_song',fav_song);
    localStorage.setItem('current_fav_song',current_fav_song);
    localStorage.setItem('fav_friend',friend);
    localStorage.setItem('fav_personality',person);
    localStorage.setItem('gender_attraction_habits',gender);
    localStorage.setItem('animal_ride_you_want',ride);
    localStorage.setItem('fav_bike',bike);
    localStorage.setItem('fav_car',car);
    localStorage.setItem('fav_place_to_visit',visit_place);
    localStorage.setItem('dream_to_become',dream);
    
   

}