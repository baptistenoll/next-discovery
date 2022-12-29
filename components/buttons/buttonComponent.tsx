type ButtonProps = {
    icon: boolean;
    iconSrc: string
    classNames: string; 
    content: string;
};
  
const ButtonComponent = (props: ButtonProps) => {
    const icon = props.icon ? props.icon : false
    const iconSrc = props.iconSrc ? props.iconSrc : ''
    const classNames = props.classNames ? props.classNames : ''
    const content = props.content ? props.content : 'Contenu du titre'

    return (
        <button className={ icon ? 'btn_icon ' + classNames : '' +  classNames}>
            {icon ? <i className={iconSrc}></i> : null}
            {content}
        </button>
    );
};
  
export { ButtonComponent };