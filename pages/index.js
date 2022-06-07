import styles from '../styles/Home.module.scss'
import { Carousel } from 'react-bootstrap'
import { Fade } from 'react-awesome-reveal'


export default function Home() {
  return (
    <div className={styles.container}>
      <Fade>
        <Carousel id={styles.Carousel} fade interval={1200} indicators={false} controls={false}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://imgk.timesnownews.com/story/roasted-salmon.gif"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://selecthealth.org/-/media/selecthealth82/article/post/2019/03/meal_prep_blog_lg.ashx"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.gannett-cdn.com/presto/2021/07/21/USAT/dfbd657c-1ef5-4dd9-b355-1619bdc2645f-GettyImages-924491214.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://cdn.lifehack.org/wp-content/uploads/2013/06/bodybuilding-tips-1024x768.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Fade>

        <h3 className={styles.sectionHeader}>Nutrition</h3>
        <div id={styles.nutritionSection}>
          <Fade triggerOnce>
            <div className={styles.nutritionArticle}>
              <img src="https://www.csuohio.edu/sites/default/files/eat-right-575px.jpg" alt="" />
              <h4>Lorem Ipsum</h4>
              <p><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, placeat magnam exercitationem impedit, eum id quae corporis tempore molestiae dolore animi ullam suscipit fuga sunt! Rem fuga provident minima obcaecati.</span></p>
            </div>
            <div className={styles.nutritionArticle}>
              <img src="https://www.verywellhealth.com/thmb/P6T-yEHRfWJdtHoZXYdaYGjKSzc=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1145581060-c6f3afa5f308461cab0a77d79a51c68a.jpg" alt="" />
              <h4>Lorem Ipsum</h4>
              <p><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, placeat magnam exercitationem impedit, eum id quae corporis tempore molestiae dolore animi ullam suscipit fuga sunt! Rem fuga provident minima obcaecati.</span></p>
            </div>
            <div className={styles.nutritionArticle}>
              <img src="https://tcoyd.org/wp-content/uploads/2021/04/weight-loss_1100x733.jpg" alt="" />
              <h4>Lorem Ipsum</h4>
              <p><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, placeat magnam exercitationem impedit, eum id quae corporis tempore molestiae dolore animi ullam suscipit fuga sunt! Rem fuga provident minima obcaecati.</span></p>
            </div>
          </Fade>
        </div>

        <hr id={styles.hr}/>

        <h3 className={styles.sectionHeader}>Health</h3>
        <div id={styles.nutritionSection}>
          <Fade triggerOnce>
            <div className={styles.nutritionArticle}>
              <img src="https://www.mensjournal.com/wp-content/uploads/2015/03/singleRDL.jpg?w=900&quality=86&strip=all" alt="" />
              <h4>Lorem Ipsum</h4>
              <p><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, placeat magnam exercitationem impedit, eum id quae corporis tempore molestiae dolore animi ullam suscipit fuga sunt! Rem fuga provident minima obcaecati.</span></p>
            </div>
            <div className={styles.nutritionArticle}>
              <img src="https://embed.widencdn.net/img/veritas/9vexeukzcf/1200x630px/pilates-ab-exercise.jpeg?u=at8tiu&use=d502n&k=c" alt="" />
              <h4>Lorem Ipsum</h4>
              <p><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, placeat magnam exercitationem impedit, eum id quae corporis tempore molestiae dolore animi ullam suscipit fuga sunt! Rem fuga provident minima obcaecati.</span></p>
            </div>
            <div className={styles.nutritionArticle}>
              <img src="https://www.mensjournal.com/wp-content/uploads/2020/10/BeastMode.jpg?quality=86&strip=all" alt="" />
              <h4>Lorem Ipsum</h4>
              <p><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, placeat magnam exercitationem impedit, eum id quae corporis tempore molestiae dolore animi ullam suscipit fuga sunt! Rem fuga provident minima obcaecati.</span></p>
            </div>
          </Fade>
        </div>
    </div>
  )
}
