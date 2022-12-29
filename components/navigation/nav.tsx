import Maudou from "../../public/images/maudou.svg"
import { HeadingComponent } from "../typographie/headingComponent"
import { ParagrapheComponent } from "../typographie/paragrapheComponent"
import { ImageComponent } from "../images/imageComponent" 
import { ButtonComponent } from "../buttons/buttonComponent"

export default function Nav() {
    return (
      <section>
          <div className={"container flex justify-center items-center"}>

            {/* Composant image */}
            <ImageComponent 
                imgSrc="/images/twitter.png"
                width={200}
                height={100}
                alt="Mon alt"
                classNames=""
            />

            <div className={"w-[200px] h-[200px]"}>
            {/* Composant image svg */}
            <Maudou
                    fill="red"
                    stroke="blue"
                />
            </div>

            {/* Composant heading */}
            <HeadingComponent 
                tag='h1'
                classNames=""
                content="Ceci est mon titre"
            />

            {/* Composant Paragraphe */}
            <ParagrapheComponent 
                classNames=""
                content="Ceci est mon paragraphe"
            />

            {/* Composant bouton */}
            <ButtonComponent 
                icon={true}
                iconSrc="fa-table-columns"
                classNames="btn btn_outline btn_outline-secondary"
                content="Ceci est mon bouton"
            />
          </div>
      </section>
    )
  }