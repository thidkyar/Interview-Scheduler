import React from "react";
import classNames from "classnames";
import "components/InterviewerListItem.scss";

export default function InterviewerListItem(props) {
    const interviewListClass = classNames({
        'interviewers__item': true,
        'interviewers--selected': props.selected,
        'interviewers--full': props.spots === 0
    })
    console.log(props)
    return (
        <li className={interviewListClass} onClick={() => props.setInterviewer(props.name)}>
            <img
                className="interviewers__item-image"
                src={props.avatar}
                alt={props.name}
            />
            {props.name}
        </li>
    );
}
