function Sidebar (props){
    console.log("props:", props)

    const headings = props.sidebar.headings.map((heading, index )=> {
        return <li key={index}>{heading}</li>
    })
    console.log('comments: ', comments);

    return (
    <>
    <h1>{props.sidebar.title}</h1> 
    <h4>By: {props.sidebar.author}</h4>
    <p>{props.sidebar.body}</p>
    <ul>
        {comments}
    </ul>
    <hr/>
    </>
    )
}

export default Sidebar