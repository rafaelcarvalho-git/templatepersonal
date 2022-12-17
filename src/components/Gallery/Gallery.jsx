import './Gallery.css'
import Fade from 'react-reveal/Fade'

function Gallery() {
    return (
        <section>
            <Fade>
                <div className="gallery container py-5">
                    <h2 className="text-center mt-4 mb-3 gallery-under mx-auto">Galeria</h2>
                    <div class="row">
                        <div class="mx-auto col-md-4">
                            <div class="gallery-image img-1 rounded"></div>
                        </div>
                        <div class="mx-auto col-md-4">
                            <div class="gallery-image img-2 rounded"></div>
                        </div>
                        <div class="mx-auto col-md-4">
                            <div class="gallery-image img-3 rounded"></div>
                        </div>
                        <div class="mx-auto col-md-6">
                            <div class="gallery-image img-4 rounded"></div>
                        </div>
                        <div class="mx-auto col-md-6">
                            <div class="gallery-image img-5 rounded"></div>
                        </div>
                    </div>
                </div>
            </Fade>
        </section>
    );
}

export default Gallery;