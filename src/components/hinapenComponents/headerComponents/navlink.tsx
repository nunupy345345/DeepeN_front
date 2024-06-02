import { NavLink } from "react-router-dom";

type LinkProps = {
    link: string
    text: string
    linkName: string
};

export const Link = (props: LinkProps) => {
    const { link, text, linkName } = props
    return (
        <div className="link">
            <NavLink to={link} className={linkName}>{text}</NavLink>
        </div>
    );
};