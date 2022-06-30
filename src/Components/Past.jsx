import { parseISO, formatDistanceToNow } from "date-fns";


const Past = ({ timestamp }) => {

let timeAgo = ""
if(timestamp) {
    const date = parseISO(timestamp)
    const timePeriod = formatDistanceToNow(date)
    timeAgo = `${timePeriod.replace("about", "")} ago`
}
  return (
    <span title={timestamp}>
        &nbsp; <i>{timeAgo}</i>
    </span>
  )
}

export default Past