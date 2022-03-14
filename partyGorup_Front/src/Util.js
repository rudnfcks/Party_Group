export const dateToString = (date) => {
    const weekDay = ["일요일","월요일","화요일","수요일","목요일","금요일","토요일"]
    const year = date.getFullYear()
    const month = (date.getMonth() + 1).toString().padStart(2, "0")
    const day = date.getDate().toString().padStart(2, "0")
    const hours = date.getHours().toString().padStart(2, "0")
    const minutes = date.getMinutes().toString().padStart(2, "0")
    const second = date.getSeconds().toString().padStart(2, "0")
    const week = weekDay[date.getDay()]

    return {year, month, day, hours, minutes, second, week, date};
}