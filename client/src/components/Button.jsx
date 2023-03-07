function Button(props){
    return(
        <div className={props.className}>
            <button onClick={props.onClick}>{props.value}</button>
        </div>
    )
}
export default Button;