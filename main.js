function submitform() {
    var firstname = document.getElementById("firstname");
    var lastname = document.getElementById("lastname");
    var role = document.getElementById("role");
    var availability = document.getElementById("availability");
    var usia = document.getElementById("usia");
    var lokasi = document.getElementById("lokasi");
    var pengalaman = document.getElementById("pengalaman");
    var email = document.getElementById("email");

    var profilename = document.getElementById("p-name");
    var profilerole = document.getElementById("p-role");
    var profilerole = document.getElementById("p-role");
    var profileavailability = document.getElementById("p-availability");
    var profileusia = document.getElementById("p-usia");
    var profilelokasi = document.getElementById("p-lokasi");
    var profilepengalaman = document.getElementById("p-pengalaman");
    var profileemail = document.getElementById("p-email");

    firstname.value ? profilename.innerHTML = `${firstname.value} ${lastname.value}` : profilename.innerHTML = "Nama Anda";
    role.value ? profilerole.innerHTML = role.value : profilerole.innerHTML = "-";
    availability.value ? profileavailability.innerHTML = availability.value : profileavailability.innerHTML = "-";
    usia.value ? profileusia.innerHTML = usia.value : profileusia.innerHTML = "-";
    lokasi.value ? profilelokasi.innerHTML = lokasi.value : profilelokasi.innerHTML = "-";
    pengalaman.value ? profilepengalaman.innerHTML = pengalaman.value : profilepengalaman.innerHTML = "-";
    email.value ? profileemail.innerHTML = email.value : profileemail.innerHTML = "-";
}