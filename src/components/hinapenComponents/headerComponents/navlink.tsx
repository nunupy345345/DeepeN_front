import { NavLink } from "react-router-dom";

type LinkProps = {
    link: string
    text: string
}

export const Link = (props: LinkProps) => {
    const { link, text } = props
    return (
        <div className="link">
            <NavLink to={link}>{text}</NavLink>
        </div>
    )
}