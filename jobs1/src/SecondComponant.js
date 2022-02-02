function Second(props) {
    return (
        <div>
            <button onClick={() => props.param("Componant 2 says Hi :)")}>
                {props.wow}
            </button>
        </div>
    );
}

export default Second;
