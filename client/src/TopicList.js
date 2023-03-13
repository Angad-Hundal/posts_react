

const TopicList = ({all_posts, title}) => {

    return ( 

        <div className="topic-list">

            <h2> {title} ! </h2>

            {/* <h2> {JSON.stringify(all_posts)} </h2> */}

            {
                all_posts.map((post) => (

                    <div>

                    <h5> {post.ID} </h5>
                    <h5> {post.TOPIC} </h5>
                    <h5> {post.DATA}</h5>

                    
                    
                    </div>

                ) )
            }

        </div>
     );
}
 
export default TopicList;