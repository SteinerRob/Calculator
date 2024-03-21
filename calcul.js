LoadInitialData = function (){
    fetch('data.txt')
            .then(response => response.text())
            .then(text => {
                var data = ProcessFile(text);
                document.getElementById('MonthlyInput').value = data[0];
                document.getElementById('RegularInput').value = data[1];
                document.getElementById('balance').textContent ="Balance " + data[2];
                // Get today's date
                const today = new Date();
                // Get the last day of the current month
                // The next month is obtained by adding 1 to the current month.
                // Date(0) gets the last day of the previous month, which is the last day of the current month.
                
                let lastDayOfMonth = new Date();
                let test = today.getDate();
                if(today.getDate() < 15){
                     lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() , 15);
                }
                else if(today.getDate() > 15){
                     lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 15);
                }
                // Calculate the difference in days
                const diffIn = lastDayOfMonth - today;
                const diffInDays = diffIn / (1000 * 60 * 60 * 24);

                document.getElementById('daily').textContent ="You can spend per day: " + Math.round(data[2]/diffInDays);
        });
}

ProcessFile = function (text) {
    
    return text.split(';');
}