document.addEventListener("DOMContentLoaded", function(){
    const cinemaSeats = document.getElementById('cinemaSeats');
    const totalPriceDisplay = document.getElementById('totalPrice');
    const totalSeats = 25;
    const ticketPrice = 10; 
    const selectedSeats = [];
    function updateTotalPrice() {
        const totalPrice = selectedSeats.length * ticketPrice;
        totalPriceDisplay.textContent = `Total: R$ ${totalPrice}`;
    }
    for (let i = 1; i <= totalSeats; i++) {
        const seat = document.createElement('div');
        seat.classList.add('seat');
        seat.textContent = `${i}`;
        seat.addEventListener('click', function() {
            if (!selectedSeats.includes(i)) {
                selectedSeats.push(i);
                seat.classList.add('selected');
            } else {
                const index = selectedSeats.indexOf(i);
                selectedSeats.splice(index, 1);
                seat.classList.remove('selected');
            }
            updateTotalPrice();
        });
        cinemaSeats.appendChild(seat);
    }
});
        document.getElementById("pagamento").addEventListener("click", function() {
            window.location.href = "/pages/pagamento.html";
        });

        