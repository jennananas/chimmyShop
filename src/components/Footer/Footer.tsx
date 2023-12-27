import { Link } from "react-router-dom"
export default function Footer() {
    const footerContent = [{
        sectionName: "Aide et Informations",
        sectionContent: ["Assistance", "Suivi commande", "Livraison et retours"]
    }, {
        sectionName: "Contact",
        sectionContent: ["Facebook", "Twitter", "Instagram"]
    }, {
        sectionName: "A Propos",
        sectionContent: ["Version", "Crédits"]
    }
    ]
    return (
        <div className="
        border-t-[1px] border-zinc-950
        w-full h-56
        grid grid-cols-4
        justify-items-center
        p-10
        ">
            <div className="flex flex-col gap-2">
                <h2 className="uppercase font-bold">Chimmy</h2>
                <p>Developpé par jenna_nanas</p>
                <p>©2023</p>
            </div>
            {footerContent.map((section, index) => (
                <div key={index} className="flex flex-col gap-2">
                    <h2 className="uppercase font-bold">{section.sectionName}</h2>
                    <ul className="flex flex-col gap-2">
                        {section.sectionContent.map((title, index) => (
                            <li key={index} className="hover:text-zinc-300 hover:cursor-pointer">
                                {title === "Crédits" ? (
                                    <Link to="/credits" key={index}>
                                        {title}
                                    </Link>
                                ) : (
                                    title
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}

        </div>
    )
}