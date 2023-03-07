function Input(props){
    return(
        <div className={props.className}>
            <input type={props.type} onChange={props.onChange} value={props.value} name={props.name} placeholder={props.placeholder}/>
        </div>
    )
}
export default Input;