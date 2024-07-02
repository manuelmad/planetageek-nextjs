import Image from "next/image";
import './trends.css';

export default function Trends({
    imgUrl1,
    imgUrl2,
    imgUrl3,
}) {

    return(
        <section className="trends" id="trends">
            <div className="title-container">
                <h2>TENDENCIAS</h2> 
                <p></p>
            </div>
            <div className="trending-articles__container">
                <article>
                    <div>
                        <div>
                            <Image
                                src={imgUrl1 || '/public/next.svg'}
                                alt="trend1 img"
                                width={300}
                                height={200}    
                            />
                        </div>
                        <div>
                            <h3 id="h3_1"></h3>
                            <p id="p1"></p>
                        </div>
                    </div>
                </article>
                <article>
                    <div>
                        <div>
                            <Image
                                src={imgUrl2 || '/public/next.svg'}
                                alt="trend2 img"
                                width={300}
                                height={200}    
                            />
                        </div>
                        <div>
                            <h3 id="h3_2"></h3>
                            <p id="p2"></p>
                        </div>
                    </div>
                </article>
                <article>
                    <div>
                        <div>
                            <Image
                                src={imgUrl3 || '/public/next.svg'}
                                alt="trend3 img"
                                width={300}
                                height={200}    
                            />
                        </div>
                        <div>
                            <h3 id="h3_3"></h3>
                            <p id="p3"></p>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
}