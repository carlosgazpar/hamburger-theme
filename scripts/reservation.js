const calendarDayElement = document.getElementById('calendar-day')
const calendarMonthElement = document.getElementById('calentar-month')

const currentDay = new Date().getDate()
const currentMonth = new Date().getMonth() 

const monthsList = ['Jan', 'Feb', 'Mar' ,'Apr' , 'May' , 'Jun' , 'Jul' , 'Aug' , 'Sep' , 'Oct' , 'Nov' , 'Dec']

calendarDayElement.innerHTML = currentDay
calendarMonthElement.innerHTML = monthsList[currentMonth]
