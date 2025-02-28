import './Main.css';
import Article from '../Article/Article';

const img1 = '/img1.jpg'
const img2 = '/img2.jpg'
const img3 = '/img3.jpg'

function Main() {

    return (
        <main>

            <h2>J'aime le développement web, et vous allez comprendre pourquoi à l'instant.</h2>

            <Article imageSrc={img1} alt="Créativité" title="Je peux y être créatif !" desc="Le développement web me permet d'explorer ma créativité en concevant des interfaces uniques et
                    interactives." />

            <Article imageSrc={img2} alt="Utilité" title="Je peux construire des choses utiles." desc="Avec le code, je peux résoudre des problèmes concrets et créer des applications qui aident les gens au quotidien." />

            <Article imageSrc={img3} alt="Technologie évolutive" title="Les technologies évoluent rapidement, et ça me garde à l'affût." desc="Le secteur est en constante évolution, ce qui me pousse à apprendre et à rester à jour avec les
                    nouvelles tendances." />

            {[
                { imageSrc: null, alt: 'Image 1', title: 'Blablabla', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
                { imageSrc: 'img1', alt: 'Innovations technologiques', title: 'Tech Innovations', desc: 'Les nouvelles technologies transforment le monde des affaires.' },
                { imageSrc: 'img2', alt: 'Révolution de l\'IA', title: 'AI Revolution', desc: 'L\'intelligence artificielle modifie la façon dont nous interagissons avec le monde.' }
            ].map(obj => {
                return <Article imageSrc={obj.imageSrc} alt={obj.alt} title={obj.title} desc={obj.desc} />
            })}
            
        </main>
    );

}

export default Main;