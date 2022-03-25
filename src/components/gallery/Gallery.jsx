import JokesData from '../data/jokesData';
import Joke from '../joke/Joke';

const Gallery = () => {
    return(
    <div class="container-fluid text-info">
        <div class="px-lg-5">
            <div class="row d-flex justify-content-center">
            {JokesData.map((joke)=> {
                if(joke.type == 'twopart')
                return <Joke
                    key = {joke.id}
                    title = {joke.title}
                    content = {joke.setup + '' + joke.delivery}
                />
                return <Joke
                    key = {joke.id}
                    title = {joke.title}
                    content = {joke.content}
                />
            })}
            </div>
        </div>
    </div>
    )
}

export default Gallery;