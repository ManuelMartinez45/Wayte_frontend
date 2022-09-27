import * as Styles from './Footer.module.scss'
import Link from 'next/link'

function Footer(){
    return (
        <>
            <div id={Styles.footer}>
                <ul>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li><Link href="/exercises/all">Exercise Guide</Link></li>
                </ul>
                    <h5>&copy; Manuel Martinez | 2022 </h5>
            </div>
        </>
    )
}

export default Footer