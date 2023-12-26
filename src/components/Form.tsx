interface Field {
    name: string,
    type: string
}

interface FormInterface {
    fields: Field[]
}

export default function Form({ fields }: FormInterface) {
    return (
        <div>
            {fields.map((field, index) => (
                <div key={index} className={`text-lg grid grid-cols-2 py-2 gap-5`}>
                    <label htmlFor={field.name} className="col-span-1">{field.name}</label>
                    <input type={field.type} name={field.name} id={field.name} className="
                                border px-2 text-sm" />
                </div>
            ))}
        </div>
    )
}