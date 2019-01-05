let countDwon;
const timeLeft = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds){
    const now = Date.now();
    const then = now + seconds * 1000;
    
    
    
    clearInterval(countDwon);

    displayTimeLeft(seconds);
    displayEndTime(then);


   countDwon = setInterval(function(){
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        console.log(secondsLeft);    

        displayTimeLeft(secondsLeft);
        

        if(secondsLeft <= 0){
            clearInterval(countDwon);
        }

        return;
    
    }, 1000);

}

function displayTimeLeft(secondsLeft){
    const minutes = Math.floor(secondsLeft / 60);
    const remainderSeconds = secondsLeft % 60;

    const display = `${minutes < 10 ? '0':''}${minutes}:${remainderSeconds < 10 ? '0':''}${remainderSeconds}`;
    timeLeft.textContent = display;
}

function displayEndTime(timestamp){
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();

    const display = `Be Back At: ${hour}:${minutes<10 ?'0':''}${minutes}`;
    endTime.textContent = display;
}

function startTimer(){
    const seconds = parseInt(this.dataset.time);
    
    timer(seconds);
}
buttons.forEach(button => button.addEventListener('click', startTimer));

document.customForm.addEventListener('submit', function(e){
    e.preventDefault();
    const mins = this.minutes.value;
    timer(mins * 60);
    this.reset();
});