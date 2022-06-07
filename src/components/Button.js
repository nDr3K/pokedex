const Button = ({action, actionIcon}) => {
    return(
        <div className="button" onClick={action}>
            {actionIcon}
        </div>
    )
}

export default Button;