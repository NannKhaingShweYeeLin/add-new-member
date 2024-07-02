import Card from "./Card"

const List = (props) => {
    return (
        <>
            {props.userInfos.length > 0 ? (
                <> {
                props.userInfos.map((info) => (
                    <Card css={"card-mt"} key={info.email}>
                        <p>Name : {info.name}</p>
                        <p>Live : {info.live}</p>
                        <p>Email : {info.email}</p>
                    </Card>
                ))
            } 
            </>
            ) : (
            <>
                <Card css={"card-mt"} >
                    <p>Add a new user right now</p>
                </Card>

            </>
        )}

        </>
    )
}

export default List