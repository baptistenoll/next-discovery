type ParagrapheProps = {
    classNames: string; 
    content: string;
};
  
const ParagrapheComponent = (props: ParagrapheProps) => {
    const classNames = props.classNames ? props.classNames : ''
    const content = props.content ? props.content : 'Contenu du paragraphe'

    return (
        <p className={classNames}>
            {content}
        </p>
    );
};
  
export { ParagrapheComponent };