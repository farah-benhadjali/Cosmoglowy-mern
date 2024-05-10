import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const HeroSection = () => {
    return (
        <>

            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true"
                            aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item w-100 h-75 position-relative active">
                        <div
                            style={{
                                width: "100vw",
                                height: "85vh",
                                backgroundImage: "url('https://camerareadycosmetics.com/cdn/shop/collections/Make_Up_For_Ever_Logo.jpg?v=1651076762')", /* Specify the path to your image */
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}>
                            <div
                                style={{
                                    width: "100vw",
                                    height: "85vh",
                                    background: 'linear-gradient(to bottom, rgba(128, 128, 128, 0) 50%, rgba(128, 128, 128, 1))',
                                    opacity: 0.6
                                }}/>
                        </div>
                        <div className="carousel-caption d-none d-md-block text-black">
                            <h5>Make Up Forever Marque</h5>
                        </div>
                    </div>
                    <div className="carousel-item w-100 h-75 position-relative">
                        <div
                            style={{
                                width: "100vw",
                                height: "85vh",
                                backgroundImage: "url('https://www.revolutionbeauty.com/on/demandware.static/-/Library-Sites-revbe-content-global/default/dwa62a3437/images/homepage/2024/wk7/HomepageHero_Desktop_SkinSilk_A.jpg')", /* Specify the path to your image */
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}>
                            <div
                                style={{
                                    width: "100vw",
                                    height: "85vh",
                                    background: 'linear-gradient(to bottom, rgba(128, 128, 128, 0) 50%, rgba(128, 128, 128, 1))',
                                    opacity: 0.6
                                }}/>
                        </div>
                        <div className="carousel-caption d-none d-md-block text-black">
                            <h5>Revolution Marque</h5>
                        </div>
                    </div>
                    <div className="carousel-item w-100 h-75 position-relative">
                        <div
                            style={{
                                width: "100vw",
                                height: "85vh",
                                backgroundImage: "url('https://stralabeauty.com/wp-content/uploads/2022/09/artdeco-palette-blog-banner.png')", 
                                /* Specify the path to your image */
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}>
                            <div
                                style={{
                                    width: "100vw",
                                    height: "85vh",
                                    background: 'linear-gradient(to bottom, rgba(128, 128, 128, 0) 50%, rgba(128, 128, 128, 1))',
                                    opacity: 0.6
                                }}/>
                        </div>
                        <div className="carousel-caption d-none d-md-block text-black">
                            <h5>Artdeco Marque</h5>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev fs-1 primary" type="button" data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide="prev">
                    <FontAwesomeIcon icon={faChevronLeft}/>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next fs-1 primary" type="button" data-bs-target="#carouselExampleAutoplaying"
                        data-bs-slide="next">
                    <FontAwesomeIcon icon={faChevronRight}/>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}