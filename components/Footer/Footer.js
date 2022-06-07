import * as Styles from './Footer.module.scss'

function Footer(){
    return (
        <>
            <div id={Styles.footer}>
                <ul>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li><a href="/exercises/all">Exercise Guide</a></li>
                    <li>Supplements</li>
                </ul>
                    <h5>&copy; Manuel Martinez | 2022 </h5>
            </div>
        </>
    )
}

export default Footer