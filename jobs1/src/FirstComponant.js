function First(props) {
    return (
        <div>
            <button onClick={() => {props.param("Componant 1 says Hi :)")}}>
                {props.wow}
            </button>
        </div>
    );
}

export default First;
