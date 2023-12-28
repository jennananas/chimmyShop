import { Link } from "react-router-dom"
export default function Footer() {
    const footerContent = [{
        sectionName: "Help & Infos",
        sectionContent: ["Assistance", "Orders", "Deliveries & Returns"]
    }, {
        sectionName: "Contact",
        sectionContent: ["Facebook", "Twitter", "Instagram"]
    }, {
        sectionName: "About Us",
        sectionContent: ["Version", "Credits"]
    }
    ]
    return (
        <div className="
        border-t-[1px] border-zinc-950
        w-full md:max-h-50
        grid grid-cols-4 gap-3
        justify-items-center
        p-5 md:p-10

        ">
            <div className="flex flex-col gap-2">
                <h2 className="uppercase font-bold text-xs md:text-base">Chimmy</h2>
                <p className="text-xs md:text-base">Made by jenna_nanas</p>
                <p className="text-xs md:text-base">©2023</p>
            </div>
            {footerContent.map((section, index) => (
                <div key={index} className="flex flex-col gap-2 ">
                    <h2 className="uppercase font-bold text-xs md:text-base">{section.sectionName}</h2>
                    <ul className="flex flex-col gap-2 text-xs md:text-base">
                        {section.sectionContent.map((title, index) => (
                            <li key={index} className="hover:text-zinc-500 hover:cursor-pointer">
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