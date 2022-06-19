// 基础数据
let date = new Date()
let current_year = date.getFullYear()
let months = date.getMonth() + 1
let current_month = date.getMonth() + 1
let current_day = date.getDate()
// 获取元素
let calendar_title = document.querySelector(".calendar-title")
let full_date = document.querySelector(".full-date")
// 显示信息
let showInfo = (year, month, day) => {
    let firstDayOfWeek = new Date(current_year, months - 1, 1).getDay()
    let lastDayOfMonth = new Date(current_year, months, 0).getDate()
    let date_array = []
    // 显示日历头部
    document.querySelector(".year").innerHTML = current_year + "年"
    document.querySelector(".month").innerHTML = months + "月"
    // 一个月的天数
    for (let i = 1; i <= lastDayOfMonth; i++) {
        date_array.push(i)
    }
    // 一个月前的空格
    for (let i = 0; i < firstDayOfWeek; i++) {
        date_array.unshift("")
    }
    // 显示日历主体
    for (let i = 0; i < date_array.length; i++) {
        let days = document.createElement("div")
        days.innerHTML = date_array[i]
        full_date.appendChild(days)
        // 取消一号前的hover效果和修改当前日期的背景颜色
        switch (days.innerHTML) {
            case "":
                days.addEventListener("mouseover", function () {
                    this.style.backgroundColor = "#3b4252"
                })
                break
            case current_day.toString():
                days.setAttribute("class", "current_day")
                break
        }
        if (months != current_month) {
            days.removeAttribute("class", "current_day")
        }
        document.querySelector(".time").innerHTML = current_year + "-" + months + "-" + current_day
    }
}
// 上个月
let previous = () => {
    full_date.innerHTML = ""
    months--
    if (months < 1) {
        current_year -= 1
        months = 12
    }
    showInfo(current_year, months)
}
// 下个月
let next = () => {
    full_date.innerHTML = ""
    months++
    if (months > 12) {
        current_year += 1
        months = 1
    }
    showInfo(current_year, months)
}
// 点击日期