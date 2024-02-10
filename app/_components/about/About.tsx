import PageContainer from "@/app/_components/ui/page-container";
import {AboutParagraph} from "@/app/_components/about/AboutParagraph";

export function About() {
    return (
        <section className={"flex flex-col"}>
            <PageContainer>
                <AboutParagraph position={"left"} imageUrl={"/img/about/ABOUT_1.png"}
                                alternatifText={"Personne recevant un massage ou une thérapie physique dans un cadre intérieur"}
                                title={"Le Magnétisme, une approche complémentaire et à disposition de tous :"}>

                    <p className="text-justify mx-4 my-4">
                        « Fille de magnétiseur, j’ai rapidement appréhendé l’énergétique comme une
                        solution complémentaire à nos méthodes médicales conventionnelles. Magnétiseuse depuis
                        toujours
                        (et
                        également formée en 2018 par un magnétiseur expérimenté sur Grenoble), je ne cesse
                        d’apprendre
                        de
                        nouvelles techniques pour évoluer dans ma pratique. Passionnée par le corps humain,
                        l’esprit,
                        les
                        émotions et les problématiques énergétiques qui en découlent, je vous accompagne également
                        si
                        nécessaire, à la Libération des Perturbations Émotionnelles (méthode ALPE).
                    </p>
                    <p className="text-justify mx-4 my-4">
                        Durant mes séances et dans ma vie en générale, j&apos;accorde une importance particulière à
                        mon
                        intuition, la considérant comme une boussole précieuse.
                    </p>
                    <p className="text-justify mx-4 my-4">
                        Et parce que je pense que chaque symptôme est un message de l&apos;âme qui souhaite
                        pleinement
                        s&apos;exprimer, je propose à ceux qui le souhaitent d&apos;échanger sur leur problématique
                        afin
                        de
                        trouver ensemble des
                        issues possibles à leurs obstacles ».</p>

                </AboutParagraph>
                <AboutParagraph position={"right"}
                                imageUrl={"/img/about/ABOUT_2.png"}
                                title={"Le Tarot, une découverte passionnante :"}
                                alternatifText={"Deux personnes engagées dans une séance de lecture de cartes dans un cadre intérieur"}>

                    <p className="text-justify mx-4 my-4">
                        « Passionnée par le Tarot de Marseille, j&apos;ai commencé à me tirer les cartes pour moi-même,
                        puis
                        pour des amis, les amis d&apos;amis, puis à des inconnus...
                    </p>
                    <p className="text-justify mx-4 my-4">
                        J&apos;utilise le tarot non pas à des fins divinatoires mais plutôt en tant qu&apos;outil
                        d&apos;aide à la
                        décision. Dans les tirages que je propose, il n&apos;y a pas de bons ou de mauvais chemins. Il
                        n&apos;y a
                        que des conseils pour réussir au mieux les chemins que vous souhaitez emprunter.
                    </p>
                    <p className="text-justify mx-4 my-4">
                        J&apos;ai étudié pendant plusieurs années l&apos;Histoire du tarot de Marseille principalement
                        par le
                        biais de Tarologues tels que Kris Hadar, Laurence Godde ou encore Sebastien Michel.</p>
                    <p className="text-justify mx-4 my-4">
                        J&apos;utilise les techniques picturales et symboles originels du Tarot ainsi que ma propre
                        intuition
                        pour adapter mes tirages au consultant.
                    </p>
                    <p className="text-justify mx-4 my-4">
                        Durant mes ateliers, je vous propose d&apos;utiliser le tarot comme un voyage
                        d&apos;introspection
                        menant
                        à des prises de conscience sur votre être profond.
                    </p>

                </AboutParagraph>
                <AboutParagraph position={"left"}
                                imageUrl={"/img/about/ABOUT_3.png"}
                                title={"Conseils en entreprise :"}
                                alternatifText={"Plusieurs mains de personnes diverses tenant des pièces de puzzle dorées, symbolisant le travail d’équipe ou la collaboration"}>

                    <p className="text-justify mx-4 my-4">
                        Ingénieure de formation, ancienne contrôleuse de gestion et ayant travaillé dans plusieurs
                        secteurs d’activités (transports, électricité & gaz, bailleur social, banque, assurance,…),
                        j’apporte également mes conseils pour un accompagnement personnalisé afin d’identifier les
                        points de blocages, et proposer des axes d’amélioration.
                    </p>
                    <p className="text-justify mx-4 my-4">
                        J’agis sur un spectre global considérant l’entreprise comme une entité vivante ayant une
                        structure énergétique identique à un individu.
                    </p>


                </AboutParagraph>
                <AboutParagraph position={"right"}
                                imageUrl={"/img/about/ABOUT_4.png"}
                                title={"Accompagnement de séjours :"}
                                alternatifText={"Collage de plusieurs images, avec une image centrale d’une personne dont le visage est obscurci, entourée de six images plus petites représentant diverses scènes de la vie"}>

                    <p className="text-justify mx-4 my-4 ">
                        Voyageuse dans l’âme, je mène des aventures uniques, alliant découverte, exploration et
                        équilibre intérieur. J’accompagne des groupes vers des expériences inoubliables, fusionnant
                        l&apos;aventure avec une quête de bien-être profond.
                    </p>
                    <p className="text-justify mx-4 my-4">
                        Mes voyages ne se limitent pas aux paysages époustouflants, mais s&apos;étendent à la découverte
                        de
                        soi et à l&apos;harmonie intérieure. Nous plongeons dans des activités en plein air, réveillant
                        notre
                        esprit d&apos;aventure tout en mettant l&apos;accent sur la connexion avec l’environnement
                        culturel et
                        naturel.
                    </p>
                    <p className="text-justify mx-4 my-4">
                        Mais au-delà de l&apos;adrénaline des défis extérieurs, j&apos;accorde une importance toute
                        particulière à
                        la dimension du bien-être. Des moments de méditation paisible au couché du soleil aux
                        discussions enrichissantes sous les étoiles, je crée un espace où l&apos;équilibre mental,
                        émotionnel
                        et physique est nourri. Je crois fermement que l&apos;aventure et le bien-être sont des
                        compagnons de
                        voyage indispensables.
                    </p>


                </AboutParagraph>
            </PageContainer>
        </section>
    );
}