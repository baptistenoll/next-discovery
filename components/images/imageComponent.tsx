import Image from "next/image";

type ImageProps = {
    imgSrc: string; 
    classNames: string; 
    width: number; 
    height: number;
    alt: string 
};
  
const ImageComponent = (props: ImageProps) => {
    const classNames = props.classNames ? props.classNames : ''
    const imgSrc = props.imgSrc ? props.imgSrc : ''
    const width = props.width ? props.width : undefined
    const height = props.height ? props.height : undefined
    const alt =  props.alt ? props.alt : ''

    return (
        <Image src={imgSrc} className={classNames} alt={alt} width={width} height={height} />
    );
};
  
export { ImageComponent };