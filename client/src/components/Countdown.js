import react, {useRef, useEffect, useState} from 'react';

const Countdown = () => {

    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const countdownDate  = new Date('December 25 2021 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const diff = countdownDate - now;

            const days = Math.floor(diff / (1000 * 60 * 60 *24));
            const hours = Math.floor((diff % (1000 * 60 * 60 *24) / (1000 * 60 * 60)));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            
            if (diff < 0) {
                clearInterval(interval.current);
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }

        }, 1000)
    };

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        }
    })

    return (
        <div className = "timer-container">
            <div className="timer-wrapper">
                <section className="timer-section">
                    <p>Days</p>
                    <p>{timerDays}</p>
                </section>
                <section className="timer-section">
                    <p>Hours</p>
                    <p>{timerHours}</p>
                </section>
                <section className="timer-section">
                    <p>Minutes</p>
                    <p>{timerMinutes}</p>
                </section>
                <section className="timer-section">
                    <p>Seconds</p>
                    <p>{timerSeconds}</p>
                </section>
            </div>
        </div>
    )
}

export default Countdown;