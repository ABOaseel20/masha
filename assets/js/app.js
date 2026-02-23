let clients = JSON.parse(localStorage.getItem("clients")) || [];
let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
let payments = JSON.parse(localStorage.getItem("payments")) || [];

function save() {
    localStorage.setItem("clients", JSON.stringify(clients));
    localStorage.setItem("bookings", JSON.stringify(bookings));
    localStorage.setItem("payments", JSON.stringify(payments));
}

function id() {
    return Date.now();
}

function totalRevenue() {
    return payments.reduce((s, p) => s + Number(p.amount), 0);
}

function remaining(bookingId) {
    let booking = bookings.find(b => b.id == bookingId);
    let paid = payments.filter(p => p.bookingId == bookingId)
        .reduce((s, p) => s + Number(p.amount), 0);
    return booking.total - paid;
}

function toggleSidebar() {
    document.querySelector(".sidebar").classList.toggle("collapsed");
}

function toggleMode() {
    document.body.classList.toggle("light");
    document.body.classList.toggle("dark");
}

window.onload = function() {
    document.querySelector(".loader").style.display = "none";
}