import './Article.css'

function Article({imageSrc, alt, title, desc}) {

    return (

        <div class="list-item">
            <img src={imageSrc}
                alt={alt} />
            <div>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        </div>

    );

}

export default Article