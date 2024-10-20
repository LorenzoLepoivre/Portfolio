// components/Tourniquet.tsx
import { useState } from 'react';
import '../css/tourniquet.css'; // Assurez-vous d'importer votre CSS

function Tourniquet(props: any) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { images, isVideo } = props;

    // Fonction pour changer l'image vers la droite
    const changeImageRight = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Fonction pour changer l'image vers la gauche
    const changeImageLeft = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const getYouTubeId = (url: string) => {
        const regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
        const match = url.match(regExp);
        return match ? match[1] : null;
    };


    return (
        <div className="tourniquet-container">
            {isVideo ? (
                 <iframe
                 className="tourniquet-video"
                 src={`https://www.youtube.com/embed/${getYouTubeId(images[currentIndex])}`}
                 title="YouTube video player"
                 allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                 allowFullScreen
                />
            ) : (
                <img src={images[currentIndex]} alt="Tourniquet" className="tourniquet-image" />
            )}
            {/* Afficher les flèches seulement si plusieurs images sont disponibles */}
            {images.length > 1 && (
                <div className="arrow-container">
                    <button onClick={changeImageLeft} className="arrow-button left-arrow">←</button>
                    <button onClick={changeImageRight} className="arrow-button right-arrow">→</button>
                </div>
            )}
        </div>
    );
}

export default Tourniquet;
