import React from "react";
import classNames from "classnames"
import "components/DayListItem.scss";

export default function DayListItem(props) {
    const dayListClass = classNames({
        'day-list__item': true,
        'day-list__item--selected': props.selected,
        'day-list__item--full': props.spots === 0
    })
    const formatSpots = (spots) => {
        let spotsMsg = ""
        if (spots === 0) {
            spotsMsg = 'no spots remaining'
        } else if (spots === 1) {
            spotsMsg = '1 spot remaining'
        } else if (spots === 2) {
            spotsMsg = '2 spots remaining'
        } else if (spots > 2){
            spotsMsg = `${spots} spots remaining`
        }
        return spotsMsg
    }
  return (
    <li className={dayListClass} onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
  <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
}