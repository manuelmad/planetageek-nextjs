

export default function Trends() {
    return(
        <section className="trends" id="trends">
            <div className="title-container">
                <h2>TENDENCIAS</h2> 
                <p></p>
            </div>
            <div className="trending-articles__container">
                <article className="trend-1__container">
                    <div className="trend-1">
                        <div id="trend1_img" className="img1-container">

                        </div>
                        <div id="description1" classNameName="description">

                        </div>
                    </div>
                </article>
                <article className="trend-2__container">
                    <div className="trend-2">
                        <div id="trend2_img" className="img2-container">

                        </div>
                        <div id="description2" className="description">

                        </div>
                    </div>
                </article>
                <article className="trend-3__container">
                    <div className="trend-3">
                        <div id="trend3_img" className="img3-container">

                        </div>
                        <div id="description3" className="description">

                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
}