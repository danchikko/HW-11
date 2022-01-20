import formatDate from "./FormatDate";
import UserInfo from "./UserInfo";

function Comment(props) {
    return(
        <div className="Comment">
            <UserInfo user={props.author} />
            <div>
                {props.text}
            </div>
            <div>
                {formatDate(props.date)}
            </div>
        </div>
    );
}

export default Comment;