export const formatSeconds = seconds => {
    const hoursToExpire = Math.floor(seconds / 3600)
    const minutesToExpire = Math.floor(seconds / 60) - hoursToExpire * 60
    const secondsToExpire = seconds % 60
    const formatTime = v => `0${Number.parseInt(v, 10)}`.slice(-2)
    return [hoursToExpire, minutesToExpire, secondsToExpire].map(formatTime).join(':')
}