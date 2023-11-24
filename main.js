const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const d = new Date();
const current_Day = days[d.getDay()];


try {
    document.querySelector("#current_date").innerText = d.toDateString('en-US');
} catch (error) {
    console.log("its a error but its fine!")
} finally {
    document.querySelector("#current_date").style.color = "green"
    document.querySelector("#current_date").style.display = "block"
    console.log(current_Day)
    try {
        if (current_Day == "Monday") {
            document.querySelector("#MondayDiv1").style.fontWeight = "bold";
            document.querySelector("#MondayDiv2").style.fontWeight = "bold";
        } else if (current_Day == "Tuesday") {
            document.querySelector("#TuesdayDiv1").style.fontWeight = "bold";
            document.querySelector("#TuesdayDiv2").style.fontWeight = "bold";
        } else if (current_Day == "Wednesday") {
            document.querySelector("#WednesdayDiv1").style.fontWeight = "bold";
            document.querySelector("#WednesdayDiv2").style.fontWeight = "bold";
        } else if (current_Day == "Thursday") {
            document.querySelector("#ThursdayDiv1").style.fontWeight = "bold";
            document.querySelector("#ThursdayDiv2").style.fontWeight = "bold";
        } else if (current_Day == "Friday") {
            document.querySelector("#FridayDiv1").style.fontWeight = "bold";
            document.querySelector("#FridayDiv2").style.fontWeight = "bold";
        } else if (current_Day == "Saturday") {
            document.querySelector("#SaturdayDiv1").style.fontWeight = "bold";
            document.querySelector("#SaturdayDiv2").style.fontWeight = "bold";
        } else {
            document.querySelector("#SundayDiv1").style.fontWeight = "bold";
            document.querySelector("#SundayDiv2").style.fontWeight = "bold";
        }

    } catch (error) {
        console.log("home page error")
    }

}



function InitializeApp() {
    let d = new Date();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let current_Day = days[d.getDay()];
    console.log(current_Day)

    document.querySelector("#current_date").innerText = d.toDateString('en-US');
    document.querySelector("#current_date").style.color = "green"
    document.querySelector("#current_date").style.display = "block"
}

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}