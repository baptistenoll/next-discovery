type HeadingProps = {
    tag?: string;
    classNames: string; 
    content: string;
};
  
const HeadingComponent = (props: HeadingProps) => {
    const classNames = props.classNames ? props.classNames : ''
    const content = props.content ? props.content : 'Contenu du titre'
    const Tag = props.tag ? props.tag as "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" : 'h1' ;

    return (
        <Tag className={classNames}>
            {content}
        </Tag>
    );
};
  
export { HeadingComponent };