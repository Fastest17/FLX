function formatTime(min) {
    const day = Math.floor(min / 1440);
    const hour = Math.floor((min - day * 1440) / 60);
    const minute = min - (day * 1440) - (hour * 60);
    const time = day + " day(s) " + hour + " hour(s) " + minute + " minute(s).";
    return time;
}
formatTime(120);
