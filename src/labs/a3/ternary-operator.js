function TernaryOperator() {
    let loggedIn = true;
    return (
        <div>
            <h1>Loggined In</h1>
            {loggedIn ? <p>Welcome!</p> : <p>Please login</p>}
        </div>
    )
};

export default TernaryOperator;