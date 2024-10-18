// components/Project.tsx
import '../css/project.css'; // Importer le fichier CSS avec le bon chemin

function Project(props: any) {
    const { projectCont, tourniquet, dispo, titre } = props; // Décomposition des props

    return (
        <div className='apparition project'>
            <h1>{titre}</h1> {/* Utiliser des accolades pour afficher la variable titre */}
            <div className="project-content">
                {dispo === 'left' ? (
                    <>
                        {tourniquet}
                        {projectCont}
                    </>
                ) : (
                    <>
                        {projectCont}
                        {tourniquet}
                    </>
                )}
            </div>
        </div>
    );
}

export default Project;
