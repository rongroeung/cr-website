import moment from 'moment'
import 'moment/locale/km'

function formatDateForBackend(date) {
  if (date == null) return
  return moment(date).format('YYYY-MM-DD HH:mm:ss') + '.000'
}

function formatDateForDateInput(date) {
  if (date == null) return
  date.split(':00.000')
  return moment(date).format('YYYY-MM-DDTHH:mm')
}

function formatDateForDisplay(date) {
  if (date == null) return

  const lang = localStorage.getItem('lang')
  if (lang === 'kh') {
    moment.locale('km') // Set Khmer locale
  }
  return moment(date).format('LLLL') // Format the date
}

export { formatDateForBackend, formatDateForDateInput, formatDateForDisplay }
